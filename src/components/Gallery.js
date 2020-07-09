import React from "react"
import ImageGallery from "react-image-gallery"

const Gallery = ({ images }) => {
  const imagesList = images.map(({ file }) => ({
    original: file.url,
    thumbnail: file.url,
  }))

  console.log(images)

  return <ImageGallery items={imagesList} />
}

export default Gallery
