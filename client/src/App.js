import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { MainPage, OrdersListPage, OrdersDetailsPage } from './pages'

function App() {
    return (
        <Router>
            <div className='row'>
                <div className = 'col-xs-12'>
                    <Switch>
                        <Route path='/' component={MainPage} exact />
                        <Route path='/search' component={OrdersListPage} />
                        <Route path='/order-details/:id' component={OrdersDetailsPage} />

                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default App
