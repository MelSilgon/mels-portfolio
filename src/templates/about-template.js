import React from "react"
import RichTextRender from "../components/richtextRender"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const AboutTemplate = contentfulPage => {
  const image = getImage(contentfulPage.image)

  return (
    <div class="grid-wrapper-right">
      <div class="hero-image-right">
        <GatsbyImage
          image={image}
          alt={contentfulPage.title}
          class="hero-image-about"
        ></GatsbyImage>
      </div>

      {/* HERO TEXT CONTENT */}
      <div class="hero-text-left">
        <h2>{contentfulPage.title}</h2>
        <p>
          <RichTextRender richTextNode={contentfulPage.description} />
        </p>
      </div>
    </div>
  )
}

export default AboutTemplate
