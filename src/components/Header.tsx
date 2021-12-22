import React from 'react';
import styled from "styled-components";
import {NavBar} from "./NavBar";


export const Header = () => {
    return (
        <Container>
            <span className="text-2xl font-bold text-center">Demo App</span>
            <NavBar />
        </Container>
    );
};

const Container = styled.div`
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #e74c3c;
  height: 200px;
  width: 100%;
  padding-top: 20px;
  position: fixed;
`