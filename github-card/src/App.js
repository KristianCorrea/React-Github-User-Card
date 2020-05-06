import React from 'react';
import './App.css';
import Card from "./components/Card"
import Followers from "./components/Followers"
import axios from "axios"
import styled from 'styled-components';

const FollowersContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  border: solid;
`

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      user: '',
      followers: []
    }
  }
  componentDidMount(){
    axios
      .get('https://api.github.com/users/KristianCorrea') //Grabbing Data
      .then(userResponse =>{
        console.log(userResponse.data)
        axios
          .get(userResponse.data.followers_url)
          .then(followersResponse=>{
            console.log(followersResponse.data);
            this.setState( {
              user: userResponse.data,
              followers: followersResponse.data
            } );
          })
      })
  }
  render(){
    return (
      <div className="App">
        <Card
          user={this.state.user}
        />
        <h2>Followers</h2>
        <FollowersContainer>
          {
            this.state.followers.map(function(user){
              return <Followers user={user}/>
            })
          }
          
        </FollowersContainer>
        
      </div>
    );
  }
}

export default App;
