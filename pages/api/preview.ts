import type { NextApiRequest, NextApiResponse } from "next";

import { previewSecretDocumentId, token } from "@/sanity/env";
import { client } from "@/sanity/lib/client";
import { getPreviewSecret } from "@/sanity/lib/previewSecret";

export default async function preview(
  req: NextApiRequest,
  res: NextApiResponse<string | void>
) {
  if (!token) {
    res.status(500).send("Misconfigured server");
    return;
  }

  const { query } = req;

  const secret = typeof query.secret === "string" ? query.secret : undefined;
  const slug = typeof query.slug === "string" ? query.slug : "home"; // slugs that are objects default to home
  const type = typeof query.type === "string" ? query.type : `${query.type}`;
  const path: { [key: string]: string } = {
    home: "/",
    about: "/about",
    products: `/${slug}`,
    faq: "/faq",
    downloads: "/downloads",
    press: slug === type ? "/press" : `/press/${slug}`,
    manufacturersMaps: "/contact",
    distributors: "/contact",
    socials: "/",
    salesMaps: "/contact",
    caseStudies: "/",
    videos: "/press",
  };

  if (!secret) {
    res.status(401);
    res.send("Invalid secret");
    return;
  }

  const authClient = client("homegrid").withConfig({
    useCdn: false,
    token,
  });

  // The secret can't be stored in an env variable with a NEXT_PUBLIC_ prefix, as it would make you
  // vulnerable to leaking the token to anyone. If you don't have an custom API with authentication
  // that can handle checking secrets, you may use https://github.com/sanity-io/sanity-studio-secrets
  // to store the secret in your dataset.
  const storedSecret = await getPreviewSecret({
    client: authClient,
    id: previewSecretDocumentId,
    createIfNotExists: true,
  });
  // This is the most common way to check for auth, but we encourage you to use your existing auth
  // infra to protect your token and securely transmit it to the client
  if (secret !== storedSecret) {
    return res.status(401).send("Invalid secret");
  }

  if (slug) {
    res.setPreviewData({ token: token });
    res.writeHead(307, { Location: path[type] });
    res.end();
    return;
  }

  res.status(404).send("Slug query parameter is required");
  res.end();
}
