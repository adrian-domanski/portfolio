import React from "react"
import Layout from "../components/Layout/Layout"
import {
  StyledSection,
  SectionTitle,
  BiggerStyledSection,
  DarkerSection,
} from "../utils/styled/components"
import { graphql } from "gatsby"
import ProjectTile from "../components/ProjectTile"

const Projects = ({ data }) => {
  console.log(data)
  const projects = data.allContentfulProjects.edges

  const projectsList = projects.map(project => (
    <ProjectTile
      key={project.id}
      className="column is-4"
      project={project.node}
    />
  ))

  return (
    <Layout darkFooter>
      <BiggerStyledSection>
        <SectionTitle>Moje projekty</SectionTitle>
        <div className="columns is-multiline">{projectsList}</div>
      </BiggerStyledSection>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulProjects {
      edges {
        node {
          slug
          title
          short
          images {
            fluid(quality: 100) {
              src
            }
          }
          id
        }
      }
    }
  }
`

export default Projects
