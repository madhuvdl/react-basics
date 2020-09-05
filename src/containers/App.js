import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';

class App extends Component {
  state = {
        persons: [
          { id: 'dgdfg', name: "Madhu", age: 30 },
          { id: 'sdgtf', name: "Ashok", age: 28 },
          { id: 'sdgdfgf', name: "Yogi", age: 29 },
        ],
        someOtherState: 'some other',
        isShowPersons: false,
        changeCounter: 0
  }
  
//  const [personState, setPersonState] = useState({
//   persons: [
//     { name: "Madhu", age: 30 },
//     { name: "Ashok", age: 28 },
//     { name: "Yogi", age: 29 },
//   ],
//   someOtherState: 'some other',
//   isShowPersons: false
// })

// const [userNameState, setUserNameState] = useState({
//   userName: 'madhu'
// })

// const changeUserNameHandler = (event) => {
//   setUserNameState({
//     userName: event.target.value
//   })
// }

  // const switchNameHandler = () => {
  //   // console.log('button clicked!');
  //   setPersonState({
  //     persons: [
  //       { name: "Madhu Babu", age: 30 },
  //       { name: "Ashok", age: 28 },
  //       { name: "Yogi", age: 29 },
  //     ]
  //   })
  // }

  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState, props) => {
      return {
        persons: persons, changeCounter: prevState.changeCounter + 1 
      }
    })

  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  toggleListsHandler = () => {
    const isShowLists = this.state.isShowPersons;
    this.setState({
      isShowPersons: !isShowLists
    })
  }



  render() {
    let persons = null;
    if(this.state.isShowPersons) {
      persons = (
          <div>
            <Persons
              persons={this.state.persons}
              changed={this.changeNameHandler}
              clicked={this.deletePersonHandler} />
          </div>
      )
    }

    return (
      <div className="App">
        <h1>Hello React</h1>
        <button onClick={this.toggleListsHandler}>Toggle lists</button>
        {persons}

        {/* <UserInput  changeName={changeUserNameHandler} userName={userNameState.userName} />
        <UserOutput userName={userNameState.userName} />
        <UserOutput userName={userNameState.userName} />
        <UserOutput userName="Yogi" /> */}
      </div>
    );
  }
}

export default App;
