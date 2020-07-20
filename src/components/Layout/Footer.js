import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem 0;
  font-size: 1rem;
  background-color: ${props =>
    props.darkFooter ? props.theme.colors.darkerGrey : "transparent"};
  text-align: center;
`

const StyledLink = styled.a.attrs({ className: "has-text-grey-light" })`
  transition: color 0.2s ease-in-out;
  :hover {
    color: ${({ theme }) => theme.colors.primary} !important;
  }
`

const Footer = ({ darkFooter }) => {
  return (
    <StyledFooter darkFooter={darkFooter} className="has-text-grey-light">
      <p>
        &copy; {new Date().getFullYear()}{" "}
        <span className="has-text-primary">Adrian Domański</span> - Wszelkie
        prawa zastrzeżone
      </p>
      <p>
        <StyledLink
          href="https://github.com/adrian-domanski"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </StyledLink>
        <span className="has-text-primary mx-2">|</span>
        <StyledLink
          href="https://www.facebook.com/Tworzenie-stron-internetowych-Adrian-Doma%C5%84ski-112167500574067/"
          target="_blank"
          rel="noreferrer"
        >
          Facebook
        </StyledLink>
      </p>
    </StyledFooter>
  )
}

export default Footer
