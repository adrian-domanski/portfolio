import React from "react"
import Layout from "../components/Layout/Layout"
import {
  SectionTitle,
  BiggerStyledSection,
  Paragraph,
  Blockquote,
} from "../utils/styled/components"
import { graphql } from "gatsby"
import ProjectTile from "../components/ProjectTile"
import SEO from "../components/seo"
import Fade from "react-reveal/Fade"

const Projects = ({ data }) => {
  const projects = data.allContentfulProjects.edges

  const projectsList = projects.map(project => (
    <ProjectTile
      key={project.node.id}
      className="column is-4"
      project={project.node}
    />
  ))

  return (
    <Layout darkFooter>
      <SEO title="Strony internetowe - Adrian Domański - Projekty" />
      <BiggerStyledSection>
        <SectionTitle>Moje projekty</SectionTitle>
        <Paragraph className="has-text-centered mb-6"></Paragraph>
        <div className="content">
          <Blockquote className="is-primary">
            W imię zasady{" "}
            <span className="has-text-primary">
              &bdquo;Pokaż mi swój kod, a powiem Ci kim jesteś&rdquo;
            </span>{" "}
            zamieszczam poniżej kilka własnych projektów:
          </Blockquote>
        </div>
        <Fade>
          <div className="columns is-multiline">{projectsList}</div>
        </Fade>
      </BiggerStyledSection>
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulProjects {
      edges {
        node {
          id
          slug
          title
          short
          images {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`

export default Projects
