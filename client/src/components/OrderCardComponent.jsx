import React from 'react'
import styled from 'styled-components'

const StyledCard = styled.div`
    border-radius: 20px;
    padding: 30px;
    box-shadow: 0px 10px 25px 5px grey;
    margin: 40px auto;
    max-width: 500px;
`;
StyledCard.displayName = 'StyledCard'


export const OrderCardComponent = (props) => {
    const { order, orderIndex, history } = props
    
    const handleClick = (index) => {
       history.push({
           pathname: '/order-details',
           state: order
       })
    }

    return (
        <StyledCard onClick={() => handleClick(orderIndex)}>
            <div className='card-body row'>
                <div className='col-md-6 col-xs-12'>
                    <span className='small fw-light'>Order Number</span>
                    <p className='fw-bold'>{order.orderNo}</p>
                </div>
                <div className='col-md-6 col-xs-12'>
                    <span className='small fw-light'>Current Status</span>
                    <p className='fw-bold'>{order.status_details}</p>
                </div>
                <div className='col-md-6 col-xs-12'>
                    <span className='small fw-light'>Delivery Address</span>
                    <div>
                        <span className='fw-bold'>{order.street}</span>
                        <span className='fw-bold'>
                            {order.zip_code} {order.city}
                        </span>
                        <span className='fw-bold'>{order.city}</span>
                    </div>
                </div>
            </div>
        </StyledCard>
    )
}

export default OrderCardComponent