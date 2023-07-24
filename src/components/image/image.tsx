import type { FC } from 'react'
import type { GetImageResult } from 'astro'

const Image: FC<{ image: GetImageResult; alt: string }> = ({ image, alt }) => {
  return (
    <img
      src={image.src}
      width={image.options.width}
      height={image.options.height}
      alt={alt}
      decoding="async"
      style={{
        aspectRatio: (image.options.width || 4) / (image.options.height || 3),
      }}
      {...image.attributes}
    />
  )
}

export default Image
