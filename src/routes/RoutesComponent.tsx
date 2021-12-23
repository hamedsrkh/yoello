import React, {useEffect} from 'react';
import {
    Routes as Switch,
    Route, useLocation, useNavigate,
} from "react-router-dom";
import {Routes} from "./Routes";
import styled from 'styled-components';
import {useSwipeable} from "react-swipeable"

export const RoutesComponent = () => {
    const location = useLocation();
    const navigate = useNavigate()

    useEffect(() => {
        location.pathname === "/" && navigate("/beers")
    }, []);

    return (
        <Container>
            <Switch>
                {Routes.map(
                    (R, index) => <Route key={index} path={R.path} element={<R.component/>}/>
                )}
            </Switch>
        </Container>
    )
        ;
};

const Container = styled.div`
  position: relative;
  top: 200px;
`

