import React from "react"
import RichTextRender from "../components/richtextRender"

const ContactTemplate = contentfulPage => {
  return (
    <main>
      <h2>{contentfulPage.title}</h2>
      <div>
        {/* description.raw text gets rendered here*/}
        <RichTextRender richTextNode={contentfulPage.description} />
      </div>
    </main>
  )
}

export default ContactTemplate
