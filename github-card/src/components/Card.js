import React from 'react'
import styled from 'styled-components';

const Div = styled.div`

`
const Img = styled.img`

`
export default function Card(props){
    
    return(
        <Div>
            <h4>Username: {props.user.login}</h4>
            <Img src={props.user.avatar_url} />
            {/*If the user has no name it will not render*/}
            {props.user.name !== null && <p>Name: {props.user.name}</p>}
            <p>Followers: {props.user.followers}</p>
            <p>Following: {props.user.following}</p>
            {props.user.bio !== null && <p>{props.user.bio}</p>}
            {props.user.email !== null && <p>Email: {props.user.email}</p>}
        </Div>
    )
}