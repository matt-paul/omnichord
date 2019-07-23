import { renderChordButtons } from "./"
import { majorChords } from "./majorChords"

describe("Chord Control Section", () => {
  test("renders correct number of buttons", () => {
    const NUMBER_OF_NOTES = 12
    const result = renderChordButtons(majorChords)
    expect(result.length).toEqual(NUMBER_OF_NOTES)
  })
})
