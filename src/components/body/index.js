import React, {Component} from 'react'
import { Route, Switch, useRouteMatch} from "react-router-dom";
import services from "../../services/Services";
import { BodyBackground,BodyContainer,CenterContainer } from './styled'
import Home from '../../containers/Home'
import Challenges from '../../containers/Challenges'
import Players from '../../containers/Players'
import Infos from '../../containers/Infos'
import Particles from 'react-particles-js';
import ActualChallenge from '../../containers/ActualChallenge'

class BodyApp extends Component{

    state={
        players: {},
        challenges: {}
    }
    
     getUsers = async () =>{
        await services.getUsers().then(res => {
            this.setState({players:res.data});
          });
    }
    getChallenges = async () =>{
        await services.getChallenges().then(res => {
            this.setState({challenges:res.data});
          });
    }

    componentDidMount(){
        this.getUsers();
        this.getChallenges();
    }
    
    render(){
        const {players,challenges} = this.state
return (
    <BodyBackground>
      <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 50
	        },
	        "size": {
	            "value": 3
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}} />
      
      <BodyContainer>
        <CenterContainer>
      <Switch>
        <Route
          exact
          path="/"
          component={() => <Home users={players} />}
        />
        <Route
          path="/players"
          component={() => <Players users={players} />}
        />
        <Route
          path="/challenges"
          component={() => <Challenges challenges={challenges}/>}
        />
        <Route path="/challenge/now/:id"
        component={(props) => <ActualChallenge {...props} />}
        />
        <Route
          path="/infos"
          component={() => <Infos />}
        />
        
        {/* <Route path="*" component={NotFound} /> */}
      </Switch>
      </CenterContainer>
      </BodyContainer>
    </BodyBackground>
  )
}
}

export default BodyApp