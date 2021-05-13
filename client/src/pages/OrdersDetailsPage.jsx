import React from 'react'
import { LinkComponent, OrdersWrapper, StyledCard } from '../components'

import styled from 'styled-components'

const StyledOrderData = styled.div`
    display: grid;
`;

StyledOrderData.displayName = StyledOrderData

export const OrdersDetailsPage = (props) => {
    const { location } = props
    const order = location.state

    return (
        <OrdersWrapper>
            <StyledOrderData>
                <span className='small fw-light'>Order Number</span>
                <p className='fw-bold'>{order.orderNo}</p>
                <span className='small fw-light'>Delivery Address</span>
                <span className='fw-bold'>{order.street}</span>
                <span className='fw-bold'>
                    {order.zip_code}, {order.city}
                </span>
            </StyledOrderData>
            <StyledCard>
                <span className='small fw-light'>Tracking Number</span>
                <p className='fw-bold'>{order.tracking_number}</p>
                <span className='small fw-light'>Current Status</span>
                <span className='fw-bold'>{order.status_text}</span>
                <span className='small fw-light'>{order.status_details}</span>
            </StyledCard>
            <StyledCard>
                <span className='small fw-light'>Articles</span>
                <span className='fw-bold'>{order.quantity}</span>
                <span className='small fw-light'>Current Status</span>
                <span className='fw-bold'>{order.status_text}</span>
                <span className='small fw-light'>{order.status_details}</span>
            </StyledCard>
            <LinkComponent 
                path='/order-history'
                text='back'
                state={{ email: order.email }}
            />
            <LinkComponent 
                path='/'
                text='new search'
            />
        </OrdersWrapper>  
    )   
}

export default OrdersDetailsPage