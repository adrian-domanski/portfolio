import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem 0;
  font-size: 1rem;
`

const Footer = () => {
  return (
    <StyledFooter className="has-text-grey">
      <p>
        &copy; {new Date().getFullYear}{" "}
        <span className="has-text-primary">Adrian Domański</span> - Wszelkie
        prawa zastrzeżone
      </p>
      <p>
        <a href="https://github.com/adrian-domanski" className="has-text-grey">
          GitHub <i className="fab fa-github"></i>
        </a>
      </p>
    </StyledFooter>
  )
}

export default Footer
