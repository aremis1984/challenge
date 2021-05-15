import React from 'react'
import { Link } from 'react-router-dom'
import { StyledButton } from '../styles/StyledWrappers'

export const LinkComponent = (props) => {

    return (
        <Link to={{ pathname: props.path, state: props.state }} >
            <StyledButton type='button' className='btn btn-dark' disabled={props.disabled}>{props.text}</StyledButton>
        </Link>
    )
}

export default LinkComponent