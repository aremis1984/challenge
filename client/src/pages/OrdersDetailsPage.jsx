import React from 'react'
import { LinkComponent } from '../components'
import { OrdersWrapper, StyledCard }from '../styles/StyledWrappers'

import styled from 'styled-components'

const StyledOrderData = styled.div`
    display: grid;
`;

StyledOrderData.displayName = StyledOrderData

const StyledDetails = styled.div`
    display: flex;
    span {
        margin-right: 15px;
    }
    img {
        width: 40px;
    }
`;

StyledDetails.displayName = StyledDetails


export const OrdersDetailsPage = (props) => {
    const { location } = props
    const order = location.state
    const { order_details } = order
    const { article_list } = order

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
                <span className='fw-bold'>{order_details[order_details.length-1].status_text}</span>
                <span className='small fw-light'>{order_details[order_details.length-1].status_details}</span>
            </StyledCard>
            {article_list.length > 0 &&
                <StyledCard>
                    <span className='small fw-light'>Articles</span>
                    {article_list.map((article, i) => {
                        return (
                        <StyledDetails key={i} className='row'>
                            <div className='col-xs-12 col-md-3'>
                                <span className='fw-bold'>x{article.quantity}</span>
                                <img src = {article.articleImageUrl} alt = '' />
                            </div>
                            <div className='col-md-9 col-xs-12'>
                                <span className='fw-bold'>{article.product_name}</span>
                                <p className='small fw-light'>{article.articleNo}</p>
                            </div>
                        </StyledDetails>
                        )
                    })
                    }
                </StyledCard>
            }
            {article_list.length === 0 &&
                <h3>We could not find the articles related to this order</h3>
            }
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