import React from "react"
import styled from "styled-components"
import { Button } from "../utils/styled/components"

const StyledForm = styled.form`
  &&& {
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

const ContactForm = () => {
  return (
    <StyledForm action="submit">
      <div className="field">
        <label className="label">Tytuł wiadomości</label>
        <div className="control has-icons-left">
          <input
            className="input"
            type="text"
            placeholder="Tytuł wiadomości"
            value=""
          />
          <span className="icon is-small is-left">
            <i className="fas fa-heading"></i>
          </span>
        </div>
      </div>

      <div className="field">
        <label className="label">Email</label>
        <div className="control has-icons-left">
          <input
            className="input"
            type="email"
            placeholder="Twój adres email"
            value=""
          />
          <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
          </span>
        </div>
      </div>

      <div className="field">
        <label className="label">Treść</label>
        <div className="control">
          <textarea
            className="textarea"
            placeholder="W czym mogę pomóc?"
          ></textarea>
        </div>
      </div>

      <Button center className="button">
        Wyślij
      </Button>
    </StyledForm>
  )
}

export default ContactForm
