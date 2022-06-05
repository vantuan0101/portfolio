import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Loader from './components/Loader/Loader';
import Home from './features/Home/Home';
import Intro from './features/Intro/Intro';
import ProductDetails from './features/ProductDetails/Home/ProductDetails';
import FilterJob from './features/ProductDetails/works/FilterJob/FilterJob';
import HabusShop from './features/ProductDetails/works/HabusShop/HabusShop';
import ProductList from './features/ProductList/ProductList';
import MainLayout from './Layout/MainLayout';

function App() {
    const [headerNew, setHeaderNew] = useState(false);
    const statusHeader = () => {
        setHeaderNew(!headerNew);
    };
    return (
        <Routes>
            <Route path="/" element={<MainLayout headerNew={headerNew} statusHeader={statusHeader} />}>
                <Route index element={<Home statusHeader={statusHeader} />} />
                <Route path="project">
                    <Route path=":Name" element={<ProductDetails />}>
                        <Route path="habusshop" element={<HabusShop />} />
                        <Route path="filterjob" element={<FilterJob />} />
                    </Route>
                </Route>
            </Route>
        </Routes>
        // <Header statusHeader={statusHeader} headerNew={headerNew}/>
        // <Home />
        // <Intro />
        //<Loader />
        //<ProductList productDetails={productDetails} />
    );
}

export default App;
