import React, {useEffect, useLayoutEffect} from 'react';
import {Modal} from "./uiComponents/Modal";
import {Beer} from "../types";
import styled from "styled-components";
import {useAppDispatch, useAppSelector} from "../store/hooks";
import {addToCart} from "../store/cart";

export interface PropTypes {
    selected: Beer | undefined,
    onClose: () => void,
}

export const BeerModal: (props: PropTypes) => JSX.Element = ({selected, onClose}) => {
    const dispatch = useAppDispatch()
    const cart = useAppSelector(state => state.cart)
    return (
        <>
            {
                selected &&
                <Modal onClose={onClose} show={true}>
                    <>
                        <img className="object-contain bg-white rounded float-right w-28 h-28 p-2"
                             src={selected.image_url}/>
                        <div className="w-6/12">
                            <p className="text-2xl text-white">{selected.name}</p>
                            <br/>
                            <p>{selected.tagline}</p>
                            <p>{selected.abv}</p>
                            <p>{selected.description}</p>
                            <p>{selected.food_pairing}</p>
                        </div>
                        <Button onClick={() => dispatch(addToCart(selected))}>Add to Cart</Button>
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