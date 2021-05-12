import React, {useEffect, useState} from 'react'
import * as api from '../api'
import styled from 'styled-components'
import { StyledWrapper, LinkComponent, OrderCardComponent } from '../components'

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

    if(trackings.length > 0) {
        return (
            <OrdersWrapper>
                <h2>Your Orders</h2>
                {trackings.map((order, index) => {
                    return (
                        <OrderCardComponent key={index} 
                            order={order}
                            orderIndex = {index}
                        />
                    )
                })}
            </OrdersWrapper>
        )
    } else {
        return (
            <StyledWrapper>
                <h1>No results found</h1>
                <span>There any order in the system associated to the email address: </span>
                <span className = 'text-info'>{email}</span>
                <p>If you think this is an error, please go back and try again.</p>
                <LinkComponent 
                    path='/'
                    text='back'
                />
            </StyledWrapper>
        )
    }

}

export default OrdersListPage