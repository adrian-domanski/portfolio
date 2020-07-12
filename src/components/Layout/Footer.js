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

const Footer = ({ darkFooter }) => {
  return (
    <StyledFooter darkFooter={darkFooter} className="has-text-grey-light">
      <p>
        &copy; {new Date().getFullYear()}{" "}
        <span className="has-text-primary">Adrian Domański</span> - Wszelkie
        prawa zastrzeżone
      </p>
      <p>
        <a
          href="https://github.com/adrian-domanski"
          className="has-text-grey-light"
        >
          GitHub <i className="fab fa-github"></i>
        </a>
      </p>
    </StyledFooter>
  )
}

export default Footer
