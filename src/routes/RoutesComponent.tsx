import React from 'react';
import {
    Routes as Switch,
    Route, useLocation,
} from "react-router-dom";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import {Routes} from "./Routes";
import styled from 'styled-components';


export const RoutesComponent = () => {
    const location = useLocation();

    return (
        <Container>
            <TransitionGroup component={null}>
                <CSSTransition key={location.key} timeout={300} classNames={"fade"}>
                    <Switch>
                        {Routes.map(
                            (R, index) => <Route key={index} path={R.path} element={<R.component/>}/>
                        )}
                    </Switch>
                </CSSTransition>
            </TransitionGroup>

        </Container>
    );
};

const Container = styled.div`
  position: relative;
  top: 200px;
`

