import React from 'react';
import styled from "styled-components";
import {Beer} from "../../types";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {useAppDispatch} from "../../store/hooks";
import {decrementProductCount, incrementProductCount, removeFromCart} from "../../store/cart";

export interface PropTypes {
    item : {
        beer: Beer,
        count: number
    }
}

export const CartItem : (props: PropTypes) => JSX.Element = (props) => {
    const {beer,count} = props.item
    const dispatch = useAppDispatch();
    return (
        <Item>
            <div className="item-image">
                <img src={beer.image_url} alt=""/>
            </div>
            <div className="item-details">
                <div className="flex justify-between items-center">
                    <span className="text-white text-lg">{beer.name}</span>
                    <div className="flex justify-between items-center">
                        <div>
                            <span className="text-white border rounded-l-lg px-2 text-lg" onClick={()=>dispatch(decrementProductCount(beer))}>-</span>
                            <span className="mx-2 text-white text-lg">{(count).toLocaleString(undefined, {minimumIntegerDigits: 2})}</span>
                            <span className="border rounded-r-lg px-2 bg-amber-400 text-black text-lg" onClick={()=>dispatch(incrementProductCount(beer))}>+</span>
                        </div>
                        <span className="ml-2" onClick={()=>dispatch(removeFromCart(beer))}><FontAwesomeIcon size="sm" color='white' icon={faTrash}/></span>
                    </div>
                </div>
                <div>Additional information here</div>
            </div>
        </Item>
    );
};


const Item = styled.div`
  display: flex;
  margin-bottom: 10px;
  padding: 10px 1px;
  & .item-image{
    background-color: #33343C;
    flex-basis: 10%;
    border-radius: 15px;
    margin-right: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & .item-image img{
    width: 50px;
    height: 50px;
    object-fit: contain;
    transform: scale(1.3);
  }
  & .item-details{
    flex-basis: 90%
  }
`
