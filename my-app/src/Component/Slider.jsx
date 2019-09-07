import React, {Component} from 'react';
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

class Slider extends Component{
    state = {
        amount:500,
        month:6       
    }

    render(){
        return(
            <div className="slider-box">
                <div className="slider-amount">
                    <div className="amount-text">
                        <label>Amount Range ($) : {this.state.amount}</label>
                    </div>
                    <div className="slider">
                        <InputRange
                            maxValue={5000}
                            minValue={500}
                            value={this.state.amount}
                            onChange={amount => this.setState({ amount })}
                        />
                    </div>
                </div>
                <div className="slider-month">
                    <div className="month-text">
                        <label>Loan Duration (in months) : {this.state.month}</label>
                    </div>
                    <div className="slider">
                        <InputRange
                            maxValue={24}
                            minValue={6}
                            value={this.state.month}
                            onChange={month => this.setState({ month })}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Slider;