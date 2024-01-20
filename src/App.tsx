import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import CologneSection from "./components/cologne-section/CologneSection";
import CologneSectionProvider from "./store/cologne-section-context";

export default function App() {
    return (
        <CologneSectionProvider>
            <main>
                <Header/>
                <CologneSection/>
            </main>
        </CologneSectionProvider>
    );
}
