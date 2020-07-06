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
    color: ${({ theme }) => theme.colors.darkerWhite};
    font-size: 20px;
  }
`

const PageWrapper = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-rows: auto 1fr auto;
`

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <SEO />
      <PageWrapper>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </PageWrapper>
    </ThemeProvider>
  )
}

export default Layout
