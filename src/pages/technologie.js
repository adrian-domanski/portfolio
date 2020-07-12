import React from "react"
import Layout from "../components/Layout/Layout"
import {
  StyledSection,
  SectionTitle,
  Paragraph,
  StyledList,
  StyledListItem,
  DarkerSection,
  Blockquote,
} from "../utils/styled/components"
import styled from "styled-components"

import css from "../images/technologies/css.png"
import gatsby from "../images/technologies/gatsby.png"
import graphql from "../images/technologies/graphql.png"
import html from "../images/technologies/html.png"
import js from "../images/technologies/js.png"
import mongodb from "../images/technologies/mongodb.png"
import nextjs from "../images/technologies/nextjs.png"
import nodejs from "../images/technologies/nodejs.png"
import react from "../images/technologies/react.png"
import SEO from "../components/seo"

const TechnologiesGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
`

const TechnologyIMG = styled.img`
  display: block;
  :nth-child(even) {
    margin: 0 1rem;
  }
`

const StyledParagraph = styled(Paragraph)`
  text-align: center;
  margin-top: 2rem;
`

const PrimaryText = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`

const Technologies = () => {
  return (
    <Layout>
      <SEO title="Strony internetowe - Adrian Domański - Technologie" />
      <StyledSection>
        <SectionTitle>Technologie</SectionTitle>
        <Paragraph className="has-text-centered">
          Uwielbiam nowe rozwiązania i narzędzia, które ułatwiają nam pracę.
          Poniżej znajdziesz zbiór technologii, jakie wykorzystuje przy
          tworzeniu projektów.
        </Paragraph>
        <div className="content mt-6">
          <Blockquote className="is-danger has-text-danger">
            Uwaga, poniżej znajduje się wiele trudnych wyrazów i sformułowań -
            czytasz na własne ryzyko!
          </Blockquote>
        </div>
        <TechnologiesGroup>
          <TechnologyIMG src={html} alt="html" />
          <TechnologyIMG src={js} alt="js" />
          <TechnologyIMG src={css} alt="css" />
        </TechnologiesGroup>
        <StyledParagraph>
          Podstawowa trójka, której uczyłem się w pierwszej kolejności.
          Semantyczny <PrimaryText>HTML 5</PrimaryText>,{" "}
          <PrimaryText>JavaScript</PrimaryText> wraz z nowymi standardami oraz{" "}
          <PrimaryText>CSS 3</PrimaryText>, dzięki któremu tworzenie layoutów
          stało się dużo łatwiejsze i przyjemniejsze.
        </StyledParagraph>

        <TechnologiesGroup>
          <TechnologyIMG src={gatsby} alt="gatsby" />
          <TechnologyIMG src={react} alt="react" />
          <TechnologyIMG src={nextjs} alt="nextjs" />
        </TechnologiesGroup>
        <StyledParagraph>
          Uwielbiam rozwiązania i możliwości które daje nam biblioteka{" "}
          <PrimaryText>ReactJS</PrimaryText>. Zdaję sobie jednak sprawę, że sam
          JavaScript nie jest tak dobrze pozycjonowany jak czysty HTML dlatego w
          zależności od postawionego przede mną zadania korzystam z takich
          udogodnień jak <PrimaryText>Next.js</PrimaryText> czy{" "}
          <PrimaryText>GatsbyJS</PrimaryText>, których jestem wielkim fanem.
        </StyledParagraph>

        <TechnologiesGroup>
          <TechnologyIMG src={mongodb} alt="mongodb" />
          <TechnologyIMG src={nodejs} alt="nodejs" />
          <TechnologyIMG src={graphql} alt="graphql" />
        </TechnologiesGroup>
        <StyledParagraph>
          Na zapleczu strony wykorzystuje <PrimaryText>Node.js</PrimaryText>.
          Potrafię stworzyć zarówno typowe <PrimaryText>REST API</PrimaryText>{" "}
          jak i serwer <PrimaryText>GraphQL</PrimaryText>. Swoje projekty, które
          wymagają środowiska Node zamieszczam na serwerach{" "}
          <PrimaryText>VPS</PrimaryText> przy pomocy{" "}
          <PrimaryText>NGINX</PrimaryText> oraz <PrimaryText>PM2</PrimaryText>.
          Jako bazę danych wykorzystuję <PrimaryText>MongoDB</PrimaryText>.
        </StyledParagraph>
      </StyledSection>
      <DarkerSection>
        <StyledSection>
          <SectionTitle>Wykorzystuję również</SectionTitle>
          <StyledList>
            <StyledListItem>Styled components</StyledListItem>
            <StyledListItem>Sass</StyledListItem>
            <StyledListItem>Bulma</StyledListItem>
            <StyledListItem>Photoshop</StyledListItem>
            <StyledListItem>Adobe XD</StyledListItem>
            <StyledListItem>RWD</StyledListItem>
            <StyledListItem>Strapi</StyledListItem>
          </StyledList>
        </StyledSection>
      </DarkerSection>
    </Layout>
  )
}

export default Technologies
