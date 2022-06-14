import React, { lazy, Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import Loading from '../components/Loading/Loading';
import ProductDetails from '../features/ProductDetails/Home/ProductDetails';

const Loadable = (Component, fallback) => {
    //return func- component
    
    return () => (
        <Suspense fallback={fallback ? <Loading /> : <></>}>
            <Component />
        </Suspense>
    );
};

export default function Router() {
    return useRoutes([
        {
            path: '/',
            element: <MainLayout />,
            children: [
                { element: <Home/>, index: true },
                {
                    path: 'project',
                    element: <LayoutProduct />,
                    children: [
                        {
                            path: 'habus-shop',
                            element: <ProductDetails indexProduct={1} />,
                            children: [
                                { element: <HabusShop />, index: true }
                            ],
                        },
                        {
                            path: 'job-listing',
                            element: <ProductDetails indexProduct={2} />,
                            children: [
                                { element: <JobListing />, index: true }
                            ],
                        },
                        {
                            path: 'space-tourism',
                            element: <ProductDetails indexProduct={3} />,
                            children: [
                                { element: <SpaceTourism />, index: true }
                            ],
                        },
                        {
                            path: 'huddle-landing-page',
                            element: <ProductDetails indexProduct={4} />,
                            children: [
                                { element: <HuddleLanding />, index: true }
                            ],
                        },
                        {
                            path: 'dropdown-navigation',
                            element: <ProductDetails indexProduct={5} />,
                            children: [
                                { element: <DropdownNav  />, index: true }
                            ],
                        },
                    ],
                },
                {
                    path :'info',  
                    element : <LayoutInfo />, 
                    children  : [
                        {element : <Info /> , index : true}
                    ]
                }
                // { path: '*', element: <NotFound /> },
            ],
        },
    ]);
}

//main view
const Home = Loadable(
    lazy(() => import('../features/Home/Home')),
    true,
);
const Info = Loadable(
    lazy(() => import('../features/Info/Info')),
    true,
);
//Works
const HabusShop = Loadable(
    lazy(() => import('../features/ProductDetails/works/HabusShop/HabusShop')),
    true,
);
const JobListing = Loadable(
    lazy(() => import('../features/ProductDetails/works/JobListing/JobListing')),
    true,
);
const SpaceTourism = Loadable(
    lazy(() => import('../features/ProductDetails/works/SpaceTourism/SpaceTourism')),
    true,
);
const HuddleLanding = Loadable(
    lazy(() => import('../features/ProductDetails/works/HuddleLanding/HuddleLanding')),
    true,
);
const DropdownNav = Loadable(
    lazy(() => import('../features/ProductDetails/works/DropdownNav/DropdownNav')),
    true,
);


//404page
// const NotFound = Loadable(
//     lazy(() => import('../pages/404Page/404Page')),
//     true,
// );
// layout
const LayoutProduct = Loadable(
    lazy(() => import('../Layout/LayoutProduct')),
    true,
);
const MainLayout = Loadable(
    lazy(() => import('../Layout/MainLayout')),
    true,
);
const LayoutInfo = Loadable(
    lazy(() => import('../Layout/LayoutInfo')),
    true,
);
