import React from 'react'
import { useLocation } from 'react-router-dom'

const Navbar = () => {
    const loaction = useLocation();
    const homepages = loaction.pathname === '/';
    return (
        <div>
            {/* navbar agar home pages pe hai to hi opacity 50 show hogi orther wise nhi  */}
            <header
                className={`header_section innerpage_header ${homepages ? '' : ''}`}
                style={{
                    background: homepages ? 'rgba(22, 14, 11, 0.5)' : 'linear-gradient(to right, #160e0b, #160e0b)',
                    color: '#fff', // Ensure text remains white
                    position: 'fixed'
                }}
            >
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg custom_nav-container">
                        <a className="navbar-brand text-white" href="/">
                            <span>
                                5 Jeweller's
                            </span>
                        </a>
                        <div id="myNav" className="heading_container pt-2 ml-5 font-size-13">
                                    <div className="">
                                        <a href="/" className='text-white mx-3 '>Home</a>
                                        <a href="/about" className='text-white mx-3 '>About</a>
                                        <a href="/allproduct" className='text-white mx-3 '>Jewellery</a>
                                        <a href="/" className='text-white mx-3 '>Contact</a>
                                    </div>
                                </div>
                        <div className="" id="">

                            <div className="custom_menu-btn">
                                <button onclick="openNav()">
                                    <span className="s-1"> </span>
                                    <span className="s-2"> </span>
                                    <span className="s-3"> </span>
                                </button>
                                <div id="myNav" className="overlay">
                                    <div className="overlay-content">
                                        <a href="index.html">Home</a>
                                        <a href="about.html">About</a>
                                        <a href="shop.html">Shop</a>
                                        <a href="blog.html">Blog</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Navbar
