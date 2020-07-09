import React, { useState } from "react"
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
  const [title, setTitle] = useState("")
  const [email, setEmail] = useState("")
  const [content, setContent] = useState("")
  const [alert, setAlert] = useState({ type: "", msg: "" })

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "title":
        return setTitle(value)
      case "email":
        return setEmail(value)
      case "content":
        return setContent(value)
      default:
        return
    }
  }

  const handleFormSubmit = () => {
    if (!title || !email || !content) {
      setAlert({ type: "danger", msg: "Proszę wypełnić wszystke pola" })
    } else {
      setAlert({
        type: "success",
        msg: "Twoja wiadomość została pomyślnie wysłana",
      })
    }

    setTitle("")
    setEmail("")
    setContent("")

    setTimeout(() => {
      setAlert({ type: "", msg: "" })
    }, 3000)
  }

  return (
    <StyledForm
      action="/"
      onSubmit={handleFormSubmit}
      name="contact"
      method="POST"
      data-netlify="true"
    >
      {alert.msg && (
        <div className={`notification is-${alert.type} is-light`}>
          <button
            className="delete"
            onClick={() => setAlert({ type: "", msg: "" })}
          ></button>
          {alert.msg}
        </div>
      )}

      <div className="field">
        <label className="label">Tytuł wiadomości</label>
        <div className="control has-icons-left">
          <input
            className="input"
            type="text"
            name="title"
            placeholder="Tytuł wiadomości"
            value={title}
            onChange={handleChange}
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
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Twój adres email"
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
            name="content"
            className="textarea"
            value={content}
            onChange={handleChange}
            placeholder="W czym mogę pomóc?"
          ></textarea>
        </div>
      </div>

      <Button center className="button" type="submit">
        Wyślij
      </Button>
    </StyledForm>
  )
}

export default ContactForm
