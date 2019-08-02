import React, {
  FunctionComponent,
  useState,
  FormEvent,
  KeyboardEvent,
} from "react"

export function validateEmail(email: string) {
  return `${email}is not valid`
}

const Form: FunctionComponent = () => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
  }
  const handleChange = (event: any) => {
    console.log(event.target.type)
    console.log(event.target.value)
    event.preventDefault()
    const { type, value } = event.target as HTMLInputElement
    setState({
      ...state,
      [type]: value,
    })
    const newState = {
      [type]: value,
    }
  }

  const [state, setState] = useState({
    email: "",
    password: "",
    errorMessage: "",
  })
  return (
    <form noValidate onSubmit={handleSubmit}>
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={handleChange}
            required
            pattern="[A-Za-z]+"
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={handleChange}
            required
          />
        </label>
        <input
          type="submit"
          value="Submit"
          disabled={state.errorMessage !== ""}
        />
      </div>
    </form>
  )
}

export default Form
