import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import * as api from '../api'
import styled from 'styled-components'

export const OrdersListPage = (props) => {
    const { history } = props

    const [trackings, setTrackings] = useState([])

    const getTrackings = () => {
        const email = history.location.state.value
        return api.getTrackingsByEmail(email).then(trackings => {
            console.log(trackings)
            setTrackings(trackings)
        }).catch((err)=>{
            alert('error')
        })
    }

    useEffect(() => {
        getTrackings()
    })


    return (
        <p>hola</p>
    )

}

export default OrdersListPage