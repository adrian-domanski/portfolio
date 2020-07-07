import React from "react"
import Layout from "../components/Layout/Layout"
import { StyledSection, SectionTitle, Button } from "../utils/styled/components"
import styled from "styled-components"
import { Link } from "gatsby"

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80%;
`

const StyledButton = styled(Button)`
  margin: 0 auto;
  margin-top: 5rem;
`

const NotFoundPage = () => (
  <Layout darkFooter>
    <PageWrapper>
      <StyledSection>
        <SectionTitle>Niestety, ta strona nie istnieje</SectionTitle>
        <Link to="/">
          <StyledButton>Strona Główna</StyledButton>
        </Link>
      </StyledSection>
    </PageWrapper>
  </Layout>
)

export default NotFoundPage
