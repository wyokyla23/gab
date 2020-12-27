import { Route, Redirect, RouteProps } from 'react-router-dom'

interface Props extends RouteProps {
  loggedIn: any
  children?: React.ReactNode
}

const PrivateRoute: React.FC<Props> = ({ loggedIn, ...rest }) => {
  if (loggedIn) {
    return <Route {...rest} />
  } else {
    return <Redirect to="/" />
  }
}

export default PrivateRoute