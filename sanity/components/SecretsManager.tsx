import {useEffect, useState} from 'react'
import {useSecrets, SettingsView} from '@sanity/studio-secrets'
import { previewSecretDocumentId } from '../env';

const namespace = previewSecretDocumentId;

const pluginConfigKeys = [
  {
    key: "apiKey",
    title: "Your secret API key",
  },
];

export const SecretsManager = () => {
  const { secrets } = useSecrets(namespace);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    if (!secrets) {
      setShowSettings(true);
    }
  }, [secrets]);

  if (!showSettings) {
    return null;
  }
  return (
    <SettingsView
      title={"SECRETS"}
      namespace={namespace}
      keys={pluginConfigKeys}
      onClose={() => {
        setShowSettings(false);
      }}
    />
  );
};
