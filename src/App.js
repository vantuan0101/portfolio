import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Loader from './components/Loader/Loader';
import Home from './features/Home/Home';
import Intro from './features/Intro/Intro';
import ProductDetails from './features/ProductDetails/Home/ProductDetails';
import DropdownNav from './features/ProductDetails/works/DropdownNav/DropdownNav';
import FilterJob from './features/ProductDetails/works/JobListing/JobListing';
import HabusShop from './features/ProductDetails/works/HabusShop/HabusShop';
import HuddleLanding from './features/ProductDetails/works/HuddleLanding/HuddleLanding';
import SpaceTourism from './features/ProductDetails/works/SpaceTourism/SpaceTourism';
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
                    <Route path="habus-shop" element={<ProductDetails index={1} />}>
                        <Route index element={<HabusShop />} />
                    </Route>
                    <Route path="job-listing" element={<ProductDetails index={2}/>}>
                        <Route index element={<FilterJob />} />
                    </Route>
                    <Route path="space-tourism" element={<ProductDetails index={3}/>}>
                        <Route index element={<SpaceTourism />} />
                    </Route>
                    <Route path="huddle-landing-page" element={<ProductDetails index={4}/>}>
                        <Route index element={<HuddleLanding />} />
                    </Route>
                    <Route path="dropdown-navigation" element={<ProductDetails index={5}/>}>
                        <Route index element={<DropdownNav />} />
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
