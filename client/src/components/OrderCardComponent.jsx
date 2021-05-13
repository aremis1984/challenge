import React from 'react'
import { StyledCard } from '../styles/StyledWrappers'
import styled from 'styled-components'

const StyledAddress = styled.div`
    display: grid;
`;

export const OrderCardComponent = (props) => {
    const { order, orderIndex, history } = props
    
    const handleClick = (index) => {
       history.push({
           pathname: '/order-details',
           state: order
       })
    }

    const { order_details } = order

    return (
        <StyledCard className='order-card' onClick={() => handleClick(orderIndex)}>
            <div className='card-body row'>
                <div className='col-md-6 col-xs-12'>
                    <span className='small fw-light'>Order Number</span>
                    <p className='fw-bold'>{order.orderNo}</p>
                </div>
                <div className='col-md-6 col-xs-12'>
                    <span className='small fw-light'>Current Status</span>
                    <p className='fw-bold'>{order_details[order_details.length-1].status_text}</p>
                </div>
                <div className='col-md-6 col-xs-12'>
                    <span className='small fw-light'>Delivery Address</span>
                    <StyledAddress>
                        <span className='fw-bold'>{order.street}</span>
                        <span className='fw-bold'>
                            {order.zip_code}, {order.city}
                        </span>
                    </StyledAddress>
                </div>
            </div>
        </StyledCard>
    )
}

export default OrderCardComponent