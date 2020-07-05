import React from "react"
import Layout from "../components/Layout/Layout"
import styled from "styled-components"

const StyledTitle = styled.h1`
  color: red;
`

const Home = () => {
  return (
    <Layout>
      <StyledTitle>hello</StyledTitle>
    </Layout>
  )
}

export default Home
