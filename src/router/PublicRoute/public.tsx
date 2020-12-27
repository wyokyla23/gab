import { Route, Redirect, RouteProps } from 'react-router-dom'

interface Props extends RouteProps {
  loggedIn: any
  children?: React.ReactNode
}

const PublicRoute: React.FC<Props> = ({ loggedIn, ...rest }) => {
  if (loggedIn) {
    return <Redirect to="/" />
  } else {
    return < Route {...rest} />
  }
}

export default PublicRoute