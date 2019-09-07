import React, {Component} from 'react';
import { Footer } from 'react-mdl';

class Footerof extends Component{
    render(){
        return(
           <Footer className="footer-color">
                <div className="social-mediaIcon">
                        <p>My Linkedin : 
                            <a href="https://www.linkedin.com/in/venkhat-balaji-100002129/" rel="noopener noreferrer" target="_blank" >
                                <i className="fa fa-linkedin-square" aria-hidden="true" />
                            </a>
                        </p>
                        <p>Designed by Venkhat </p>
                        <p>My Git Hub :
                            <a href="https://github.com/venkhatbalaji" rel="noopener noreferrer" target="_blank" >
                                <i className="fa fa-github-square" aria-hidden="true" />
                            </a>
                        </p>
                </div>
           </Footer>
        );
    }
}

export default Footerof;