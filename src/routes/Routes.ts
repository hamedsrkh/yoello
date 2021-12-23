import {Beers} from "./tabs/Beers";
import {Discount} from "./tabs/Discount";
import {Restaurant} from "./tabs/Restaurant";
import {Search} from "./tabs/Search";

export interface Route {
    index: number
    name: string
    path: string,
    component: (props?: any) => JSX.Element,
}


export const Routes: Route[] = [
    {
        index: 0,
        name: "beers",
        path: "/beers",
        component: Beers
    },
    {
        index: 1,
        name: "restaurant",
        path: "/restaurant",
        component: Restaurant
    },
    {
        index: 2,
        name: "discount",
        path: "/discount",
        component: Discount
    },
    {
        index: 3,
        name: "search",
        path: "/search",
        component: Search
    },
]