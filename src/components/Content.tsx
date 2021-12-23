import React, {useState} from 'react';
import {Beer} from "../types";
import {Card} from "./uiComponents/Card";
import {BeerModal} from './BeerModal';
import styled from "styled-components";


interface PropTypes {
    beers: Beer[]
}


export const Content: (props: PropTypes & React.HTMLAttributes<HTMLDivElement>) => JSX.Element = (props) => {
    const [selectedBeer, setSelectedBeer] = useState<Beer | undefined>(undefined);
    const {beers, ...otherProps} = props
    return (
        <Container {...otherProps}>
            <div className="flex flex-wrap justify-around p-4">
                {
                    beers.map((beer, index) => <Card onClick={() => setSelectedBeer(beer)} key={index}
                                                     beer={beer}/>)
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
