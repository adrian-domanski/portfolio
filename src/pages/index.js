import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import styled from "styled-components"
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
  SectionSubtitle,
} from "../utils/styled/components"
import headerIMG from "../images/header-parallax.jpg"
import ContactForm from "../components/ContactForm"
import { Link } from "gatsby"
import SEO from "../components/seo"

const Header = styled.header`
  background-image: url(${headerIMG});
  height: 600px;
  width: 100vw;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-shadow: 2px 0 20px 2px rgba(0, 0, 0, 0.2);

  ${({ theme }) => theme.media.desktop} {
    background-attachment: fixed;
  }

  &:before,
  &:after {
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

  .header-content {
    letter-spacing: 1px;
    text-shadow: 1px 2px 3px black;
    z-index: 2;
    position: relative;
    color: #fff;
    text-align: center;
    font-size: 1.5rem;
    line-height: 1.75;
    pointer-events: none;

    @media screen and (min-width: 600px) {
      font-size: 2rem;
    }
  }

  .background-filter {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    box-shadow: inset 0 0 100px 5px rgba(0, 0, 0, 0.5);
  }
`

const StyledButton = styled(Button)`
  font-size: 1.3rem;
  letter-spacing: 1px;
  margin: 0 auto;

  &.pointer-active {
    pointer-events: all;
  }
`

const StyledCard = styled.div`
  background-color: ${({ theme }) => theme.colors.darkGrey};
  color: ${({ theme }) => theme.colors.darkerWhite};
  height: 100%;
  padding: 1rem 0;
  text-align: center;
  text-shadow: ${({ theme }) => theme.textShadow};

  .card-icon {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 4rem;
  }

  .card-title {
    font-weight: bold;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.lightWhite};
  }

  .card-text {
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.darkerWhite};
  }
`

const MyProjectsGrid = styled.div`
  .my-project {
    @media screen and (min-width: 768px) {
      display: grid;

      grid-template-columns: 1fr 1fr;
    }

    .show-more {
      :hover p {
        transition: color 0.2s ease-in-out;
        color: #c38c28 !important;
      }
    }

    :not(:last-child) {
      margin-bottom: 2rem;
    }

    :nth-child(even) {
      .my-project__img {
        grid-column: 2 / 3;
        grid-row: 1;
      }

      .my-project__info {
        grid-column: 1 / 2;
        grid-row: 1;
      }
    }
  }

  .my-project__info {
    padding: 2rem;
    background-color: ${({ theme }) => theme.colors.darkerGrey};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .my-project__info-title {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.lightWhite};
  }

  .my-project__img {
    overflow: hidden;
  }
`

const StyledImg = styled.img`
  display: block;
  object-fit: cover;
  width: 100%;
  height: 100%;
  transition: transform 0.2s ease-in-out;

  :hover {
    transform: scale(1.05);
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
      allContentfulProjects(
        filter: {
          id: {
            in: [
              "07bd2745-a5e2-53fa-9abc-8bd596d220ae"
              "36b931a8-f86c-5a77-bed0-cd175e11b3ae"
              "877b4f89-5a6d-5ca8-8ead-30c825ddea89"
            ]
          }
        }
      ) {
        edges {
          node {
            id
            title
            slug
            short
            images {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Strony internetowe - Adrian Domański" />
      <Header>
        <div className="background-filter">
          <Particles
            className="home-page-header__particles is-hidden-mobile"
            params={particlesConfig.header}
          />
        </div>
        <div className="header-content">
          <p
            data-sal="slide-up"
            data-sal-easing="ease"
            data-sal-duration="1000"
          >
            Witaj, jestem{" "}
            <span className="has-text-primary has-text-weight-bold">
              Adrian
            </span>
          </p>
          <p
            data-sal="slide-up"
            data-sal-easing="ease"
            data-sal-duration="1000"
            data-sal-delay="500"
          >
            Zajmuję się tworzeniem stron internetowych
          </p>
          <p
            data-sal="slide-up"
            data-sal-easing="ease"
            data-sal-delay="750"
            data-sal-duration="1000"
          >
            Front End <span className="has-text-primary">|</span> Back End{" "}
            <span className="has-text-primary">|</span>
            Design
          </p>
          <div
            data-sal="slide-up"
            data-sal-easing="ease"
            data-sal-duration="1000"
            data-sal-delay="1000"
          >
            <Link to="/kontakt">
              <StyledButton className="button mt-5 pointer-active">
                Kontakt
              </StyledButton>
            </Link>
          </div>
        </div>
      </Header>
      <StyledSection>
        <SectionTitle>Kilka słów o mnie</SectionTitle>
        <StyledGatsbyImg
          fluid={query.placeholderImage.childImageSharp.fluid}
          alt="Tworzenie storny internetowej, laptop, notatnik i kubek"
        />
        <Paragraph className="has-text-centered mt-6">
          Nazywam się <span className="has-text-primary">Adrian Domański</span>{" "}
          i mieszkam w Mosinie - niewielkim miasteczku pod Poznaniem. Tworzeniem
          stron internetowych zajmuję się od 2 lat. Jako osoba wytrwała i
          sumienna w dążeniu do wyznaczonych celów rozwijam swoją{" "}
          <span className="has-text-primary">pasję</span> codzienną,
          systematyczną pracą.
        </Paragraph>
        <Paragraph className="has-text-centered mt-5">
          Interesują mnie nowe technologie i rozwiązania w świecie web
          developmentu i branży IT. Bez większych trudności{" "}
          <span className="has-text-primary">potrafię stworzyć</span> portfolio,
          stronę firmową przedstawiającą daną działalność, czy jakąkolwiek inną
          witrynę na wybrany temat. Z wielką chęcią pomogę Ci w realizacji
          twojego wymarzonego projektu i zadbam o wszelkie sprawy techniczne.
        </Paragraph>
      </StyledSection>

      <DarkerSection right>
        <StyledSection>
          <SectionTitle>Jakie strony tworzę?</SectionTitle>

          <StyledList
            className="mb-6"
            data-sal="slide-up"
            data-sal-easing="ease"
            data-sal-duration="1000"
          >
            <StyledListItem>Wizytówka</StyledListItem>
            <StyledListItem>Strona firmowa</StyledListItem>
            <StyledListItem>Reklama usług</StyledListItem>

            <StyledListItem>Portfolio</StyledListItem>
            <StyledListItem>Strona personalna</StyledListItem>
            <StyledListItem>Strona w oparciu o CMS</StyledListItem>
          </StyledList>

          <Paragraph className="has-text-centered">
            Potrafię przygotować{" "}
            <span className="has-text-primary">projekt graficzny</span>, który
            po omówieniu z klientem wdrażam za pomocą odpowiednich rozwiązań.
            Dbam o pozycjonowanie strony, kierując się zbiorem obowiązujących
            zasad i standardów.
          </Paragraph>
          <br />
          <Paragraph className="has-text-centered">
            Moje strony są niezwykle{" "}
            <span className="has-text-primary">szybkie</span> i{" "}
            <span className="has-text-primary">wydajne</span> - zobacz sam, jak
            błyskawicznie możesz przemieszczać się między podstronami używając
            górnej nawigacji.
          </Paragraph>
        </StyledSection>
        <BiggerStyledSection>
          <div className="columns">
            <div className="column is-4-desktop">
              <StyledCard
                className="card"
                data-sal="slide-right"
                data-sal-easing="ease"
                data-sal-duration="1000"
              >
                <div className="card-content">
                  <div className="card-icon">
                    <i className="fas fa-pencil-ruler"></i>
                  </div>
                  <div className="card-title">Projektowanie</div>
                  <div className="card-text">
                    W głębi duszy jestem bardziej programistą niż grafikiem, ale
                    potrafię stworzyć projekt strony w oparciu o takie narzędzia
                    jak Adobe XD czy Photoshop
                  </div>
                </div>
              </StyledCard>
            </div>

            <div className="column is-4-desktop">
              <StyledCard
                className="card"
                data-sal="fade"
                data-sal-easing="ease"
                data-sal-duration="1000"
              >
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
            </div>

            <div className="column is-4-desktop">
              <StyledCard
                className="card"
                data-sal="slide-left"
                data-sal-easing="ease"
                data-sal-duration="1000"
              >
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
            </div>
          </div>
          <div
            data-sal="slide-up"
            data-sal-easing="ease"
            data-sal-duration="1000"
          >
            <Link to="/technologie">
              <StyledButton
                className="button"
                data-sal="slide-left"
                data-sal-easing="ease"
                data-sal-duration="1000"
              >
                Zobacz więcej
              </StyledButton>
            </Link>
          </div>
        </BiggerStyledSection>
      </DarkerSection>
      <StyledSection>
        <SectionTitle>Moje projekty</SectionTitle>

        <MyProjectsGrid>
          {query.allContentfulProjects.edges.map(({ node }, index) => (
            <div
              key={node.id}
              className="my-project"
              data-sal={`slide-${index % 2 === 0 ? "right" : "left"}`}
              data-sal-easing="ease"
              data-sal-duration="1000"
            >
              <div className="my-project__img">
                <Link to={`/projekty${node.slug}`} className="my-project__link">
                  <StyledImg
                    src={node.images[0].fluid.src}
                    alt={`Podgląd strony ${node.title}`}
                  />
                </Link>
              </div>
              <div className="my-project__info">
                <div className="project-info">
                  <SectionSubtitle className="my-project__info-title">
                    {node.title}
                  </SectionSubtitle>
                  <p className="my-project__info-short my-3">{node.short}</p>
                </div>
                <Link
                  to={`/projekty${node.slug}`}
                  className="my-project__link show-more"
                >
                  <p className="has-text-primary">Szczegóły projektu...</p>
                </Link>
              </div>
            </div>
          ))}
        </MyProjectsGrid>
        <div
          data-sal="slide-up"
          data-sal-easing="ease"
          data-sal-duration="1000"
        >
          <Link to="/projekty">
            <StyledButton className="mt-6">Zobacz więcej</StyledButton>
          </Link>
        </div>
      </StyledSection>

      <DarkerSection>
        <StyledSection>
          <SectionTitle>Kontakt</SectionTitle>
          <Paragraph className="has-text-centered mb-6">
            Masz pomysł na nowy projekt? Interesuje Cię współpraca? Informacje
            kontaktowe znajdziesz{" "}
            <Link
              to="/kontakt"
              className="has-text-primary has-text-weight-bold"
            >
              klikając tutaj
            </Link>
            . Możesz również napisać do mnie za pomocą poniższego formularza.
          </Paragraph>
          <ContactForm />
        </StyledSection>
      </DarkerSection>
    </Layout>
  )
}

export default Home
