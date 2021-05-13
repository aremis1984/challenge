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
                        <Route path='/order-history' component={OrdersListPage} />
                        <Route path='/order-details' component={OrdersDetailsPage} />

                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default App
