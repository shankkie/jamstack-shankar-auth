import React from 'react';
import { Link } from 'gatsby';

// must to include in context to the roow with app URL
import { IdentityContextProvider} from 'react-netlify-identity-widget'

import './layout.css';

const Layout = ( {children}) => (
    <IdentityContextProvider url="https://jamstack-shankar-work-auth.netlify.app"> 
    <header>
        <Link to="/">Jamstack App</Link>
    </header>
    <main>
        {children}
    </main>
    </IdentityContextProvider>
)

export default Layout;