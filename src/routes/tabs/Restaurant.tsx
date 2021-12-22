import React, {useState} from 'react';
import {SubNav} from "../../components/uiComponents/SubNav";
import {Center} from "../../components/uiComponents/Center";
const subNavs = ['All Food']
export const Restaurant = () => {
    const [activeSubNav, setActiveSubNav] = useState<number>(0);
    return (
        <>
            <SubNav subNavs={subNavs} activeSubNav={activeSubNav}
                    onTabChanged={(active) => setActiveSubNav(active)}/>
            <Center><h2 className="text-2xl">Restaurant</h2></Center>
        </>
    );
};