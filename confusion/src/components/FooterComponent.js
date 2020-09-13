import React from 'react';
import {Link} from 'react-router-dom';

function Footer(props){
    return(
<div className="footer">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-4 offset-1 col-sm-2">
                    <h5 className="footer-headers">Links</h5>
                    <ul className="list-unstyled">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/aboutus">About Us</Link></li>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="/contactus">Contact Us</Link></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-5">
                    <h5 className="footer-headers">Our Address</h5>
                    <address>
                    512, IP Extension Road,<br />
                    Patparganj, New Delhi- 110092<br />
		              India<br />
		              <i className="fa fa-phone fa-lg link-styling"></i> +91 844 787 8035<br />
		             
		              <i className="fa fa-envelope fa-lg link-styling"></i> <a href="mailto:ashoksrinivasan96@gmail.com">
                        delikabi@food.net</a>
                    </address>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-github link-styling" href="https://github.com/ashoksrinivasan96"><i className="fa fa-github"></i></a>
                        <a className="btn btn-social-icon btn-facebook link-styling" href="https://www.facebook.com/PingyPinkyPiggy/"><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-linkedin link-styling" href="https://www.linkedin.com/in/ashok-srinivasan-g/"><i className="fa fa-linkedin"></i></a>
                       
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-12">
                    <p className="cpright">© Copyright 2020 Exotic DeliKabi</p>
                </div>
            </div>
        </div>
    </div>

    );


}

export default Footer;