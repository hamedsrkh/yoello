import React, {useEffect, useLayoutEffect} from 'react';
import {Modal} from "./uiComponents/Modal";
import {Beer} from "../types";
import styled from "styled-components";

export interface PropTypes {
    selected: Beer | undefined,
    onClose: () => void,
}

export const BeerModal: (props: PropTypes) => JSX.Element = ({selected, onClose}) => {

    return (
        <>
            {
                selected &&
                <Modal onClose={onClose} show={true}>
                    <>
                        <img className="object-contain bg-white rounded float-right w-28 h-28 p-2" src={selected.image_url}/>
                        <div className="w-6/12">
                            <p className="text-2xl text-white">{selected.name}</p>
                            <br/>
                            <p>{selected.tagline}</p>
                            <p>{selected.abv}</p>
                            <p>{selected.description}</p>
                            <p>{selected.food_pairing}</p>
                        </div>
                        <Button>Add to Cart</Button>
                    </>
                </Modal>
            }
        </>
    );
};

const Button = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: white;
  color: black;
  padding: 10px 20px;
  border-radius: 20px;
`;