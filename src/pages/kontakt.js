import React from "react"
import Layout from "../components/Layout/Layout"
import {
  StyledSection,
  SectionTitle,
  Paragraph,
  DarkerSection,
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

    ::placeholder {
      color: ${({ theme }) => theme.colors.darkerWhite};
    }
  }
`

const Contact = () => {
  return (
    <Layout>
      <SEO title="Strony internetowe - Adrian Domański - Kontakt" />
      <StyledContactPage>
        <StyledSection className="mb-6">
          <SectionTitle>Kontakt</SectionTitle>
          <Paragraph className="has-text-centered">
            Masz pomysł na nowy{" "}
            <span className="has-text-primary">projekt</span>? Interesuje Cię{" "}
            <span className="has-text-primary">współpraca</span>? Jestem otwarty
            na wszelkie propozycje. Skontaktuj się ze mną za pomocą wiadomości
            na poniższy adres e-mail, napisz na facebooku lub skorzystaj z
            formularza kontaktowego.
          </Paragraph>
          <div className="field mt-5">
            <label className="label" htmlFor="my-email">
              E-mail
            </label>
            <div className="control has-icons-left">
              <input
                id="my-email"
                className="input"
                type="text"
                placeholder="Tytuł wiadomości"
                value="adrian.domanski.dev@gmail.com"
                readOnly
              />
              <span className="icon is-small is-left">
                <i className="fas fa-at"></i>
              </span>
            </div>
          </div>
          <div className="field mt-4">
            <label className="label link" htmlFor="my-facebook">
              Napisz do mnie na Facebooku
            </label>
            <div className="control has-icons-left link">
              <a
                href="https://www.facebook.com/Tworzenie-stron-internetowych-Adrian-Doma%C5%84ski-112167500574067/"
                target="_blank"
                rel="noreferrer"
              >
                <input
                  id="my-facebook"
                  className="input"
                  type="text"
                  placeholder="Tytuł wiadomości"
                  value="facebook.com"
                  readOnly
                />
              </a>
              <span className="icon is-small is-left">
                <i className="fab fa-facebook"></i>
              </span>
            </div>
          </div>
          <div className="field mt-4">
            <label className="label link" htmlFor="my-github">
              GitHub
            </label>
            <div className="control has-icons-left link">
              <a
                href="https://github.com/adrian-domanski"
                target="_blank"
                rel="noreferrer"
              >
                <input
                  id="my-github"
                  className="input"
                  type="text"
                  placeholder="Tytuł wiadomości"
                  value="github.com/adrian-domanski"
                  readOnly
                />
              </a>
              <span className="icon is-small is-left">
                <i className="fab fa-github"></i>
              </span>
            </div>
          </div>
        </StyledSection>
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
