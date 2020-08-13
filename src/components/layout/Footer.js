import React from "react";

const Footer = () =>{
    return (
        <div class="footer-top-area">
            <div class="zigzag-bottom"></div>
            <div class="container">
                <div class="row">
                    <div class="col-md-4 col-sm-6">
                        <div class="footer-about-us">
                            <div class="footer_logo">
                                <a class="navbar-brand" href="#"><img src={process.env.PUBLIC_URL + '/images/logo.png'} /></a>
                            </div>
                            <p class="p-3 align-items-start">Great Love For Humanity</p>
                            <div class="footer-social">
                                <a href="#" target="_blank"><i class="fa fa-facebook"></i></a>
                                <a href="#" target="_blank"><i class="fa fa-twitter"></i></a>
                                <a href="#" target="_blank"><i class="fa fa-instagram"></i></a>
                                <a href="#" target="_blank"><i class="fa fa-linkedin"></i></a>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4 col-sm-6">
                        <div class="footer-menu">
                            <h2 class="footer-wid-title">User Navigation </h2>
                            <ul>
                                <li><a href="#topheader" target="_blank">Home</a></li>
                                <li><a href="about.html" target="_blank">About Us</a></li>
                                <li><a href="services.html" target="_blank">Services</a></li>
                                <li><a href="gallery.html" target="_blank">Gallery</a></li>
                                <li><a href="contact.html" target="_blank">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>


                    <div class="col-md-4 col-sm-6">
                        <div class="footer-newsletter">
                            <h2 class="footer-wid-title">Newsletter</h2>
                            <p>Sign up to our newsletter and get exclusive deals you wont find anywhere else straight to your inbox!</p>
                            <div class="newsletter-form">
                                <form action="#">
                                    <input type="email" placeholder="Type your email"></input>
                                    <input type="submit" value="Subscribe" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
 

    
   
    
    );
};

export default Footer;