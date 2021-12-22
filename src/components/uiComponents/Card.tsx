import React from 'react';
import {Beer} from "../../types";
import styled from "styled-components";

interface PropTypes {
    beer: Beer
}

export const Card: (props: PropTypes & React.HTMLAttributes<HTMLDivElement>) => JSX.Element = (props) => {
    const {beer, ...containerProps} = props
    return (
        <CardContainer className="card cursor-pointer" {...containerProps}>
            <img className="border-solid border-2 rounded p-1" src={beer.image_url}/>
            <p className="text-center">{beer.name}</p>
            <p className="text-center">{beer.abv}</p>
        </CardContainer>
    );
};

const CardContainer = styled.div`
  width: 120px;
  height: 200px;
  margin-bottom: 20px;

  & img {
    width: 100%;
    height: 70%;
    object-fit: contain
  }
`;