import React from "react"
import ImageGallery from "react-image-gallery"

const Gallery = ({ images }) => {
  const imagesList = images.map(({ file, fluid }) => ({
    original: file.url,
    thumbnail: fluid.src,
  }))

  return <ImageGallery items={imagesList} />
}

export default Gallery
