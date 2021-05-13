import React, {useEffect, useState} from 'react'
import * as api from '../api'
import styled from 'styled-components'
import { LinkComponent, OrderCardComponent, OrdersWrapper } from '../components'
import loading from '../assets/loading.gif'

const StyledImg = styled.img`
    margin: 50px auto;
    display: block;
`;
StyledImg.displayName = 'StyledImg'

export const OrdersListPage = (props) => {
    const { history } = props
    const email = history.location.state && history.location.state.email
    const [userOrders, setTrackings] = useState({
        trackings: undefined,
        loading: true
    })

    useEffect (() => {
        async function getTracking() {
            try {
                const trackings = await api.getTrackingsByEmail(email)
                setTrackings({ trackings, loading: false })
            } catch (err) {
                console.log('error: ' + err)
                setTrackings({ loading: false })
            }
        }
        getTracking()
    }, [email])

    return (
        <OrdersWrapper>
            <h1>Your Orders</h1>
            {userOrders.loading && <StyledImg src={loading} alt='loading' />}
            {!userOrders.loading && userOrders.trackings &&
                userOrders.trackings.map((order, index) => {
                    return (
                        <OrderCardComponent key={index} 
                            order={order}
                            orderIndex = {index}
                            history={history}
                        />
                    )
                }) 
            }
            {!userOrders.loading && !userOrders.trackings &&
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

export default OrdersListPage