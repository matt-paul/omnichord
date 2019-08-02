import React from "react"
import { connect } from "react-redux"

import Component from "../../components/nav"

import { Dispatch } from "redux"

import { login, logout, Actions } from "../../reducers/auth"

import { Action } from "../../reducers"

interface IDispatchProps {
  login: () => Action<"LOGIN">
  logout: () => Action<"LOGOUT">
}

const mapStateToProps = ({
  auth: { isAuthenticated },
}: {
  auth: { isAuthenticated: boolean }
}) => ({
  isAuthenticated,
})

const mapDispatchToProps = (dispatch: Dispatch<Actions>): IDispatchProps => ({
  login: () => dispatch(login()),
  logout: () => dispatch(logout()),
})

interface IProps extends IDispatchProps {
  isAuthenticated: boolean
}
const NavContainer = ({ login, logout, isAuthenticated }: IProps) => (
  <Component login={login} logout={logout} isAuthenticated={isAuthenticated} />
)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavContainer)
