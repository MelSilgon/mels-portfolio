import React from "react"
import RichTextRender from "../components/richtextRender"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import useSocials from "../hooks/useSocials"

const AboutTemplate = contentfulPage => {
  const socials = useSocials()
  const image = getImage(contentfulPage.image)

  return (
    <>
      <h2>{contentfulPage.title}</h2>
      {/* description.raw text gets rendered here*/}
      <RichTextRender richTextNode={contentfulPage.description} />

      <GatsbyImage image={image} alt={contentfulPage.title}></GatsbyImage>
      <p>Socials</p>
      <ul>
        {socials.map(edge => {
          return (
            <li key={edge.node.id}>
              <p>
                {edge.node.icon}
                {edge.node.name}
              </p>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default AboutTemplate
