import React, {Component} from 'react';
import Headerof from './Header';
import Footerof from './Footer';
import Slider from './Slider';

class Main extends Component{
    render(){
        return(
            <>
            <Headerof />
            <Slider />
            <Footerof />
            </>
        );
    } 
}

export default Main