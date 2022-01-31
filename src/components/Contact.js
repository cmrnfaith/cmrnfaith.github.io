import React, { useState } from "react"
import { validateEmail } from "../utilities/HelperFunctions"

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [errorMessage, setErrorMessage] = useState("")

  const { name, email, message } = formState

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value)

      if (!isValid) {
        setErrorMessage("Please enter a valid email")
      } else {
        setErrorMessage("")
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`)
      } else {
        setErrorMessage("")
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value })
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <section className="container">
      <h2 data-testid="h1tag" className="top-title">
        Contact Form
      </h2>
      <hr></hr>
      <form
        class="justify-content-center"
        id="contact-form"
        method="post"
        action="https://forms.un-static.com/forms/848fb6f4c3cc82d26b2ab919dbabc4d022182f2e"
      >
        <div class="mt-5">
          <label htmlFor="name" style={{ fontSize: "1.2rem" }}>
            Name:
          </label>
          <input
            class="form-control"
            type="text"
            name="Name"
            defaultValue={name}
            onBlur={handleChange}
          />
        </div>
        <div class="mt-5">
          <label htmlFor="email" style={{ fontSize: "1.2rem" }}>
            Email Address:
          </label>
          <input
            class="form-control"
            type="email"
            name="Email"
            defaultValue={email}
            onBlur={handleChange}
          />
        </div>
        <div class="mt-5">
          <label htmlFor="message" style={{ fontSize: "1.2rem" }}>
            Message:
          </label>
          <textarea
            class="form-control"
            name="Message"
            defaultValue={message}
            onBlur={handleChange}
            rows="7"
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}

        <div class="mt-5 mb-5">
          <button
            data-testid="button"
            class="btn btn-outline-dark "
            type="submit"
            style={{ fontSize: "1.2rem" }}
            onSubmit={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  )
}

export default ContactForm
