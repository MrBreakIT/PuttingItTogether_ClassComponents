import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';


class PersonCard extends Component {
    render() {
        const { lastName, firstName, age, hairColor } = this.props;
        return (
            <div className="">
                <h2 className="">
                    {lastName}, {firstName}
                </h2>
                <p className="">Age: {age}</p>
                <p className="">Hair Color: {hairColor}</p>
            </div >
        );
    }
}
export default PersonCard;














