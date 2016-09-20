import React from 'react';
import { Route, IndexRoute} from 'react-router';
import App from './containers/App';

export default (
  	<Route>
  		<Route path="/" component={App} >
    		<IndexRoute component= />
  
    		<Route path="*" status={404} component={NoMatch}/>
    	</Route>
 	</Route>
)