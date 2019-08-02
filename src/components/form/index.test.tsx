import { validateEmail } from "./"

describe("form validation", () => {
  test("does something", () => {
    const email = "892333@@.com"
    const result = validateEmail(email)
    expect(result).toEqual("This email address is not valid")
  })
})
