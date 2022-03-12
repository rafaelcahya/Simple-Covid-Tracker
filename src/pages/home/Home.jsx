import React from 'react';

import Navbar from '../component/navbar/Navbar';
import GlobalComponent from './components/GlobalComponent';
import DailyComponent from './components/DailyComponent';
import CountryComponent from './components/CountryComponent';
import ContinentComponent from './components/ContinentComponent';
import Sidebar from '../component/sidebar/Sidebar';

export default function Index() {
    return (
        <>
            <div className='flex h-screen overflow-hidden'>
                <Sidebar/>
                <div className='flex flex-1 flex-col gap-10 px-10 py-10 w-full overflow-y-scroll'>
                    <Navbar/>
                    <GlobalComponent/>
                    <DailyComponent/>
                    <div className='flex justify-between gap-7'>
                        <CountryComponent/>
                        <ContinentComponent/>
                    </div>
                </div>
            </div>
        </>
    )
}
