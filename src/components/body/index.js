import React from 'react'
import { Route, Switch } from "react-router-dom";
import {BodyContainer,BodyBackground,CurvesBackground} from './styled'
import Home from '../../containers/Home'
import Challenges from '../../containers/Challenges'
import Players from '../../containers/Players'
import Infos from '../../containers/Infos'

const BodyApp =(props) =>{
    return(
    <BodyBackground>
            <BodyContainer></BodyContainer> 
            <CurvesBackground></CurvesBackground>
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