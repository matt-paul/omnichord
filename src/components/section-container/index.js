import React from "react"

const SectionContainer = ({ children }) => (
  <div style={styles.masterControl}>{children}</div>
)

const styles = {
  masterControl: {
    position: "relative",
  },
}

export default SectionContainer
