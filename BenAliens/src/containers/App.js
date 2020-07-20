import React, { Component } from 'react';
import CardList from "../components/CardList";
import {aliens} from './aliens';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from './Scroll';


class App extends Component{
    constructor(){
        super()
        this.state = {
            aliens: aliens,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
        
    }

    render(){
        const filteredAliens = this.state.aliens.filter(alien =>{
            return alien.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return(
            <div className="tc">
                <h1 className="f1">Ben 10Aliens</h1>
                <SearchBox  searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList aliens={filteredAliens}/>
                </Scroll>
            </div>
        );
    };
}

export default App;