import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledButton = styled.button`
    width: 100%;
    text-transform: uppercase;
    margin-top: 20px;
`;
StyledButton.displayName = 'StyledButton'

export const LinkComponent = (props) => {

    return (
        <Link to={{ pathname: props.path, state: props.state }} >
            <StyledButton type='button' className='btn btn-dark' disabled={props.disabled}>{props.text}</StyledButton>
        </Link>
    )
}

export default LinkComponent