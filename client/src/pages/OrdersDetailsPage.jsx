import React, {useEffect, useState} from 'react'
import { LinkComponent } from '../components'
import styled from 'styled-components'

export const OrdersDetailsPage = (props) => {
    const { history } = props
    return (
        <div>
            <LinkComponent 
                path='/search'
                text='back'
                state={{ email: history.location.state.email }}
            />
            <LinkComponent 
                path='/'
                text='new search'
            />
        </div>  
    )   
}

export default OrdersDetailsPage