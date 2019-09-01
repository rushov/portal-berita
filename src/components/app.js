import React from 'react';
import {connect} from 'react-redux';

import Header from '../containers/Header';
import Content from '../containers/Content';


const App = ()=>(
	<>
	<Header/>
	<Content/>
	</>
);

export default connect()(App);