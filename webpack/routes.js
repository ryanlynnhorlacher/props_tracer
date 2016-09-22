import React from 'react';
import { Route, IndexRoute, browserHistory } from 'react-router';
import { UserAuthWrapper } from 'redux-auth-wrapper';
import App from './containers/App';
import NoMatch from './components/NoMatch';
import Map from './components/Map';
import Estimate from './components/Estimate';
import Fences from './components/Fences';
import About from './components/About';
import Admin from './components/Admin';
import { handleLogout } from './components/auth/actions';
import ContactUs from './components/ContactUs';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import UpdateUser from './components/auth/UpdateUser'

const UserIsAuthenticated = UserAuthWrapper({
	authSelector: state => state.auth,
	predicate: auth => auth.isAuthenticated,
	redirectAction: history.push,
	wrapperDisplayName: 'UserIsAuthenticated'
});

export default (
  <Route>
    <Route path="/" component={App} >
	   <IndexRoute component={Map} />
	   <Route path='/estimate' component={Estimate} />
	   <Route path='/fences' component={Fences} />
	   <Route path='/about' component={About} />
	   <Route path='/contact' component={ContactUs} />
	   <Route path='/login' component={Login} />
	   <Route path='/admin' component={UserIsAuthenticated(Admin)} />
	   <Route path='/signup' component={Signup} />
	   <Route path='/user/update' component={UpdateUser} />

	   <Route path="*" status={404} component={NoMatch} />
    </Route>
  </Route>
)

