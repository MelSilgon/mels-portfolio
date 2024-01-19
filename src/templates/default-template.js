import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import RichTextRender from "../components/richtextRender"

const DefaultTemplate = contentfulPage => {
  const image = getImage(contentfulPage.image)

  return (
    <div class="home-wrapper">
      {/* HERO IMAGE */}
      <div class="hero-image-wrapper">
        <GatsbyImage
          image={image}
          alt={contentfulPage.title}
          class="hero-image"
        ></GatsbyImage>
      </div>

      {/* HERO TEXT CONTENT */}
      <div class="hero-text">
        <div>
          <p>{contentfulPage.title}</p>
          <RichTextRender richTextNode={contentfulPage.description} />
        </div>
      </div>
    </div>
  )
}

export default DefaultTemplate
