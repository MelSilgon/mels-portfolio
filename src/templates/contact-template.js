import React from "react"
import RichTextRender from "../components/richtextRender"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import useSocials from "../hooks/useSocials"

const ContactTemplate = contentfulPage => {
  const socials = useSocials()

  return (
    <div class="container-center">
      <h2>{contentfulPage.title}</h2>
      <div>
        {/* description.raw text gets rendered here*/}
        <RichTextRender richTextNode={contentfulPage.description} />
      </div>
      {/* SOCIALS SECTION */}
      <div class="socials-wrapper">
        <b>Socials:</b>
        <ul class="icons-wrapper">
          {socials.map(edge => {
            const icon = getImage(edge.node.image)
            return (
              <li key={edge.node.id}>
                <a href={edge.node.socialLink}>
                  <GatsbyImage image={icon} alt={edge.node.name} />
                </a>
              </li>
            )
          })}
        </ul>
      </div>
      <div class="contact-form-wrapper">
        {/* CONTACT FORM SECTION */}
        <form
          method="post"
          netlify-honeypot="bot-field"
          data-netlify="true"
          name="contact"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <label>
            <p>Message:</p>
            <textarea name="message"></textarea>
          </label>
          <input type="button" value="Send" />
        </form>
      </div>
    </div>
  )
}

export default ContactTemplate
