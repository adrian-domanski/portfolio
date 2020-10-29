import React from "react"
import SEO from "../seo"
import Navbar from "./Navbar"
import Footer from "./Footer"
import "../../utils/styles/main.scss"
import { theme } from "../../utils/styled/theme"
import { ThemeProvider } from "styled-components"
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.darkGrey};
    color: #e4e4e4;
    font-size: 20px;
  }
`

const PageWrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  width: 100%;
  min-height: 100vh;
`

const StyledMain = styled.main`
  overflow-x: hidden;
`

const Layout = ({ children, darkFooter }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <SEO />
      <PageWrapper>
        <Navbar />
        <StyledMain>{children}</StyledMain>
        <Footer darkFooter={darkFooter} />
      </PageWrapper>
    </ThemeProvider>
  )
}

export default Layout
