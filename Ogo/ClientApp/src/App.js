import React, {Component} from 'react';
import {
    Route,
    Redirect, Link
} from "react-router-dom"
import {Layout} from './components/Layout';
import './custom.css'
import {Home} from "./components/Home";
import MainPage from "./components/MainPage";
import ContactsPage from "./components/InfoPage";
import StudentsList from "./components/StudentsList/StudentsList";
import DormitoryScheme from "./components/DormitoryScheme/DormitoryScheme";
import StudentPage from "./components/StudentPage";

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path='/main' component={MainPage}/>
                <Route exact path='/students' component={StudentsList}/>
                <Route exact path='/students/:id' component={StudentPage}/>
                <Route exact path='/rooms' component={Home}/>
                <Route exact path='/contacts' component={ContactsPage}/>
                <Route exact path='/scheme' component={DormitoryScheme}/>
                <Redirect from='/' to='/main'/>
            </Layout>
        );
    }
}
