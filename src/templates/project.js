import React from "react"
import Layout from "../components/Layout/Layout"
import { graphql } from "gatsby"
import {
  StyledSection,
  SectionTitle,
  StyledList,
  StyledListItem,
  SectionSubtitle,
  Paragraph,
} from "../utils/styled/components"
import Gallery from "../components/Gallery"

const ProjectDetails = ({ data }) => {
  const projectData = data.contentfulProjects

  const technologies = projectData.technologies.content[0].content[0].value.split(
    ", "
  )

  return (
    <Layout darkFooter>
      <StyledSection>
        <SectionTitle>{projectData.title}</SectionTitle>
        <Gallery images={projectData.images} />
      </StyledSection>
      <StyledSection>
        <SectionSubtitle>Wykorzystane technologie</SectionSubtitle>
        <StyledList>
          {technologies.map((technology, index) => (
            <StyledListItem key={index}>{technology}</StyledListItem>
          ))}
        </StyledList>
      </StyledSection>
      <StyledSection>
        <SectionSubtitle>Kilka słów o projekcie:</SectionSubtitle>
        <Paragraph>
          {projectData.description.content[0].content[0].value}
        </Paragraph>
      </StyledSection>
      <StyledSection>
        <SectionSubtitle>Dodatkowe informacje:</SectionSubtitle>
        {projectData.live && (
          <p>
            Wersja live:{" "}
            <a
              href={projectData.live}
              target="_blank"
              className="has-text-primary"
            >
              {projectData.live}
            </a>
          </p>
        )}
        {projectData.code && (
          <p>
            Kod:{" "}
            <a
              href={projectData.code}
              target="_blank"
              className="has-text-primary"
            >
              {projectData.code}
            </a>
          </p>
        )}
      </StyledSection>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulProjects(slug: { eq: $slug }) {
      slug
      title
      live
      code
      images {
        fluid {
          src
        }
        file {
          url
        }
      }
      description {
        content {
          content {
            value
          }
        }
      }
      technologies {
        content {
          content {
            value
          }
        }
      }
    }
  }
`

export default ProjectDetails
