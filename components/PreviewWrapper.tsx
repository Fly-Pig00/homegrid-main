import React, { ReactElement } from 'react';
import { PreviewSuspense } from 'next-sanity/preview';
import { usePreview } from '@/sanity/preview';

type PreviewProps = {
  preview: boolean;
  children: ReactElement | ReactElement[] ;
  query: string
};

const PreviewWrapper = ({ preview, children, query }: PreviewProps): ReactElement => {
  const ChildComponent = (): ReactElement => {
    const previewData = usePreview(null,  query);

    return (
      <>
        {React.Children.map(children, (child: ReactElement, index: number) => {
          return React.cloneElement(child, { data: previewData, key: index });
        })}
      </>
    );
  };

  if (preview) {
    return (
      <PreviewSuspense fallback={<div>...loading</div>}>
        <ChildComponent />
      </PreviewSuspense>
    );
  }

  return <>{children}</>;
};

export default PreviewWrapper;
