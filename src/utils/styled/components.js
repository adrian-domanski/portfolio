import styled from "styled-components"
import Img from "gatsby-image"

export const Button = styled.button.attrs({ className: "button" })`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.darkerGrey};
  padding-left: 2rem;
  padding-right: 2rem;
  display: block;

  :hover {
    color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
`

export const SectionTitle = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.lightWhite};
  text-align: center;
  width: fit-content;
  position: relative;
  margin: 0 auto;
  margin-bottom: 42px;

  :before,
  :after {
    content: "";
    display: block;
    position: absolute;
    background: ${({ theme }) => theme.colors.primary};
    width: 70%;
    height: 3px;
    border-radius: 50px;
  }

  :before {
    bottom: -10px;
    left: -12px;
  }

  :after {
    bottom: -24px;
    right: -12px;
  }
`

export const StyledSection = styled.div.attrs({ className: "section" })`
  max-width: ${({ theme }) => theme.pageMaxWidth};
  margin: 0 auto;
`

export const BiggerStyledSection = styled.div.attrs({ className: "section" })`
  max-width: ${({ theme }) => theme.pageWideSectionMaxWidth};
  margin: 0 auto;
`

export const DarkerSection = styled.div`
  background-color: ${({ theme }) => theme.colors.darkerGrey};
  clip-path: ${props =>
    props.right
      ? "polygon(0 5%, 100% 0, 100% 95%, 0 100%)"
      : "polygon(0 0, 100% 5%, 100% 100%, 0 95%)"};
  padding: 5rem 0;
`

export const StyledGatsbyImg = styled(Img)`
  box-shadow: ${({ theme }) => theme.boxShadow};
`

export const Paragraph = styled.p`
  font-size: 1.4rem;
  line-height: 1.75;
`
