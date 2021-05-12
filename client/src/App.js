import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { MainPage } from './pages/MainPage'
import { OrdersListPage } from './pages/OrdersListPage'

function App() {
    return (
        <Router>
            <Switch>
                <Route path='/' component={MainPage} exact />
                <Route path='/search/:email' component={OrdersListPage} />
            </Switch>
        </Router>
    )
}

export default App
