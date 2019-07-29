import React from "react"
import { majorChords } from "../chord-control/majorChords"

interface Props {
  colour: string
  context: any
  url: string
}

const ChordButton = ({ colour, url, context }: Props) => {
  let omniBuffer: any
  let fired = false

  React.useEffect(() => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw Error("Oh no")
        }
        return response.arrayBuffer()
      })
      .then(arrayBuffer => context.decodeAudioData(arrayBuffer))
      .then(audioBuffer => {
        omniBuffer = audioBuffer
      })
      .catch(err => console.log(err))
  }, [context, url])

  const handleKeyDown = (e: any) => {
    const chord = majorChords.find(chord => chord.keyCode === e.keyCode)
    if (chord && !fired) {
      fired = true
      console.log(chord)
      const source = context.createBufferSource()
      source.buffer = omniBuffer
      source.connect(context.destination)
      source.start()

      document.addEventListener("keyup", function() {
        if (source) {
          source.stop(context.currentTime)
          source.disconnect()
          fired = false
        }
      })
    }
  }

  const handleMouseClick = () => {
    const source = context.createBufferSource()
    source.buffer = omniBuffer
    source.connect(context.destination)
    source.start()

    document.addEventListener("mouseup", function() {
      if (source) {
        source.stop(context.currentTime)
        source.disconnect()
      }
    })
  }
  document.addEventListener("keydown", handleKeyDown)

  return (
    <div
      style={{
        height: "40px",
        width: "32px",
        background: `${colour}`,
        border: "1px solid black",
      }}
      onMouseDown={() => handleMouseClick()}
    />
  )
}

export default ChordButton
