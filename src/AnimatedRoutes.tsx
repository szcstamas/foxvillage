import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Homepage from './containers/Homepage';
import ErrorPage from './containers/ErrorPage';
import Events from './containers/Events/Events';
import NightTrip from './containers/Events/NightTrip';
import AnimalShow from './containers/Events/AnimalShow';
import CloseUp from './containers/Events/CloseUp';
import Discover from './containers/Discover/Discover';
import Animals from './containers/Discover/Animals';
import PoultryYard from './containers/Discover/PoultryYard';
import FoxForest from './containers/Discover/FoxForest';
import Prices from './containers/Prices';
import About from './containers/About';
import Contact from './containers/Contact';

const AnimatedRoutes = () => {

    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location}>
                <Route path='/home' element={<Homepage />} />
                <Route path='/foxvillage/events' element={<Events />} />
                <Route path='/foxvillage/events/night-trip' element={<NightTrip />} />
                <Route path='/foxvillage/events/animal-show' element={<AnimalShow />} />
                <Route path='/foxvillage/events/close-up' element={<CloseUp />} />
                <Route path='/foxvillage/discover' element={<Discover />} />
                <Route path='/foxvillage/discover/animals' element={<Animals />} />
                <Route path='/foxvillage/discover/poultry-yard' element={<PoultryYard />} />
                <Route path='/foxvillage/discover/fox-forest' element={<FoxForest />} />
                <Route path='/foxvillage/prices' element={<Prices />} />
                <Route path='/foxvillage/about' element={<About />} />
                <Route path='/foxvillage/contact' element={<Contact />} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes