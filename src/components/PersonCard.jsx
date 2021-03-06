import React, { Component } from 'react';


class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: props.age
        }
        // this.increaseAge = this.increaseAge.bind(this); //this binds "this" to the method
    }

    // increaseAge() {
    //     this.setState(prevState => {
    //         // { age += 1 };
    //         return { age: age += 1 }
    //     })
    // }

    render() {
        const { lastName, firstName, hairColor } = this.props;
        return (
            <div className="App">
                <div>
                    <h2>
                        {lastName}, {firstName}
                    </h2>

                    <p>Age: {this.state.age}</p>
                    <p>Hair Color: {hairColor}</p>
                    <button onClick={() => (this.setState({ age: this.state.age + 1 }))}> Add years to {firstName} {lastName}'s life.</button>
                    <div>
                        <button onClick={() => (this.setState({ age: this.state.age - 1 }))}> Take away years for {firstName} {lastName}'s life.</button>
                    </div>
                </div>
            </div >
        );
    }
}
export default PersonCard;














