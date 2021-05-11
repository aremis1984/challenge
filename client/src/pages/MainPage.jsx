import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const MainPage = (props) => {
    const [value, setState] = useState('')
    
    const handleChange = (ev) => {
        setState(ev.target.value);
    
    }

    return (
        <form className='form-inline'>
            <div className="form-group">
                <input type="text" value={value} onChange={handleChange} className="form-control" name="keyword" placeholder="Image keyword" />
                <Link to={{pathname: '/search', state: { value } }} >
                    <button className="btn btn-primary">Search</button>
                </Link>
            </div>
        </form>
    )

}

export default MainPage