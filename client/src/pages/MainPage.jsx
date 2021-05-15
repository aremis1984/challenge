import React, { useState} from 'react'
import styled from 'styled-components'
import { StyledWrapper, StyledButton }from '../styles/StyledWrappers'

const StyledFormCard = styled(StyledWrapper)`
    border-radius: 20px;
    padding: 30px;
    box-shadow: 0px 10px 25px 5px grey;
`;
StyledFormCard.displayName = 'StyledFormCard'

export const MainPage = (props) => {
    const { history } = props
    const [email, setEmailValue] = useState({
        emailText: '',
        isValid: true
    })
    
    const handleChange = (ev) => {
        setEmailValue({...email, emailText: ev.target.value})
    }

    const isValidEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        setEmailValue({ ...email, isValid: re.test(String(email).toLowerCase()) })
        return re.test(String(email).toLowerCase())
    }

    const handleSubmit = () => {
        isValidEmail(email.emailText) && history.push({
            pathname: '/order-history',
            state: { email: email.emailText }
        })
    }

    return (
        <StyledFormCard>
            <div className='card-body'>
                <p className='card-text'>Please enter your email address to see your recent orders.</p>
                <label htmlFor='email' className='small'>Email</label>
                <input type='email' value={email.emailText} onChange={handleChange} className='form-control' name='email' placeholder='Type your email address' />
                { !email.isValid && <span className='small text-danger'>Please enter a valid email address</span> }
                <StyledButton type='button' className='btn btn-dark' disabled={email.emailText === ''} onClick={() => handleSubmit()}>search</StyledButton>
            </div>
        </StyledFormCard>
    )
}

export default MainPage