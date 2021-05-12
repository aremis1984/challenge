import React from 'react'
import styled from 'styled-components'
import { StyledWrapper, LinkComponent } from '../components'

const StyledCard = styled.div`
    border-radius: 20px;
    padding: 30px;
    box-shadow: 0px 10px 25px 5px grey;
    margin: 40px auto;
    max-width: 500px;
`;
StyledCard.displayName = 'StyledCard'


export const OrderCardComponent = (props) => {
    
    const handleClick = (index) => {
       console.log(index)
    }

    return (
        <StyledCard onClick={() => handleClick(props.orderIndex)}>
            <div className='card-body row'>
                <div className='col-md-6 col-xs-12'>
                    <span className='small fw-light'>Order Number</span>
                    <p className='fw-bold'>{props.order.orderNo}</p>
                </div>
                <div className='col-md-6 col-xs-12'>
                    <span className='small fw-light'>Current Status</span>
                    <p className='fw-bold'>{props.order.status_details}</p>
                </div>
                <div className='col-md-6 col-xs-12'>
                    <span className='small fw-light'>Delivery Address</span>
                    <div>
                        <span className='fw-bold'>{props.order.street}</span>
                        <span className='fw-bold'>
                            {props.order.zip_code} {props.order.city}
                        </span>
                        <span className='fw-bold'>{props.order.city}</span>
                    </div>
                </div>
            </div>
        </StyledCard>
    )
}

export default OrderCardComponent