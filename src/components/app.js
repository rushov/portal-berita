import React from 'react';
import {connect} from 'react-redux';

import Header from '../containers/Header';
import Content from '../containers/Content';
import Footer from '../containers/Footer';

const App = ()=>(
	<>
	<Header/>
	<Content/>
	<Footer/>
	</>
);

export default connect()(App);