import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { SectionSubtitle } from "../../utils/styled/components"

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

const ProjectShow = ({ project }) => {
  return (
    <div key={project.id} className="my-project">
      <div className="my-project__img">
        <Link to={`/projekty${project.slug}`} className="my-project__link">
          <StyledImg
            src={project.images[0].fluid.src}
            alt={`Podgląd strony ${project.title}`}
          />
        </Link>
      </div>
      <div className="my-project__info">
        <div className="project-info">
          <SectionSubtitle className="my-project__info-title">
            {project.title}
          </SectionSubtitle>
          <p className="my-project__info-short my-3">{project.short}</p>
        </div>
        <Link
          to={`/projekty${project.slug}`}
          className="my-project__link show-more"
        >
          <p className="has-text-primary">Szczegóły projektu...</p>
        </Link>
      </div>
    </div>
  )
}

export default ProjectShow