import React from "react"
import styled from "styled-components"

const Container = styled.div`
  position: relative;
`

interface IProps {
  children: any
}
const SectionContainer = ({ children }: IProps) => (
  <Container>{children}</Container>
)

export default SectionContainer
