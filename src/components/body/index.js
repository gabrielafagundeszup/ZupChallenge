import React from 'react'
import { Route, Switch } from "react-router-dom";
import { BodyContainer, BodyBackground, CurvesBackground, VideoTag } from './styled'
import Home from '../../containers/Home'
import Challenges from '../../containers/Challenges'
import Players from '../../containers/Players'
import Infos from '../../containers/Infos'
import Background from '../../core/assets/video/Background.mp4'
import AnimatedBackgroundColor from '../../components/AnimatedBackgroundColor'

const BodyApp = (props) => {
  // document.querySelector('video').playbackRate = 1.25;
  return (
    <BodyBackground>
      <VideoTag autoPlay loop muted playbackRate="0.2"> 
        <source src={Background} type='video/mp4' />
      </VideoTag>
      <AnimatedBackgroundColor/>
      {/* <BodyContainer></BodyContainer> */}
      {/* <CurvesBackground></CurvesBackground> */}
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