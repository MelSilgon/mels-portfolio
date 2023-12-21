import * as React from "react"

const DefaultTemplate = contentfulPage => {
  return (
    <main>
      <h2>{contentfulPage.title}</h2>
      <p>Default template</p>
    </main>
  )
}

export default DefaultTemplate
