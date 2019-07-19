import React from "react"
import styled from "styled-components"

const Container = styled.div`
  position: relative;
`
const SectionContainer = ({ children }) => <Container>{children}</Container>

export default SectionContainer
