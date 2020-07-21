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
  height: 600px;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
  box-shadow: 2px 0 20px 2px rgba(0, 0, 0, 0.2);

  :before {
    background-image: url(${headerIMG});
    background-repeat: no-repeat;
    background-position: center top;
    background-size: cover;
    content: "";
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    will-change: transform;
    z-index: -1;
  }

  .header-content {
    letter-spacing: 1px;
    z-index: 2;
    position: relative;
    color: #fff;
    text-shadow: 1px 2px 3px rgba(0, 0, 0, 0.6);
    text-align: center;
    font-size: 1.5rem;
    line-height: 1.75;
    pointer-events: none;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media screen and (min-width: 600px) {
      font-size: 2rem;
    }

    ${({ theme }) => theme.media.desktop} {
      font-size: 2.1rem;
    }
  }
  .background-filter {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    box-shadow: inset 0 0 100px 5px rgba(0, 0, 0, 0.5);

    :before,
    :after {
      content: "";
      display: block;
      position: absolute;
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

const Home = () => {
  const query = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "computer-on-desk.jpg" }) {
        childImageSharp {
          fluid {
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
          <h2>
            Witaj, jestem{" "}
            <span className="has-text-primary has-text-weight-bold">
              Adrian
            </span>
          </h2>
          <h1>Zajmuję się tworzeniem stron internetowych</h1>
          <h2>
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
        <StyledSection className="pb-0">
          <SectionTitle className="mt-5">Co oferuję?</SectionTitle>

          <Paragraph className="has-text-centered">
            Zaprojektuję oraz stworzę dla Ciebie stronę internetową. Zadbam o
            wszelkie sprawy techniczne, takie jak zamieszczenie witryny w sieci
            oraz nadanie jej odpowiedniej nazwy. Oferuję kompleksowy zakres
            usług, abyś nie musiał się niczym przejmować.
          </Paragraph>
        </StyledSection>
        <BiggerStyledSection>
          <div className="columns">
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
          <Button to="/technologie" className="mb-5 center">
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
          <StyledSection>
            <SectionTitle>Kilka słów o mnie</SectionTitle>
            <StyledGatsbyImg
              fluid={query.placeholderImage.childImageSharp.fluid}
              alt="Tworzenie storny internetowej, laptop, notatnik i kubek"
            />
            <Paragraph className="has-text-centered mt-6">
              Nazywam się{" "}
              <span className="has-text-primary">Adrian Domański</span> i
              mieszkam w Mosinie - niewielkim miasteczku pod Poznaniem.
              Interesują mnie nowe technologie i rozwiązania w świecie web
              developmentu i branży IT. Tworzeniem stron internetowych zajmuję
              się od 2 lat. Jako osoba wytrwała i sumienna w dążeniu do
              wyznaczonych celów rozwijam swoją{" "}
              <span className="has-text-primary">pasję</span> codzienną,
              systematyczną pracą.
            </Paragraph>
          </StyledSection>
        </DarkerSection>
        <StyledSection>
          <SectionTitle>Kontakt</SectionTitle>
          <Paragraph className="has-text-centered mb-6">
            Masz pomysł na nowy projekt? Interesuje Cię współpraca? Informacje
            kontaktowe znajdziesz
            <Link
              to="/kontakt"
              className="has-text-primary has-text-weight-bold has-text-underline"
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
