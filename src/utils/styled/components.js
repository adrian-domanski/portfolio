import styled from "styled-components"
import Img from "gatsby-image"
import withSensor from "../hoc/withSensor"
import { Link } from "gatsby"

export const StyledMain = styled.div`
  background-color: ${({ theme }) => theme.colors.darkGrey};
`

export const StyledExternalLink = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: underline;
  transition: color 0.1s ease-in-out;
  word-break: break-word;

  :hover {
    color: #bf7b00;
  }
`

export const StyledColumn = withSensor(styled.div`
  :nth-child(1) {
    opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
    transform: translateX(${({ isVisible }) => (isVisible ? "0" : "-30px")});
    transition: opacity 0.5s ease, transform 0.5s ease;
  }

  :nth-child(3) {
    opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
    transform: translateX(${({ isVisible }) => (isVisible ? "0" : "30px")});
    transition: opacity 0.5s ease, transform 0.5s ease;
  }
`)

export const StyledCard = styled.div`
  background-color: ${({ theme }) => theme.colors.darkerGrey};
  color: ${({ theme }) => theme.colors.darkerWhite};
  height: 100%;
  padding: 1rem 0;
  text-align: center;
  text-shadow: ${({ theme }) => theme.textShadow};

  .card-icon {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 4rem;
  }

  .card-title {
    font-weight: bold;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.lightWhite};
  }

  .card-text {
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.darkerWhite};
  }
`

export const FadeIn = withSensor(styled.div`
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
  transform: translateY(${({ isVisible }) => (isVisible ? "0" : "30px")});
  transition: opacity 0.5s ease, transform 0.5s ease;
`)

export const Button = styled(Link).attrs({ className: "button" })`
  &&& {
    border: 1px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    background-color: transparent;
    padding-left: 2rem;
    padding-right: 2rem;
    z-index: 1;
    display: table;
    position: relative;
    transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;
    overflow: hidden;
    font-size: 1.3rem;
    letter-spacing: 1px;

    &.cta.pointer-active {
      pointer-events: all;

      :before,
      :after {
        display: none;
      }

      :hover {
        background: ${({ theme }) => theme.colors.primary};
        color: black;
      }

      ${({ theme }) => theme.media.desktop} {
        font-size: 1.5rem;
      }
    }

    :active {
      border: 1px solid ${({ theme }) => theme.colors.primary};
      outline: none;
      box-shadow: none;
    }

    :before,
    :after {
      content: "";
      position: absolute;
      z-index: -1;
      width: 100%;
      height: 100%;
      background: #ffa92d;
      transition: transform 0.2s ease-in-out, border-color 0.2s ease-in-out;
      opacity: 0.1;
      box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.5);
    }

    :after {
      bottom: 0;
      left: 0;
      transform-origin: bottom left;
      transform: scale(0) translateX(-50%);
      clip-path: polygon(0 0, 0 100%, 100% 100%);
    }

    :before {
      top: 0;
      right: 0;
      transform-origin: top right;
      transform: scale(0) translateX(50%);
      clip-path: polygon(0 0, 100% 0, 100% 100%);
    }

    :hover {
      border-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.primary};

      :after,
      :before {
        transform: scale(1);
      }
    }
    &.center {
      margin: 0 auto;
    }
  }
`

export const SectionTitle = withSensor(styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.lightWhite};
  text-align: center;
  display: table;
  position: relative;
  margin: 0 auto;
  font-weight: bold;
  margin-bottom: 72px;

  :before,
  :after {
    content: "";
    display: block;
    position: absolute;
    background: ${({ theme }) => theme.colors.primary};
    width: 70%;
    height: 3px;
    border-radius: 50px;
    transition: left 0.5s ease-in-out, right 0.5s ease-in-out,
      opacity 0.5s ease-in-out;
    opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
  }

  :before {
    bottom: -10px;
    left: ${({ isVisible }) => (isVisible ? "-12px" : "-100px")};
  }

  :after {
    bottom: -24px;
    right: ${({ isVisible }) => (isVisible ? "-12px" : "-100px")};
  }
`)

export const StyledSection = styled.section.attrs({ className: "section" })`
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
      ? "polygon(0 4%, 100% 0, 100% 96%, 0% 100%)"
      : "polygon(0 0, 100% 4%, 100% 100%, 0 96%)"};
  padding: 5rem 0;
`

export const StyledGatsbyImg = styled(Img)`
  box-shadow: ${({ theme }) => theme.boxShadow};
`

export const Paragraph = withSensor(styled.p`
  line-height: 1.75;
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
  transform: translateY(${({ isVisible }) => (isVisible ? "0" : "30px")});
  transition: opacity 0.5s ease, transform 0.5s ease;

  @media screen and (min-width: 600px) {
    font-size: 1.4rem;
  }
`)

export const StyledList = styled.ul`
  display: grid;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 998px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

export const StyledListItem = styled.li`
  :before {
    content: "\f105";
    font-family: "Font Awesome 5 Free";
    display: inline-block;
    padding-right: 6px;
    font-weight: 900;
    color: ${({ theme }) => theme.colors.primary};
  }
  font-size: 1.5rem;
`
export const SectionSubtitle = withSensor(styled.h1`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.lightWhite};
  margin-bottom: 26px;
  position: relative;
  padding-left: 12px;

  :before {
    content: "";
    position: absolute;
    width: 5px;
    height: 100%;
    display: block;
    left: 0;
    top: 0;
    background: ${({ theme }) => theme.colors.primary};
    transform: scaleY(${({ isVisible }) => (isVisible ? "1" : "0")});
    transition: transform 0.5s ease-in-out;
    transition-delay: 0.5s;
    transform-origin: bottom;
  }
`)

export const Blockquote = styled.blockquote`
  && {
    &.is-primary {
      background-color: ${({ theme, light }) =>
        light ? theme.colors.darkGrey : theme.colors.darkerGrey};
      border-color: ${({ theme }) => theme.colors.primary};
    }
    &.is-danger {
      background-color: ${({ theme }) => theme.colors.darkerGrey};
      border-color: hsl(348, 100%, 61%);
    }

    @media screen and (max-width: 600px) {
      font-size: 1rem;
    }
  }
`
