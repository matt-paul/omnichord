import React, { useState, useContext, FunctionComponent } from "react"
import { OmniContext } from "../../Omnichord"

interface IProps {
  colour: string
  url: string
}

const ChordButton: FunctionComponent<IProps> = ({ colour, url }) => {
  const [buffer, setBuffer] = useState()
  const context = useContext(OmniContext)

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
        setBuffer(audioBuffer)
      })
      .catch(err => console.log(err))
  }, [context, url])

  const handleMouseClick = () => {
    const source = context.createBufferSource()
    source.buffer = buffer
    source.connect(context.destination)
    source.start()

    document.addEventListener("mouseup", function() {
      if (source) {
        source.stop(context.currentTime)
        source.disconnect()
      }
    })
  }

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
