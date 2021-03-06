import React, {useEffect, useState} from 'react';
import {SubNav} from "../../components/uiComponents/SubNav";
import {Content} from "../../components/Content";
import {useQuery} from "react-query";
import {getBeers} from "../../api/beer";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import {Beer} from '../../types';
import styled from 'styled-components';
import FadeLoader from 'react-spinners/FadeLoader';
import {useSwipeable} from "react-swipeable";

const subNavs = ['all', 'pizza', 'steak']

export const Beers = () => {
    const [activeSubNav, setActiveSubNav] = useState<number>(0);
    const [page, setPage] = useState(1);
    const [allDataLoaded, setAllDataLoaded] = useState<boolean>(false)
    const [rows, setRows] = useState<Beer[]>([]);

    const [onScrollEnd, setOnScrollEnd] = useInfiniteScroll(
        {
            callback: () => {
                if (!allDataLoaded) {
                    setOnScrollEnd(true);
                    setTimeout(() => setPage((prev) => prev + 1), 1000)
                }
            }, offset: 200
        }
    );
    const {
        isLoading,
        isError,
        isSuccess
    } = useQuery<Beer[]>(['beers', subNavs[activeSubNav], page], getBeers
        , {
            onSuccess: (data) => {
                if (data.length === 0) {
                    setAllDataLoaded(true)
                }
                setRows((prev) => [...prev, ...data])
                setOnScrollEnd(false)
            }
        })


    useEffect(() => {
        return () => {
            setRows([])
            setPage(1)
            setAllDataLoaded(false)
        };
    }, [activeSubNav]);

    const handlers = useSwipeable({
        onSwipedLeft: () => {
            let leftSubNav = activeSubNav + 1
            if (leftSubNav < subNavs.length) {
                setActiveSubNav(leftSubNav)
            }
        },
        onSwipedRight: () => {
            let rightSubNav = activeSubNav - 1
            if (rightSubNav >= 0) {
                setActiveSubNav(rightSubNav)
            }
        }
    });
    return (
        <div {...handlers}>
            <SubNav subNavs={subNavs} activeSubNav={activeSubNav}
                    onTabChanged={(active) => setActiveSubNav(active)}/>
            {isLoading && 'Loading...'}
            {isError && 'Error Fetching Data'}
            {isSuccess && <Content beers={rows}/>}
            {<SpinnerContainer scroll={onScrollEnd}><FadeLoader color={"#e74c3c"} loading={onScrollEnd} css={Spinner}/></SpinnerContainer>}
        </div>
    );
};

const SpinnerContainer = styled.div<{ scroll?: boolean }>`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: ${props => (props.scroll ? "100px" : "0")};
`

const Spinner = `
  display: block;
  margin: 0 auto;
  border-color: red;
`
