import React, { useState, useEffect,useRef,useCallback } from 'react'
import { Route, Switch } from "react-router-dom";
import Api from "../../services/Api";
import { BodyBackground, BodyContainer, CenterContainer } from './styled'
import Home from '../../containers/Home'
import Challenges from '../../containers/Challenges'
import Players from '../../containers/Players'
import Infos from '../../containers/Infos'
import Particles from 'react-particles-js';
import ActualChallenge from '../../containers/ActualChallenge'
import Login from '../../containers/Login'
import SignUp from '../../containers/SignUp'

function BodyApp(props) {

  const [players, setPlayers] = useState();
  const [challenges, setChallenges] = useState();
  const {auth, setAuth} = props;

  const getUsers = async () => {
    await Api.getUsers().then(res => {
      setPlayers(res.data);
    })
  }
  const getChallenges = async () => {
    await Api.getChallenges().then(res => {
      setChallenges(res.data);
    })
  }

  useEffect(() => {
    getUsers();
    getChallenges();
  },[]);

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
              component={() => <Home users={players} challenges={challenges} auth={auth} />}
            />
            <Route
              path="/players"
              component={() => <Players users={players} setPlayers={setPlayers} />}
            />
            <Route
              path="/challenges"
              component={() => <Challenges challenges={challenges} />}
            />
            <Route path="/challenge/now/:id"
              component={(props) => <ActualChallenge challenges={challenges} />}
            />
            <Route
              path="/infos"
              component={() => <Infos />}
            />
            <Route
              path="/login"
              component={() => <Login auth={auth} setAuth={setAuth}/>}
            />
            <Route
              path="/signup"
              component={() => <SignUp auth={auth} setAuth={setAuth}/>}
            />

            {/* <Route path="*" component={NotFound} /> */}
          </Switch>
        </CenterContainer>
      </BodyContainer>
    </BodyBackground>
  )
}

export default BodyApp