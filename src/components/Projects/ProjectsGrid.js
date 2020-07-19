import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"
import { SectionSubtitle } from "../../utils/styled/components"

const MyProjectsGrid = styled.div`
  .my-project {
    @media screen and (min-width: 768px) {
      display: grid;

      grid-template-columns: 1fr 1fr;
    }

    .show-more {
      :hover p {
        transition: color 0.2s ease-in-out;
        color: #c38c28 !important;
      }
    }

    :not(:last-child) {
      margin-bottom: 2rem;
    }

    :nth-child(even) {
      .my-project__img {
        grid-column: 2 / 3;
        grid-row: 1;
      }

      .my-project__info {
        grid-column: 1 / 2;
        grid-row: 1;
      }
    }
  }

  .my-project__info {
    padding: 2rem;
    background-color: ${({ theme }) => theme.colors.darkGrey};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .my-project__info-title {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.lightWhite};
  }

  .my-project__img {
    overflow: hidden;
  }
`

const StyledImg = styled.img`
  display: block;
  object-fit: cover;
  width: 100%;
  height: 100%;
  transition: transform 0.2s ease-in-out;

  :hover {
    transform: scale(1.05);
  }
`

const ProjectsGrid = () => {
  const query = useStaticQuery(graphql`
    query {
      allContentfulProjects(
        filter: {
          id: {
            in: [
              "07bd2745-a5e2-53fa-9abc-8bd596d220ae"
              "36b931a8-f86c-5a77-bed0-cd175e11b3ae"
              "877b4f89-5a6d-5ca8-8ead-30c825ddea89"
            ]
          }
        }
      ) {
        edges {
          node {
            id
            title
            slug
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
  `)

  return (
    <MyProjectsGrid>
      {query.allContentfulProjects.edges.map(({ node }, index) => (
        <div key={node.id} className="my-project">
          <div className="my-project__img">
            <Link to={`/projekty${node.slug}`} className="my-project__link">
              <StyledImg
                src={node.images[0].fluid.src}
                alt={`Podgląd strony ${node.title}`}
              />
            </Link>
          </div>
          <div className="my-project__info">
            <div className="project-info">
              <SectionSubtitle className="my-project__info-title">
                {node.title}
              </SectionSubtitle>
              <p className="my-project__info-short my-3">{node.short}</p>
            </div>
            <Link
              to={`/projekty${node.slug}`}
              className="my-project__link show-more"
            >
              <p className="has-text-primary">Szczegóły projektu...</p>
            </Link>
          </div>
        </div>
      ))}
    </MyProjectsGrid>
  )
}

export default ProjectsGrid
