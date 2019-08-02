import React from "react"
import { Route, Redirect } from "react-router-dom"
import { connect } from "react-redux"
import { RouteProps, RouteComponentProps } from "react-router"
import { AppState } from "../../reducers"

interface IProps extends RouteProps {
  isAuthenticated: boolean
}

export const AuthorisedRoute = ({ component, ...rest }: IProps) => {
  const { isAuthenticated } = rest
  if (!component) {
    throw Error("component is undefined")
  }

  const Component = component
  const render = (props: RouteComponentProps<any>): React.ReactNode => {
    if (isAuthenticated) {
      return <Component {...props} />
    }
    return <Redirect to={{ pathname: "/login" }} />
  }

  return <Route {...rest} render={render} />
}

function mapStateToProps(state: AppState) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  }
}

export default connect(mapStateToProps)(AuthorisedRoute)
