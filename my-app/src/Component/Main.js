import React, {Component} from 'react';
import Headerof from './Header';
import Footerof from './Footer';
import Slider from './Slider';

class Main extends Component{
    state={
        amount:500,
        month:6
    }
    render(){
        return(
            <>
            <Headerof />
            <Slider data={this.state}/>
            <Footerof />
            </>
        );
    } 
}

export default Main