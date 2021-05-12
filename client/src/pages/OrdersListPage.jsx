import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import * as api from '../api'
import styled from 'styled-components'

export const OrdersListPage = (props) => {
    const { history } = props
    const [trackings, setTrackings] = useState([])

    useEffect (() => {
        async function getTracking() {
            const email = history.location.state.value
            try {
                const trackings = await api.getTrackingsByEmail(email)
                console.log(trackings);
                setTrackings(trackings);
            } catch (err) {
                console.log('error' + err);
            }
        }
        getTracking()
    }, [history])


    return (
        <p>hola</p>
    )

}

export default OrdersListPage