import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { renderToString } from 'react-dom/server'

import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../md-store/assets/about.json"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>{About.name}</h1>
    <p>{About.year}</p>
    <StaticImage
      src={"../../static/img/crying-cat.jpg"}
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
  </Layout>
)

//src={"../../static" + renderToString(About.image)}
//src={"../../static/img/crying-cat.jpg"}
//src={"../../static" + About.image}

export default IndexPage
