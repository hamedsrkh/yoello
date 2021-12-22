import React, {useState} from 'react';
import {Beer} from "../types";
import {Card} from "./uiComponents/Card";
import {BeerModal} from './BeerModal';
import styled from "styled-components";


interface PropsTypes {
    beers: Beer[]
}


export const Content: (props: PropsTypes) => JSX.Element = (props) => {
    const [selectedBeer, setSelectedBeer] = useState<Beer | undefined>(undefined);
    return (
        <Container>
            <div className="flex flex-wrap justify-around p-4">
                {
                    props.beers.map((beer) => <Card onClick={() => setSelectedBeer(beer)} key={beer.id} beer={beer}/>)
                }
            </div>
            <BeerModal selected={selectedBeer} onClose={() => {
                setSelectedBeer(undefined)
            }}/>
        </Container>
    );
};

const Container = styled.div`
  overflow-y: scroll;
  padding-top: 60px;
  padding-bottom: 60px;
`
