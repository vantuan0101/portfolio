import { useEffect, useLayoutEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Loader from './components/Loader/Loader';
import Home from './features/Home/Home';
import ProductDetails from './features/ProductDetails/Home/ProductDetails';
import DropdownNav from './features/ProductDetails/works/DropdownNav/DropdownNav';
import HabusShop from './features/ProductDetails/works/HabusShop/HabusShop';
import HuddleLanding from './features/ProductDetails/works/HuddleLanding/HuddleLanding';
import FilterJob from './features/ProductDetails/works/JobListing/JobListing';
import SpaceTourism from './features/ProductDetails/works/SpaceTourism/SpaceTourism';
import LayoutProduct from './Layout/LayoutProduct';
import MainLayout from './Layout/MainLayout';
import AnimatedCursor from 'react-animated-cursor';
function App() {
    window.scrollTo(0, 0);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const time = setTimeout(() => {
            setLoading(false);
        }, 5000);
        return () => {
            clearTimeout(time);
        };
    }, []);

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <AnimatedCursor
                        innerSize={20}
                        outerSize={0}
                        color="255,255,255"
                        outerAlpha={0.2}
                        innerScale={4}
                        innerStyle={{
                            mixBlendMode: 'difference',
                        }}
                    />

                    <Routes>
                        <Route path="/" element={<MainLayout />}>
                            <Route index element={<Home />} />
                            <Route path="project" element={<LayoutProduct />}>
                                <Route path="habus-shop" element={<ProductDetails index={1} />}>
                                    <Route index element={<HabusShop />} />
                                </Route>
                                <Route path="job-listing" element={<ProductDetails index={2} />}>
                                    <Route index element={<FilterJob />} />
                                </Route>
                                <Route path="space-tourism" element={<ProductDetails index={3} />}>
                                    <Route index element={<SpaceTourism />} />
                                </Route>
                                <Route path="huddle-landing-page" element={<ProductDetails index={4} />}>
                                    <Route index element={<HuddleLanding />} />
                                </Route>
                                <Route path="dropdown-navigation" element={<ProductDetails index={5} />}>
                                    <Route index element={<DropdownNav />} />
                                </Route>
                            </Route>
                        </Route>
                    </Routes>
                </>
            )}
        </>
    );
}

export default App;
