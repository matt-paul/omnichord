import { renderChordButtons } from "./"
import { majorChords } from "./majorChords.js"

describe("Chord Control Section", () => {
  test("renders correct number of buttons", () => {
    const result = renderChordButtons(majorChords)
    expect(result.length).toEqual(12)
    // expect items in the array to have properties of key and note ?
  })
})
