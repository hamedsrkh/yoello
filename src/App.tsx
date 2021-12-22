import React from 'react';
import {Header} from "./components/Header";
import {RoutesComponent} from "./routes/RoutesComponent";
import {BrowserRouter} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "react-query";
import {ShoppingCart} from "./components/ShoppingCart";

const queryClient = new QueryClient()

function App() {

    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <Header/>
                <RoutesComponent/>
                <ShoppingCart/>
            </QueryClientProvider>
        </BrowserRouter>
    );
}

export default App;
