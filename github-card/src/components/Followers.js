import React from 'react'
import styled from 'styled-components';

const Div = styled.div`

`
const Img = styled.img`

`
export default function Followers(props){
    
    return(
        <Div>
            <h4>{props.user.login}</h4>
            <Img src={props.user.avatar_url} />
        </Div>
    )
}