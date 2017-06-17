import React from 'react';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';

export default function Template ({children}) {
    return (
        <div>
            <NavBar />
            
            {children}
            <Footer/>
        </div>
    )
}