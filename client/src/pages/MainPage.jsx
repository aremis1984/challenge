import React, { useState} from 'react'
import styled from 'styled-components'
import { LinkComponent } from '../components'
import { StyledWrapper }from '../styles/StyledWrappers'

const StyledFormCard = styled(StyledWrapper)`
    border-radius: 20px;
    padding: 30px;
    box-shadow: 0px 10px 25px 5px grey;
`;
StyledFormCard.displayName = 'StyledFormCard'

export const MainPage = (props) => {
    const [email, setEmailValue] = useState('')
    
    const handleChange = (ev) => {
        setEmailValue(ev.target.value)
    }

    const isValidEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return re.test(String(email).toLowerCase())
    }

    return (
        <StyledFormCard>
            <div className='card-body'>
                <p className='card-text'>Please enter your email address to see your recent orders.</p>
                <label htmlFor='email' className='small'>Email</label>
                <input type='email' value={email} onChange={handleChange} className='form-control' name='email' placeholder='Type your email address' />
                {email !== '' && !isValidEmail(email) && <span className='small text-danger'>Please enter a valid email address</span>}
                <LinkComponent 
                    path='/order-history'
                    text='send'
                    state={{ email }}
                    disabled={!isValidEmail(email)}
                />
            </div>
        </StyledFormCard>
    )
}

export default MainPage