import React, {Component} from 'react';
import {
    Route,
    Redirect
} from "react-router-dom"
import {Layout} from './components/Layout';
import './custom.css'
import {Home} from "./components/Home";
import MainPage from "./components/MainPage";
import ContactsPage from "./components/ContactsPage";
import StudentsList from "./components/StudentsList/StudentsList";

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route path='/main' component={MainPage}/>
                <Route exact path='/students' component={StudentsList}/>
                <Route exact path='/rooms' component={Home}/>
                <Route path='/contacts' component={ContactsPage}/>
                <Redirect from='/' to='/main'/>
            </Layout>
        );
    }
}
