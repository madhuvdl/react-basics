import React, { Component } from 'react';

class Person extends Component {
    render() {
        return (
            <div>
                <p onClick={this.props.deletePerson}>I am {this.props.name} ang my age: {this.props.age}</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </div>
        );
    }
}

export default Person;
