import React, {Component} from 'react';
import './App.css';
import Person from "./Person/Person.js";

class App extends Component {

    state = {
        persons:[
            {name:"Pat1"},
            {name:"Pat2", age:32},
            {name:"Pat3", age:32},

        ],
        randomAge: ()=>Math.floor(Math.random() * 30 + 1),
    };


    switchNameHandler = (newName) => {
        console.log(this.state);
        this.setState({persons:[
                {name:"zuzu", age:Math.floor(Math.random() * 30 + 1)},
                {name:newName, age:Math.floor(Math.random() * 30 + 1)},
                {name:'gaga', age:Math.floor(Math.random() * 30 + 1)}
            ]});
    }

    randomAge = () => Math.floor(Math.random() * 30 + 1);


    render() {
        return (
            <div className="App">
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}
                />
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    click = {this.switchNameHandler.bind(this, "ddduddududu")}
                />
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age}
                />
                <button onClick={this.switchNameHandler.bind(this,"ooooo")}>Switch Age</button>
            </div>
        );
    }
}
export default App;

