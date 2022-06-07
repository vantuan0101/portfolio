import { useEffect, useState } from 'react';
import AnimatedCursor from 'react-animated-cursor';
import './App.css';
import Loader from './components/Loader/Loader';
import Router from './routes/routes';
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
                    <Router />
                </>
            )}
        </>

        // <>

        //     {loading ? (
        //         <Loader />
        //     ) : (
        //         <>
        //
        //             <Routes>
        //                 <Route path="/" element={<MainLayout />}>
        //                     <Route index element={<Home />} />
        //                     <Route path="project" element={<LayoutProduct />}>
        //                         <Route path="habus-shop" element={<ProductDetails index={1} />}>
        //                             <Route index element={<HabusShop />} />
        //                         </Route>
        //                         <Route path="job-listing" element={<ProductDetails index={2} />}>
        //                             <Route index element={<JobListing />} />
        //                         </Route>
        //                         <Route path="space-tourism" element={<ProductDetails index={3} />}>
        //                             <Route index element={<SpaceTourism />} />
        //                         </Route>
        //                         <Route path="huddle-landing-page" element={<ProductDetails index={4} />}>
        //                             <Route index element={<HuddleLanding />} />
        //                         </Route>
        //                         <Route path="dropdown-navigation" element={<ProductDetails index={5} />}>
        //                             <Route index element={<DropdownNav />} />
        //                         </Route>
        //                     </Route>
        //                 </Route>
        //             </Routes>
        //         </>
        //     )}
        // </>
    );
}

export default App;
