import React, {useEffect, useState} from 'react'
import * as api from '../api'
import styled from 'styled-components'
import { LinkComponent, OrderCardComponent } from '../components'

const OrdersWrapper = styled.div`
    margin: 0 auto;
    max-width: 500px;
    padding: 40px 0;
`;
OrdersWrapper.displayName = 'OrdersWrapper'

export const OrdersListPage = (props) => {
    const { history } = props
    const email = history.location.state && history.location.state.email
    const [trackings, setTrackings] = useState([])

    useEffect (() => {
        async function getTracking() {
            try {
                const trackings = await api.getTrackingsByEmail(email)
                console.log(trackings)
                setTrackings(trackings)
            } catch (err) {
                console.log('error' + err)
            }
        }
        getTracking()
    }, [email])

    return (
        <OrdersWrapper>
            <h1>Your Orders</h1>
            {trackings.length > 0 &&
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
            {trackings.length === 0 &&
                <React.Fragment>
                    <br/>
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

export default OrdersListPage