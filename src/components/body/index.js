import React from 'react'
import { Route, Switch } from "react-router-dom";
import { BodyBackground } from './styled'
import Home from '../../containers/Home'
import Challenges from '../../containers/Challenges'
import Players from '../../containers/Players'
import Infos from '../../containers/Infos'
import Particles from 'react-particles-js';

const BodyApp = (props) => {
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
      <Switch>
        <Route
          exact
          path="/"
          component={() => <Home />}
        />
        <Route
          path="/players"
          component={() => <Players />}
        />
        <Route
          path="/challenges"
          component={() => <Challenges />}
        />
        <Route
          path="/infos"
          component={() => <Infos />}
        />
        {/* <Route path="*" component={NotFound} /> */}
      </Switch>
    </BodyBackground>
  )
}

export default BodyApp