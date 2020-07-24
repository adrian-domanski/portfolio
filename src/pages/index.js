import React from "react"
import Layout from "../components/Layout/Layout"
import styled, { createGlobalStyle } from "styled-components"
import Particles from "react-particles-js"
import particlesConfig from "../utils/particlesConfig.json"
import {
  Button,
  SectionTitle,
  StyledSection,
  Paragraph,
  DarkerSection,
  BiggerStyledSection,
  StyledList,
  StyledListItem,
  StyledGatsbyImg,
  StyledColumn,
  FadeIn,
  StyledCard,
  StyledMain,
} from "../utils/styled/components"
import headerIMG from "../images/header-parallax.jpg"
import ContactForm from "../components/ContactForm"
import { useStaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"
import ProjectsGrid from "../components/Projects/ProjectsGrid"
import { Link } from "gatsby"

const GlobalStyles = createGlobalStyle`
  body {
    background-color: unset;
  }
`

const Header = styled.header`
  min-height: 600px;
  height: 70vh;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
  box-shadow: 2px 0 20px 2px rgba(0, 0, 0, 0.1);

  :before {
    background-image: url(${headerIMG});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    will-change: transform;
    z-index: -1;

    ${({ theme }) => theme.media.desktop} {
      position: fixed;
    }
  }

  .header-content {
    letter-spacing: 1px;
    z-index: 2;
    position: relative;
    text-align: center;
    font-size: 1.5rem;
    line-height: 1.75;
    pointer-events: none;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 1rem;

    h1,
    h2 {
      color: #fff;
    }

    @media screen and (min-width: 600px) {
      font-size: 2rem;
    }

    ${({ theme }) => theme.media.desktop} {
      font-size: 2.1rem;
    }
  }

  .home-page-header__particles {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    left: 0;
    z-index: 0;
  }

  .background-filter {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);

    :before,
    :after {
      content: "";
      display: block;
      position: absolute;
      opacity: 0.5;
    }

    :before {
      left: 0;
      top: 0;
      width: 0;
      height: 0;
      border-top: 150px solid ${({ theme }) => theme.colors.primary};
      border-right: 250px solid transparent;
    }

    :after {
      bottom: 0;
      right: 0;
      width: 0;
      height: 0;
      border-bottom: 150px solid ${({ theme }) => theme.colors.primary};
      border-left: 250px solid transparent;
    }
  }
`

const AboutMeSection = styled(StyledSection)`
  p {
    text-align: center;
  }
`

const StyledAvatar = styled(StyledGatsbyImg)`
  max-width: 300px;
  margin: 0 auto;
  position: realtive;
  display: block;

  ${({ theme }) => theme.media.desktop} {
    overflow: visible !important;
    :after {
      transition: transform 0.2s ease-in-out, background-color 0.2s ease-in-out;
      z-index: -1;
      content: "";
      position: absolute;
      top: -15px;
      left: -15px;
      width: calc(100%);
      height: calc(100%);
      display: block;
      border: 5px solid ${({ theme }) => theme.colors.primary};
    }
  }
`

const Home = () => {
  const query = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "me.jpg" }) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout darkFooter>
      <GlobalStyles />
      <SEO title="Strony internetowe - Adrian Domański" />
      <Header>
        <div className="background-filter">
          <Particles
            className="home-page-header__particles is-hidden-mobile"
            params={particlesConfig}
          />
        </div>
        <FadeIn className="header-content">
          <h2 className="is-size-1-desktop is-size-2-tablet is-size-3-mobile">
            Witaj, jestem{" "}
            <span className="has-text-primary has-text-weight-bold">
              Adrian
            </span>
          </h2>
          <h1 className="is-size-2-desktop is-size-3-tablet is-size-4-mobile">
            Zajmuję się tworzeniem stron internetowych
          </h1>
          <h2 className="is-size-3-desktop is-size-4-tablet is-size-5-mobile">
            Front End<span className="has-text-primary mx-2">|</span>Back End
            <span className="has-text-primary mx-2">|</span>
            Design
          </h2>
          <Button className="cta pointer-active mt-5 center" to="/projekty">
            Moje prace
          </Button>
        </FadeIn>
      </Header>
      <StyledMain>
        <StyledSection className="pb-5">
          <SectionTitle className="mt-5">Co oferuję?</SectionTitle>

          <Paragraph className="has-text-centered">
            Zaprojektuję oraz stworzę dla Ciebie stronę internetową. Zadbam o
            wszelkie sprawy techniczne, takie jak zamieszczenie witryny w sieci
            oraz nadanie jej odpowiedniej nazwy. Oferuję kompleksowy zakres
            usług, abyś nie musiał się niczym przejmować.
          </Paragraph>
        </StyledSection>
        <BiggerStyledSection>
          <div className="columns mb-5">
            <StyledColumn className="column is-4-desktop">
              <StyledCard className="card">
                <div className="card-content">
                  <div className="card-icon">
                    <i className="fas fa-pencil-ruler"></i>
                  </div>
                  <div className="card-title">Projektowanie</div>
                  <div className="card-text">
                    Jasny cel działania i wizja efektu końcowego są niezwykle
                    ważne. Przed przystąpieniem do pisania strony zbieram
                    informacje i tworzę projekt graficzny.
                  </div>
                </div>
              </StyledCard>
            </StyledColumn>
            <FadeIn className="column is-4-desktop">
              <StyledCard className="card">
                <div className="card-content">
                  <div className="card-icon">
                    <i className="fas fa-laptop-code"></i>
                  </div>
                  <div className="card-title">Programowanie</div>
                  <div className="card-text">
                    Posiadam umiejętności, które pozwalają mi na wdrożenie
                    projektu od samego zakodowania po hosting i przypisanie
                    domeny.
                  </div>
                </div>
              </StyledCard>
            </FadeIn>

            <StyledColumn className="column is-4-desktop">
              <StyledCard className="card">
                <div className="card-content">
                  <div className="card-icon">
                    <i className="fas fa-cogs"></i>
                  </div>
                  <div className="card-title">Wsparcie techniczne</div>
                  <div className="card-text">
                    Zajmę się wszelkimi sprawami technicznymi i przeprowadzę
                    cały projekt od początku do końca. Służę pomocą w razie
                    wystąpienia jakichkolwiek problemów.
                  </div>
                </div>
              </StyledCard>
            </StyledColumn>
          </div>
          <Button to="/technologie" className="mb-6 center">
            Umiejętności
          </Button>
        </BiggerStyledSection>
        <DarkerSection>
          <StyledSection>
            <SectionTitle>Jakie strony tworzę?</SectionTitle>

            <Paragraph className="has-text-centered mb-6">
              Tworzę zarówno strony{" "}
              <span className="has-text-primary">statyczne</span>, w których
              zawartość nie ulega częstej aktualizacji jak i bardziej{" "}
              <span className="has-text-primary">dynamiczne</span>{" "}
              wykorzystujące system do zarządzania treściami (CMS). W zależności
              od twoich potrzeb doradzę Ci, oraz przedstawie najodpowiedniejsze
              rozwiązanie w danej sytuacji.
            </Paragraph>

            <StyledList className="mb-6">
              <StyledListItem>Wizytówka</StyledListItem>
              <StyledListItem>Strona firmowa</StyledListItem>
              <StyledListItem>Reklama usług</StyledListItem>

              <StyledListItem>Portfolio</StyledListItem>
              <StyledListItem>Strona personalna</StyledListItem>
              <StyledListItem>Strona w oparciu o CMS</StyledListItem>
            </StyledList>
          </StyledSection>
        </DarkerSection>

        <StyledSection>
          <SectionTitle>Moje projekty</SectionTitle>

          <ProjectsGrid />
          <Button to="/projekty" className="mt-6 center">
            Zobacz więcej
          </Button>
        </StyledSection>

        <DarkerSection right>
          <AboutMeSection>
            <SectionTitle>Kilka słów o mnie</SectionTitle>
            <div className="columns is-multiline mt-3">
              <div className="column is-12-tablet is-4-desktop">
                <FadeIn>
                  <StyledAvatar
                    fluid={query.placeholderImage.childImageSharp.fluid}
                    alt="Moje zdjęcie w Hiszpanii"
                  />
                </FadeIn>
              </div>
              <div className="column">
                <Paragraph className="has-text-left-desktop">
                  Nazywam się{" "}
                  <span className="has-text-primary">Adrian Domański</span> i
                  mieszkam w Mosinie - niewielkim miasteczku pod Poznaniem.
                  Interesują mnie nowe technologie i rozwiązania w świecie web
                  developmentu i branży IT. Tworzeniem stron internetowych
                  zajmuję się od 2 lat. Jako osoba wytrwała i sumienna w dążeniu
                  do wyznaczonych celów rozwijam swoją pasję codzienną,
                  systematyczną pracą.
                </Paragraph>
              </div>
            </div>
          </AboutMeSection>
        </DarkerSection>
        <StyledSection>
          <SectionTitle>Kontakt</SectionTitle>
          <Paragraph className="has-text-centered mb-6">
            Masz pomysł na nowy projekt? Interesuje Cię współpraca? Informacje
            kontaktowe znajdziesz
            <Link
              to="/kontakt"
              className="has-text-primary has-text-weight-bold"
            >
              {" "}
              klikając tutaj
            </Link>
            . Możesz również napisać do mnie za pomocą poniższego formularza.
          </Paragraph>
          <ContactForm />
        </StyledSection>
      </StyledMain>
    </Layout>
  )
}

export default Home
