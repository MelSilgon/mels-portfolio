import React from "react"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"

const RichTextRender = ({ richTextNode }) => {
  const options = {
    renderMark: {
      //Render Bold
      [MARKS.BOLD]: text => <b className="font-bold">{text}</b>,
      //Render Italic
      [MARKS.ITALIC]: text => <em>{text}</em>,
    },
    renderNode: {
      //Render Paragraph
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className="align-center">{children}</p>
      ),
      //Embedded
      [BLOCKS.EMBEDDED_ASSET]: node => {
        return (
          <>
            <h2>Embedded Asset</h2>
            <pre>
              <code>{JSON.stringify(node, null, 2)}</code>
            </pre>
          </>
        )
      },
    },
  }

  return <div>{renderRichText(richTextNode, options)}</div>
}

export default RichTextRender
