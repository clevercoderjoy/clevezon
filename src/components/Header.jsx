import React from 'react'

function Header() {
    return (
        <>
            <header className="header">
                <div className="logo">
                    <h1>clevezon</h1>
                </div>
                <div className="search">
                    <input type="text" placeholder="Search..." />
                </div>
                <div className="navigation">
                    <nav>
                        <ul>
                            <li>Explore</li>
                            <li>sign up/login</li>
                            <li>wishlist</li>
                            <li>cart</li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header