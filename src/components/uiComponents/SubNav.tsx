import React, {useState} from 'react';
import styled from "styled-components";
import {useAppSelector} from "../../store/hooks";

export interface PropTypes {
    subNavs: string[],
    activeSubNav: number,
    onTabChanged: (activeSubNav: number) => void
}

export const SubNav: (props: PropTypes) => JSX.Element = (props) => {
    return (
        <Container>
            {props.subNavs.map((cat, index) =>
                <p
                    className={`text-xl font-bold text-center sub-categories cursor-pointer ${props.activeSubNav === index ? 'active' : ''}`}
                    onClick={() => props.onTabChanged(index)}
                    key={index}>
                    {cat.toUpperCase()}
                </p>)
            }
        </Container>
    );
};

const Container = styled.div`
  position: fixed;
  height: 60px;
  background-color: #2F2E30;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  & .sub-categories {
    color: #787678;
  }

  & .sub-categories.active {
    color: white;
  }
`;