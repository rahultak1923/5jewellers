import React from 'react'

const about = () => {
  return (
    <div>
     {/* <header className="header_section innerpage_header">
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg custom_nav-container">
        <a className="navbar-brand" href="index.html">
          <span>
            Healet
          </span>
        </a>
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
  </header> */}
  {/* about section */}
  <section className="about_section layout_padding-t">
    <div className="container">
      <div className="row align-items-start">
        <div className="col-md-6">
          <div className="img-box">
            <img src="assets/images/about.png" alt=""/>
          </div>
        </div>
        <div className="col-md-6">
          <div className="detail-box padding-top-2">
            <div className="heading_container">
              <h2>
                About Us -  5 jeweller's
              </h2>
              
            </div>
            <p className='mt-3'>
            This project is a SaaS application in which jewelry shop owners can showcase their products on a website. Through the website, they can upload their products using a form in the admin panel. After filling in the product details via the admin panel, the product will be displayed on their website. Additionally, there is a contact page for users with a contact button and a WhatsApp button. Clicking on these buttons will allow users to either make a call or send a WhatsApp message to the shop owner.
            </p>
            <p>
            The shop owner can edit their jewelry listings, change prices, or mark jewelry items as out of stock.
            </p>
            <a href="/allproduct" className='text-decorastion'>
              View Product
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* info section */}
  <section className="info_section layout_padding2">
    <div className="container">
      <div className="row info_form_social_row">
        <div className="col-md-8 col-lg-9">
          <div className="info_form">
            <form action="">
              <input type="email" placeholder="Enter your email"/>
              <button>
                <i className="fa fa-arrow-right" aria-hidden="true"></i>
              </button>
            </form>
          </div>
        </div>
        <div className="col-md-4 col-lg-3">

          <div className="social_box">
            <a href="">
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </a>
            <a href="">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
            <a href="">
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="row info_main_row">
        <div className="col-md-6 col-lg-3">
          <div className="info_links">
            <h4>
              Menu
            </h4>
            <div className="info_links_menu">
              <a href="index.html">Home</a>
              <a href="about.html">About</a>
              <a href="shop.html">Shop</a>
              <a href="blog.html">Blog</a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="info_insta">
            <h4>
              Instagram
            </h4>
            <div className="insta_box">
              <div className="img-box">
                <img src="assets/assets/images/p1.png" alt=""/>
              </div>
              <p>
                long established fact that a reader
              </p>
            </div>
            <div className="insta_box">
              <div className="img-box">
                <img src="assets/assets/images/p2.png" alt=""/>
              </div>
              <p>
                long established fact that a reader
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="info_detail">
            <h4>
              About Us
            </h4>
            <p className="mb-0">
              when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <h4>
            Contact Us
          </h4>
          <div className="info_contact">
            <a href="">
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              <span>
                Location
              </span>
            </a>
            <a href="">
              <i className="fa fa-phone" aria-hidden="true"></i>
              <span>
                Call +01 1234567890
              </span>
            </a>
            <a href="">
              <i className="fa fa-envelope"></i>
              <span>
                demo@gmail.com
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* footer section */}
  <footer className="footer_section">
    <div className="container">
      <p>
        &copy; <span id="displayYear"></span> All Rights Reserved By
        <a href="https://html.design/">Free Html Templates</a>
      </p>
    </div>
  </footer>
    </div>
  )
}

export default about
