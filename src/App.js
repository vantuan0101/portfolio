import { useEffect, useState } from 'react';
import AnimatedCursor from 'react-animated-cursor';
import './App.css';
import Loader from './components/Loader/Loader';
import Router from './routes/routes';
import { useTranslation, Trans } from 'react-i18next';
import { useSelector } from 'react-redux';

function App() {
    window.scrollTo(0, 0);
    const { t, i18n } = useTranslation();

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const time = setTimeout(() => {
            setLoading(false);
        }, 5000);
        return () => {
            clearTimeout(time);
        };
    }, []);
    const lng = useSelector((state) => state.langHeader.lang)
    useEffect(() => {
        i18n.changeLanguage(lng);
    }, [lng]);
    
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

     
    );
}

export default App;
