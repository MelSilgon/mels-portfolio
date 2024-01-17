import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import RichTextRender from "../components/richtextRender"

const DefaultTemplate = contentfulPage => {
  const image = getImage(contentfulPage.image)

  return (
    <div class="home-wrapper">
      <GatsbyImage
        image={image}
        alt={contentfulPage.title}
        class="hero-image"
      ></GatsbyImage>

      {/* HERO TEXT CONTENT */}
      <div class="hero-text">
        <h3>
          <RichTextRender richTextNode={contentfulPage.description} />
        </h3>
      </div>
    </div>
  )
}

export default DefaultTemplate
