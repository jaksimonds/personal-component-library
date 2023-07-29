import React, { FC } from 'react';

interface IImage {
  className?: string;
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  loading?: 'eager' | 'lazy';
}

const Image: FC<IImage> = ({
  className,
  src,
  alt,
  width,
  height,
  loading
}) => {
  let NextImage = null;

  if (typeof window !== 'undefined') {
    try {
      NextImage = require('next/image').default;
    } catch {
      console.log('Not using Next.js');
    }
  }

  const ImageComponent = NextImage || 'img';

  return (
    <ImageComponent
      className={className}
      src={src}
      alt={alt || ''}
      width={width || 0}
      height={height || 0}
      loading={loading || 'lazy'}
    />
  );
};

export default Image;
