import React, { FunctionComponent } from "react"
import styled from "styled-components"

const Container = styled.div`
  position: relative;
`

interface IProps {
  children: any
}
const SectionContainer: FunctionComponent<IProps> = ({ children }) => (
  <Container>{children}</Container>
)

export default SectionContainer
