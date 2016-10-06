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
import UpdateUser from './components/auth/UpdateUser';
import Customer from './components/Customer';
// DO WE NEED THESE?
import FenceEditor from './components/FenceEditor';
import AddMaterial from './components/AddMaterial';
import AddHeight from './components/AddHeight';
import AddGate from './components/AddGate';
import EditMaterial from './components/EditMaterial';
import EditHeight from './components/EditHeight';
import EditGate from './components/EditGate';
import FinalEstimate from './components/FinalEstimate';
import CustomerInput from './components/CustomerInput';
import LandingPage from './components/LandingPage';

const UserIsAuthenticated = UserAuthWrapper({
	authSelector: state => state.auth,
	predicate: auth => auth.isAuthenticated,
	redirectAction: history.push,
	wrapperDisplayName: 'UserIsAuthenticated'
});
 

export default (
  <Route>
    <Route path="/" component={App} >
	   <IndexRoute component={LandingPage} />
	   <Route path='map' component={Map} />
	   // REMOVE THESE 
	   <Route path='customerinput' component={CustomerInput} />
	   <Route path='finalestimate' component={FinalEstimate} />
	   
	   <Route path='estimate' component={Estimate} />
	   <Route path='fences' component={Fences} />
	   <Route path='about' component={About} />
	   <Route path='/contact' component={ContactUs} />
	   <Route path='/login' component={Login} />
	   <Route path='/admin' component={UserIsAuthenticated(Admin)} />
	   <Route path='/fenceeditor' component={UserIsAuthenticated(FenceEditor)} />
	   <Route path='/customers/:id' component={Customer} />
	   <Route path='/user/update' component={UserIsAuthenticated(UpdateUser)} />
	   <Route path="*" status={404} component={NoMatch} />
    </Route>
  </Route>
)


