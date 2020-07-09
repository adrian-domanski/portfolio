import React from "react"
import styled from "styled-components"
import { SectionSubtitle, Paragraph } from "../utils/styled/components"
import { Link } from "gatsby"

const Card = styled.div`
  box-shadow: ${({ theme }) => theme.boxShadow};
  background-color: #3a3a3a;
  transition: transform 0.1s ease-in-out;
  cursor: pointer;
  flex-direction: column;
  height: 100%;

  :hover {
    transform: scale(1.01);
  }

  img {
    object-fit: cover;
    display: block;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`

const ProjectTile = ({ project, className }) => {
  return (
    <div className={className}>
      <Link to={`/projekty${project.slug}`}>
        <Card className="card">
          <div className="card-image">
            <img src={project.images[0].fluid.src} alt={project.title} />
          </div>
          <div className="card-content">
            <div className="content">
              <h1 className="is-size-4 has-text-grey-lighter">
                {project.title}
              </h1>
              <Paragraph className="has-text-grey-light">
                {project.short}
              </Paragraph>
            </div>
          </div>
        </Card>
      </Link>
    </div>
  )
}

export default ProjectTile
