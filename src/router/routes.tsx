import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Public from './PublicRoute'
import Private from './PrivateRoute'
import Chat from '../pages/Chat'
import SignUp from '../pages/SignUp'
import Login from '../pages/Login'

const Routes = (props: any) => {
  const loggedIn = Boolean(true)
  console.log('test')
  return (
    <Router>
      <Switch>
        <Private
          exact
          path="/"
          loggedIn={loggedIn}
        >
          <Chat />
        </Private>
        <Public
          exact
          path="/signup"
          loggedIn={loggedIn}>
          <SignUp />
        </Public>
        <Public
          exact
          path="/login"
          loggedIn={loggedIn}>
          <Login />
        </Public>
      </Switch>
    </Router>
  )
}

export default Routes