import React, { Component } from 'react'
import propTypes from 'prop-types'

class PropTypeChecking extends Component{
    render(){
        return(
            <React.Fragment>
                <h2>Hello: {this.props.name}</h2>
                <h2>Sum Is: {this.props.sum}</h2>
            </React.Fragment>
        )
    }
}



PropTypeChecking.propTypes ={
    name: propTypes.string.isRequired,
    sum: propTypes.number.isRequired
}

PropTypeChecking.defaultProps = {
    name: "By Default Abdul Sami",
    sum: 420
}


export default PropTypeChecking