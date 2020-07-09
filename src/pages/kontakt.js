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

const StyledContactPage = styled.div`
  &&& {
    a input {
        cursor: pointer;
      }
    }

    .control.has-icons-left .input:focus ~ .icon,
    .control.has-icons-left .select:focus ~ .icon,
    .control.has-icons-right .input:focus ~ .icon,
    .control.has-icons-right .select:focus ~ .icon {
      color: ${({ theme }) => theme.colors.darkerWhite};
    }

    label {
      color: ${({ theme }) => theme.colors.darkerWhite};
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
  }
`

const Contact = () => {
  return (
    <Layout>
      <StyledContactPage>
        <StyledSection className="mb-6">
          <SectionTitle>Kontakt</SectionTitle>
          <Paragraph>
            Masz pomysł na nowy projekt? Interesuje Cię współpraca? Jestem
            otwarty na wszelkie propozycje. Skontaktuj się ze mną za pomocą
            poniższych metod.Masz pomysł na nowy projekt? Interesuje Cię
            współpraca? Jestem otwarty na wszelkie propozycje. Skontaktuj się ze
            mną za pomocą poniższych metod.
          </Paragraph>
          <div className="field mt-5">
            <label className="label">E-mail (zalecane)</label>
            <div className="control has-icons-left">
              <input
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
            <label className="label">GitHub</label>
            <div className="control has-icons-left">
              <a href="https://github.com/adrian-domanski" target="_blank">
                <input
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
