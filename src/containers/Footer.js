import React, {Component} from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';


class Footer extends Component {	
	render() {
		const url_logo = window.location.hostname;
		
		return (
			<Router>
				<div className="footer">
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<div className="footer__logo">
									<a className="" href={url_logo}>PZ News</a>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12">
								<div className="footer_information">
									<p>Copyright © 2019 PZ News, All right reserved</p>
								</div>
							</div>
						</div>
					</div>
				</div>				
			</Router>
		)
	}
}

export default Footer;