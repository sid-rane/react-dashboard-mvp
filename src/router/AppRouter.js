import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import Home from '../functionalComponent/home/Home';
import Parallax from '../functionalComponent/parallax/Parallax';
import TodoApp from '../functionalComponent/toDoApp/TodoApp';
import UserList from '../functionalComponent/userList/UserList';
import Header from '../header/Header';
import RecipeSearchAPI from '../Recipe/RecipeSearchAPI';

function AppRouter() {
    return (
        <div>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/to-do-app">
                        <TodoApp />
                    </Route>
                    <Router exact path="/parallax">
                        <Parallax />
                    </Router>
                    <Router exact path="/users">
                        <UserList />
                    </Router>
                    <Router exact path="/recipe-search">
                        <RecipeSearchAPI />
                    </Router>
                </Switch>
            </Router>
        </div >
    )
}

export default AppRouter
