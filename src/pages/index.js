import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
import styled from "styled-components"
import {
  Button,
  SectionTitle,
  StyledSection,
  StyledGatsbyImg,
  Paragraph,
  DarkerSection,
  BiggerStyledSection,
} from "../utils/styled/components"
import headerIMG from "../images/header-parallax.jpg"
import ContactForm from "../components/ContactForm"
import { Link } from "gatsby"

const Header = styled.header`
  background-image: url(${headerIMG});
  background-size: cover;
  height: 600px;
  background-position: center;
  background-attachment: fixed;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &:before,
  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 30%;
    height: 40%;
    background-color: ${({ theme }) => theme.colors.primary};
  }

  :before {
    left: 0;
    top: 0;
    clip-path: polygon(0 0, 0 50%, 100% 0);
  }

  :after {
    bottom: 0;
    right: 0;
    clip-path: polygon(100% 100%, 0 100%, 100% 52%);
  }

  .header-content {
    letter-spacing: 1px;
    text-shadow: 1px 2px 3px black;
    z-index: 2;
    position: relative;
    color: #fff;
    text-align: center;
    font-size: 2rem;
    line-height: 1.75;
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
`

const StyledList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
`

const StyledListItem = styled.li`
  :before {
    content: "\f105";
    font-family: "Font Awesome 5 Free";
    display: inline-block;
    padding-right: 6px;
    font-weight: 900;
    color: ${({ theme }) => theme.colors.primary};
  }
  font-size: 1.5rem;
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
    display: grid;
    grid-template-columns: 1fr 1fr;

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
  }

  .my-project__info-title {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.lightWhite};
  }
`

const Home = () => {
  const data = useStaticQuery(graphql`
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
    <Layout>
      <Header>
        <div className="background-filter"></div>
        <div className="header-content">
          <p>
            Witaj, jestem{" "}
            <span className="has-text-primary has-text-weight-bold">
              Adrian
            </span>
          </p>
          <p>Zajmuję się tworzeniem stron internetowych</p>
          <p>Front End | Back End | Design</p>
          <StyledButton className="button mt-5">Kontakt</StyledButton>
        </div>
      </Header>
      <StyledSection>
        <SectionTitle className="mb-6">Kilka słów o mnie</SectionTitle>
        <StyledGatsbyImg fluid={data.placeholderImage.childImageSharp.fluid} />
        <Paragraph className="has-text-centered mt-6">
          Nazywam się Adrian Domański i mieszkam w Mosinie - niewielkim
          miasteczku pod Poznaniem. Tworzeniem stron internetowych zajmuję się
          od 2 lat. Jako osoba wytrwała i sumienna w dążeniu do wyznaczonych
          celów rozwijam swoją pasję codzienną, systematyczną pracą.
        </Paragraph>
        <Paragraph className="has-text-centered mt-6">
          Interesują mnie nowe technologie i rozwiązania w świecie web
          developmentu i branży IT. Zajmuję się przede wszystkim warstwą
          wizualną stron. Bez większych trudności potrafię stworzyć portfolio,
          stronę firmową przedstawiającą daną działalność, czy jakąkolwiek inną
          witrynę na wybrany temat.
        </Paragraph>
      </StyledSection>

      <DarkerSection right>
        <StyledSection>
          <SectionTitle className="mb-6">Jakie strony tworzę?</SectionTitle>

          <StyledList>
            <StyledListItem>Wizytówka</StyledListItem>
            <StyledListItem>Strona firmowa</StyledListItem>
            <StyledListItem>Reklama usług</StyledListItem>

            <StyledListItem>Portfolio</StyledListItem>
            <StyledListItem>Strona personalna</StyledListItem>
            <StyledListItem>Strona w oparciu o CMS</StyledListItem>
          </StyledList>

          <Paragraph className="has-text-centered mt-6">
            Potrafię przygotować projekt graficzny, który po omówieniu z
            klientem wdrażam za pomocą odpowiednich rozwiązań. Dbam o
            pozycjonowanie strony, kierując się zbiorem obowiązujących zasad i
            standardów.
          </Paragraph>
        </StyledSection>
        <BiggerStyledSection>
          <div className="columns">
            <div className="column is-4">
              <StyledCard className="card">
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

            <div className="column is-4">
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
            </div>

            <div className="column is-4">
              <StyledCard className="card">
                <div className="card-content">
                  <div className="card-icon">
                    <i className="fas fa-mobile-alt"></i>
                  </div>
                  <div className="card-title">RWD</div>
                  <div className="card-text">
                    W moich projektach kieruję się zasadą "mobile first" i dbam
                    o to, aby wszystko wyświetlało się poprawnie na każdym
                    urządzeniu.
                  </div>
                </div>
              </StyledCard>
            </div>
          </div>
          <StyledButton className="button">Zobacz więcej</StyledButton>
        </BiggerStyledSection>
      </DarkerSection>
      <StyledSection>
        <SectionTitle className="mb-6">Moje projekty</SectionTitle>

        <MyProjectsGrid>
          <div className="my-project">
            <div className="my-project__img">
              <StyledGatsbyImg
                fluid={data.placeholderImage.childImageSharp.fluid}
              />
            </div>
            <div className="my-project__info">
              <h1 className="my-project__info-title">Plan Szkolny</h1>
              <p className="my-project__info-short my-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
                quaerat velit amet tempore nostrum aliquid, repellendus eum
                dolorem non quae?
              </p>
              <p className="has-text-primary">Szczegóły projektu...</p>
            </div>
          </div>

          <div className="my-project">
            <div className="my-project__img">
              <StyledGatsbyImg
                fluid={data.placeholderImage.childImageSharp.fluid}
              />
            </div>
            <div className="my-project__info">
              <h1 className="my-project__info-title">Plan Szkolny</h1>
              <p className="my-project__info-short my-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
                quaerat velit amet tempore nostrum aliquid, repellendus eum
                dolorem non quae?
              </p>
              <p className="has-text-primary">Szczegóły projektu...</p>
            </div>
          </div>

          <div className="my-project">
            <div className="my-project__img">
              <StyledGatsbyImg
                fluid={data.placeholderImage.childImageSharp.fluid}
              />
            </div>
            <div className="my-project__info">
              <h1 className="my-project__info-title">Plan Szkolny</h1>
              <p className="my-project__info-short my-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
                quaerat velit amet tempore nostrum aliquid, repellendus eum
                dolorem non quae?
              </p>
              <p className="has-text-primary">Szczegóły projektu...</p>
            </div>
          </div>
        </MyProjectsGrid>
        <StyledButton className="mt-6">Zobacz więcej</StyledButton>
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
