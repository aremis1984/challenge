import React from 'react'
import apis from '../api'
import { LinkComponent, OrderCardComponent } from '../components'
import { OrdersWrapper }from '../styles/StyledWrappers'

import { NotificationManager} from 'react-notifications'
import 'react-notifications/lib/notifications.css'

export class OrdersListPage extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
          hasError: false,
          trackings: []
        }
      }
    
    componentDidMount () {
        this.getTracking()
    }

    getTracking () {
        const email = this.props.history.location.state && this.props.history.location.state.email
        return apis.getTrackingsByEmail(email).then((trackings) => {
            this.setState({ trackings })
        }).catch ((err) => {
            NotificationManager.error('We could not get your orders, please try again.', 'Error', 2000)
            this.setState({ hasError: true })
        })
    }

    render () {
        const { history } = this.props
        const { trackings, hasError } = this.state
        const { email } = history.location.state
        return (
            <OrdersWrapper>
                <h1>Your Orders</h1>
                {!hasError && trackings.length > 0 &&
                    trackings.map((order, index) => {
                        return (
                            <OrderCardComponent key={index} 
                                order={order}
                                orderIndex = {index}
                                history={history}
                            />
                        )
                    }) 
                }
                {hasError &&
                    <React.Fragment>
                        <h4>No orders were found</h4>
                        <span>There any order in the system associated to the email address: </span>
                        <span className = 'text-info'>{email}</span>
                        <p>If you think this is an error, please go back and try again.</p>
                    </React.Fragment>
                }
                <LinkComponent 
                    path='/'
                    text='back'
                />
            </OrdersWrapper>
        )
    }
}

export default OrdersListPage