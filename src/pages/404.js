import React from "react"
import Layout from "../components/Layout/Layout"
import { StyledSection, SectionTitle, Button } from "../utils/styled/components"
import styled from "styled-components"
import { Link } from "gatsby"
import SEO from "../components/seo"

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80%;
  text-align: center;
`

const StyledButton = styled(Button)`
  margin: 0 auto;
  margin-top: 5rem;
`

const WarningIcon = styled.i`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 5rem;
`

const NotFoundPage = () => (
  <Layout darkFooter>
    <SEO title="Strony internetowe - Adrian Domański - 404" />
    <PageWrapper>
      <StyledSection>
        <SectionTitle>Niestety, ta strona nie istnieje</SectionTitle>
        <WarningIcon className="fas fa-exclamation-triangle"></WarningIcon>
        <Link to="/">
          <StyledButton>Strona Główna</StyledButton>
        </Link>
      </StyledSection>
    </PageWrapper>
  </Layout>
)

export default NotFoundPage
