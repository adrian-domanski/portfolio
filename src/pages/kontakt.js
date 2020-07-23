import React, { useRef, useState } from "react"
import Layout from "../components/Layout/Layout"
import {
  StyledSection,
  SectionTitle,
  Paragraph,
  DarkerSection,
  StyledColumn,
  StyledCard,
  StyledExternalLink,
  BiggerStyledSection,
  FadeIn,
} from "../utils/styled/components"
import styled from "styled-components"
import ContactForm from "../components/ContactForm"
import SEO from "../components/seo"

const StyledContactPage = styled.div`
  &&& {
    a input {
      cursor: pointer;
    }
  }

  .control.has-icons-left .input:focus ~ .icon {
    color: ${({ theme }) => theme.colors.darkerWhite};
  }
  .control.has-icons-left.link:hover {
    .input,
    .icon {
      color: ${({ theme }) => theme.colors.primary} !important;
    }
  }

  label {
    color: ${({ theme }) => theme.colors.darkerWhite};

    &.link {
      cursor: pointer;
    }
  }

  .input,
  .icon {
    transition: color 0.2s ease-out;
  }

  input,
  textarea {
    background-color: rgba(217, 217, 217, 0.17);
    border: none;
    color: ${({ theme }) => theme.colors.lightWhite};

    :active,
    :focus {
      outline: none;
      border: none;
      box-shadow: none;
    }

    :placeholder {
      color: ${({ theme }) => theme.colors.darkerWhite};
    }
  }
`

const Contact = () => {
  const emailRef = useRef(null)
  const [alert, setAlert] = useState("")

  const handleCopy = e => {
    e.preventDefault()
    navigator.clipboard.writeText("adrian.domanski.dev@gmail.com")
    setAlert("Skopiowano!")

    setTimeout(() => {
      setAlert("")
    }, 3000)
  }

  return (
    <Layout>
      <SEO title="Strony internetowe - Adrian Domański - Kontakt" />
      <StyledContactPage>
        <StyledSection>
          <SectionTitle>Kontakt</SectionTitle>
          <Paragraph className="has-text-centered">
            Masz pomysł na nowy{" "}
            <span className="has-text-primary">projekt</span>? Interesuje Cię{" "}
            <span className="has-text-primary">współpraca</span>? Jestem otwarty
            na wszelkie propozycje. Skontaktuj się ze mną za pomocą wiadomości
            na poniższy adres e-mail, napisz na facebooku lub skorzystaj z
            formularza kontaktowego.
          </Paragraph>
        </StyledSection>
        <BiggerStyledSection className="mb-6">
          <div className="columns">
            <StyledColumn className="column is-4-desktop">
              <StyledCard className="card">
                <div className="card-content">
                  <div className="card-icon">
                    <i className="fas fa-at"></i>
                  </div>
                  <div className="card-title">Email</div>
                  <div className="card-text">
                    <StyledExternalLink
                      href="#"
                      onClick={handleCopy}
                      ref={emailRef}
                    >
                      adrian.domanski.dev@gmail.com
                    </StyledExternalLink>
                    {alert && (
                      <span className="has-text-weight-bold is-fullwidth is-block mt-3">
                        {alert}
                      </span>
                    )}
                  </div>
                </div>
              </StyledCard>
            </StyledColumn>
            <FadeIn className="column is-4-desktop">
              <StyledCard className="card">
                <div className="card-content">
                  <div className="card-icon">
                    <i className="fab fa-facebook"></i>
                  </div>
                  <div className="card-title">Facebook</div>

                  <div className="card-text">
                    <StyledExternalLink
                      href="https://www.facebook.com/Tworzenie-stron-internetowych-Adrian-Doma%C5%84ski-112167500574067/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      facebook.com
                    </StyledExternalLink>
                  </div>
                </div>
              </StyledCard>
            </FadeIn>
            <StyledColumn className="column is-4-desktop">
              <StyledCard className="card">
                <div className="card-content">
                  <div className="card-icon">
                    <i className="fab fa-github"></i>
                  </div>
                  <div className="card-title">GitHub</div>
                  <div className="card-text">
                    <StyledExternalLink
                      href="https://github.com/adrian-domanski"
                      target="_blank"
                      rel="noreferrer"
                    >
                      github.com/adrian-domanski
                    </StyledExternalLink>
                  </div>
                </div>
              </StyledCard>
            </StyledColumn>
          </div>
        </BiggerStyledSection>
        <DarkerSection right>
          <StyledSection>
            <SectionTitle>Formularz kontaktowy</SectionTitle>
            <ContactForm />
          </StyledSection>
        </DarkerSection>
      </StyledContactPage>
    </Layout>
  )
}

export default Contact
