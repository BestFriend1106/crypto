import React from 'react';
import ReactDOM from 'react-dom';
import HomeOne from './HomeOne';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

class Root extends React.Component {
  render() {
  	return(
  		<BrowserRouter basename={'/'} >
		  	<Switch>
			  <Route exact path={`${process.env.PUBLIC_URL}/`} component={HomeOne}/>
			  <Route path={`${process.env.PUBLIC_URL}/home-one`} component={HomeOne}/> 
			  <Route path={`${process.env.PUBLIC_URL}/home-two`} component={HomeOne}/> 
			  <Route path={`${process.env.PUBLIC_URL}/home-three`} component={HomeOne}/> 
			  <Route path={`${process.env.PUBLIC_URL}/home-four`} component={HomeOne}/> 
			  <Route path={`${process.env.PUBLIC_URL}/home-five`} component={HomeOne}/> 
			  <Route path={`${process.env.PUBLIC_URL}/home-six`} component={HomeOne}/> 
			  <Route path={`${process.env.PUBLIC_URL}/home-seven`} component={HomeOne}/> 
			  <Route path={`${process.env.PUBLIC_URL}/home-eight`} component={HomeOne}/> 
			  <Route path={`${process.env.PUBLIC_URL}/home-nine`} component={HomeOne}/>  
			  <Route path={`${process.env.PUBLIC_URL}/login`} component={HomeOne}/>    
			  <Route path={`${process.env.PUBLIC_URL}/password-forget`} component={HomeOne}/>  
			  <Route path={`${process.env.PUBLIC_URL}/sign-up`} component={HomeOne}/>  
			</Switch>
		</BrowserRouter>
  	);
  }
 }

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
