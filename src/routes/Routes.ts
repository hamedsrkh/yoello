import {Beers} from "./tabs/Beers";
import {Discount} from "./tabs/Discount";
import {Restaurant} from "./tabs/Restaurant";
import {Search} from "./tabs/Search";

export interface Route {
    path: string,
    component: (props?: any) => JSX.Element,
}


export const Routes: Route[] = [
    {
        path: "/beers",
        component: Beers
    },
    {
        path: "/restaurant",
        component: Restaurant
    },
    {
        path: "/discount",
        component: Discount
    },
    {
        path: "/search",
        component: Search
    },
]