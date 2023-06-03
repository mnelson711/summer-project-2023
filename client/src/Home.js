import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./index.css";

export default function Home() {

    return (
        <>
            <header id="header" class="fixed-top">
                <div class="container d-flex align-items-center">
                    <h1 class="logo me-auto"><a href="index.html">Spectrum</a></h1>
                    <nav id="navbar" class="navbar">
                        <ul>
                            <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
                            <li><a class="nav-link" href="#about">Threads</a></li>
                            <li><a class="nav-link" href="#team">Guidelines</a></li>
                            <li><a class="nav-link" href="#contact">Profile</a></li>
                            <li><a class="nav-link" href="#contact">Contact</a></li>
                            <li class="dropdown">
                                <a href="#"><span>Start Chatting</span> <i class="bi bi-chevron-down"></i></a>
                                <ul>
                                    <li><a href="#">Login</a></li>
                                    <li><a href="#">Sign Up</a></li>
                                </ul>
                            </li>
                        </ul>
                        <i class="bi bi-list mobile-nav-toggle"></i>
                    </nav>
                </div>
            </header>

            <section id="hero" class="d-flex align-items-center">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
                            data-aos="fade-up" data-aos-delay="200">
                            <h1>Empowering Inclusive Conversations</h1>
                            <h2>
                                Designed to facilitate inclusive and accessible communication for individuals on the spectrum.
                            </h2>
                            <div class="d-flex justify-content-center justify-content-lg-start">
                                <a href="#about" class="btn-get-started scrollto">Get Started</a>
                                <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" class="glightbox btn-watch-video"><i
                                    class="bi bi-play-circle"></i><span>Watch Video</span></a>
                            </div>
                        </div>
                        <div class="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
                            <header id="header" class="fixed-top">
                                <div class="container d-flex align-items-center">
                                    <h1 class="logo me-auto"><a href="index.html">Spectrum</a></h1>
                                    <nav id="navbar" class="navbar">
                                        <ul>
                                            <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
                                            <li><a class="nav-link scrollto" href="#about">About</a></li>
                                            <li><a class="nav-link scrollto" href="#team">Team</a></li>
                                            <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
                                            <li class="dropdown">
                                                <a href="#"><span>Start Chatting</span> <i class="bi bi-chevron-down"></i></a>
                                                <ul>
                                                    <li><a href="#">Login</a></li>
                                                    <li><a href="#">Sign Up</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                        <i class="bi bi-list mobile-nav-toggle"></i>
                                    </nav>
                                </div>
                            </header>

                            {/*======= Hero Section =======*/}
                            <section id="hero" class="d-flex align-items-center">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
                                            data-aos="fade-up" data-aos-delay="200">
                                            <h1>Empowering Inclusive Conversations</h1>
                                            <h2>
                                                Designed to facilitate inclusive and accessible communication for individuals on the spectrum.
                                            </h2>
                                            <div class="d-flex justify-content-center justify-content-lg-start">
                                                <a href="#about" class="btn-get-started scrollto">Get Started</a>
                                                <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" class="glightbox btn-watch-video"><i
                                                    class="bi bi-play-circle"></i><span>Watch Video</span></a>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
                                            {/*<img src="assets/img/hero-img.png" class="img-fluid animated" alt="" />*/}
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <main id="main">

                                {/*======= About Us Section =======*/}
                                <section id="about" class="about">
                                    <div class="container" data-aos="fade-up">
                                        <div class="section-title">
                                            <h2>About Us</h2>
                                        </div>

                                        <div class="row content">
                                            <div class="col-lg-6">
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                </p>
                                                <ul>
                                                    <li>
                                                        <i class="ri-check-double-line"></i> Ullamco laboris nisi ut
                                                        aliquip ex ea commodo consequat
                                                    </li>
                                                    <li>
                                                        <i class="ri-check-double-line"></i> Duis aute irure dolor in
                                                        reprehenderit in voluptate velit
                                                    </li>
                                                    <li>
                                                        <i class="ri-check-double-line"></i> Ullamco laboris nisi ut
                                                        aliquip ex ea commodo consequat
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="col-lg-6 pt-4 pt-lg-0">
                                                <p>
                                                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                                                    aute irure dolor in reprehenderit in voluptate velit esse cillum
                                                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                                    cupidatat non proident, sunt in culpa qui officia deserunt
                                                    mollit anim id est laborum.
                                                </p>
                                                <a href="#" class="btn-learn-more">Learn More</a>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                {/*End About Us Section*/}

                                {/*======= Cta Section =======*/}
                                <section id="cta" class="cta">
                                    <div class="container" data-aos="zoom-in">
                                        <div class="row">
                                            <div class="col-lg-9 text-center text-lg-start">
                                                <h3>Call To Action</h3>
                                                <p>
                                                    Duis aute irure dolor in reprehenderit in voluptate velit esse
                                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                                    cupidatat non proident, sunt in culpa qui officia deserunt
                                                    mollit anim id est laborum.
                                                </p>
                                            </div>
                                            <div class="col-lg-3 cta-btn-container text-center">
                                                <a class="cta-btn align-middle" href="#">Call To Action</a>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                {/*End Cta Section*/}

                                {/*======= Team Section =======*/}
                                <section id="team" class="team section-bg">
                                    <div class="container" data-aos="fade-up">
                                        <div class="section-title">
                                            <h2>Team</h2>
                                            <p>
                                                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                                                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                                                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                                                Quia fugiat sit in iste officiis commodi quidem hic quas.
                                            </p>
                                        </div>

                                        <div class="row">
                                            <div class="col-lg-6" data-aos="zoom-in" data-aos-delay="100">
                                                <div class="member d-flex align-items-start">
                                                    <div class="pic">
                                                        {/*<img src="assets/img/team/team-1.jpg" class="img-fluid" alt="" />*/}
                                                    </div>
                                                    <div class="member-info">
                                                        <h4>Walter White</h4>
                                                        <span>Chief Executive Officer</span>
                                                        <p>
                                                            Explicabo voluptatem mollitia et repellat qui dolorum quasi
                                                        </p>
                                                        <div class="social">
                                                            <a href=""><i class="ri-twitter-fill"></i></a>
                                                            <a href=""><i class="ri-facebook-fill"></i></a>
                                                            <a href=""><i class="ri-instagram-fill"></i></a>
                                                            <a href=""> <i class="ri-linkedin-box-fill"></i> </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-lg-6 mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="200">
                                                <div class="member d-flex align-items-start">
                                                    <div class="pic">
                                                        {/*<img src="assets/img/team/team-2.jpg" class="img-fluid" alt="" />*/}
                                                    </div>
                                                    <div class="member-info">
                                                        <h4>Eat my Ass</h4>
                                                        <span>Product Manager</span>
                                                        <p>
                                                            Aut maiores voluptates amet et quis praesentium qui senda
                                                            para
                                                        </p>
                                                        <div class="social">
                                                            <a href=""><i class="ri-twitter-fill"></i></a>
                                                            <a href=""><i class="ri-facebook-fill"></i></a>
                                                            <a href=""><i class="ri-instagram-fill"></i></a>
                                                            <a href=""> <i class="ri-linkedin-box-fill"></i> </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-lg-6 mt-4" data-aos="zoom-in" data-aos-delay="300">
                                                <div class="member d-flex align-items-start">
                                                    <div class="pic">
                                                        {/*<img src="assets/img/team/team-3.jpg" class="img-fluid" alt="" />*/}
                                                    </div>
                                                    <div class="member-info">
                                                        <h4>Your Mom</h4>
                                                        <span>CTO</span>
                                                        <p>
                                                            Quisquam facilis cum velit laborum corrupti fuga rerum quia
                                                        </p>
                                                        <div class="social">
                                                            <a href=""><i class="ri-twitter-fill"></i></a>
                                                            <a href=""><i class="ri-facebook-fill"></i></a>
                                                            <a href=""><i class="ri-instagram-fill"></i></a>
                                                            <a href=""> <i class="ri-linkedin-box-fill"></i> </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                {/*End Team Section*/}

                                {/*======= Frequently Asked Questions Section =======*/}
                                <section id="faq" class="faq section-bg">
                                    <div class="container" data-aos="fade-up">
                                        <div class="section-title">
                                            <h2>Frequently Asked Questions</h2>
                                            <p>
                                                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                                                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                                                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                                                Quia fugiat sit in iste officiis commodi quidem hic quas.
                                            </p>
                                        </div>

                                        <div class="faq-list">
                                            <ul>
                                                <li data-aos="fade-up" data-aos-delay="100">
                                                    <i class="bx bx-help-circle icon-help"></i>
                                                    <a data-bs-toggle="collapse" class="collapse" data-bs-target="#faq-list-1">Non consectetur a erat nam at
                                                        lectus urna duis?
                                                        <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                                                    <div id="faq-list-1" class="collapse show" data-bs-parent=".faq-list">
                                                        <p>
                                                            Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id
                                                            volutpat lacus laoreet non curabitur gravida. Venenatis
                                                            lectus magna fringilla urna porttitor rhoncus dolor purus
                                                            non.
                                                        </p>
                                                    </div>
                                                </li>

                                                <li data-aos="fade-up" data-aos-delay="200">
                                                    <i class="bx bx-help-circle icon-help"></i>
                                                    <a data-bs-toggle="collapse" data-bs-target="#faq-list-2" class="collapsed">Feugiat scelerisque varius
                                                        morbi enim nunc?
                                                        <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                                                    <div id="faq-list-2" class="collapse" data-bs-parent=".faq-list">
                                                        <p>
                                                            Dolor sit amet consectetur adipiscing elit pellentesque
                                                            habitant morbi. Id interdum velit laoreet id donec ultrices.
                                                            Fringilla phasellus faucibus scelerisque eleifend donec
                                                            pretium. Est pellentesque elit ullamcorper dignissim. Mauris
                                                            ultrices eros in cursus turpis massa tincidunt dui.
                                                        </p>
                                                    </div>
                                                </li>

                                                <li data-aos="fade-up" data-aos-delay="300">
                                                    <i class="bx bx-help-circle icon-help"></i>
                                                    <a data-bs-toggle="collapse" data-bs-target="#faq-list-3" class="collapsed">Dolor sit amet consectetur
                                                        adipiscing elit?
                                                        <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                                                    <div id="faq-list-3" class="collapse" data-bs-parent=".faq-list">
                                                        <p>
                                                            Eleifend mi in nulla posuere sollicitudin aliquam ultrices
                                                            sagittis orci. Faucibus pulvinar elementum integer enim. Sem
                                                            nulla pharetra diam sit amet nisl suscipit. Rutrum tellus
                                                            pellentesque eu tincidunt. Lectus urna duis convallis
                                                            convallis tellus. Urna molestie at elementum eu facilisis
                                                            sed odio morbi quis
                                                        </p>
                                                    </div>
                                                </li>

                                                <li data-aos="fade-up" data-aos-delay="400">
                                                    <i class="bx bx-help-circle icon-help"></i>
                                                    <a data-bs-toggle="collapse" data-bs-target="#faq-list-4" class="collapsed">Tempus quam pellentesque nec
                                                        nam aliquam sem et tortor
                                                        consequat? <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                                                    <div id="faq-list-4" class="collapse" data-bs-parent=".faq-list">
                                                        <p>
                                                            Molestie a iaculis at erat pellentesque adipiscing commodo.
                                                            Dignissim suspendisse in est ante in. Nunc vel risus commodo
                                                            viverra maecenas accumsan. Sit amet nisl suscipit adipiscing
                                                            bibendum est. Purus gravida quis blandit turpis cursus in.
                                                        </p>
                                                    </div>
                                                </li>

                                                <li data-aos="fade-up" data-aos-delay="500">
                                                    <i class="bx bx-help-circle icon-help"></i>
                                                    <a data-bs-toggle="collapse" data-bs-target="#faq-list-5" class="collapsed">Tortor vitae purus faucibus
                                                        ornare. Varius vel pharetra vel
                                                        turpis nunc eget lorem dolor?
                                                        <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                                                    <div id="faq-list-5" class="collapse" data-bs-parent=".faq-list">
                                                        <p>
                                                            Laoreet sit amet cursus sit amet dictum sit amet justo.
                                                            Mauris vitae ultricies leo integer malesuada nunc vel.
                                                            Tincidunt eget nullam non nisi est sit amet. Turpis nunc
                                                            eget lorem dolor sed. Ut venenatis tellus in metus vulputate
                                                            eu scelerisque.
                                                        </p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </section>
                                {/*End Frequently Asked Questions Section*/}

                                {/*======= Contact Section =======*/}
                                <section id="contact" class="contact">
                                    <div class="container" data-aos="fade-up">
                                        <div class="section-title">
                                            <h2>Contact</h2>
                                            <p>
                                                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                                                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                                                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                                                Quia fugiat sit in iste officiis commodi quidem hic quas.
                                            </p>
                                        </div>

                                        <div class="row">
                                            <div class="col-lg-5 d-flex align-items-stretch">
                                                <div class="info">
                                                    <div class="address">
                                                        <i class="bi bi-geo-alt"></i>
                                                        <h4>Location:</h4>
                                                        <p>A108 Adam Street, New York, NY 535022</p>
                                                    </div>

                                                    <div class="email">
                                                        <i class="bi bi-envelope"></i>
                                                        <h4>Email:</h4>
                                                        <p>SpectrumChat@example.com</p>
                                                    </div>

                                                    <div class="phone">
                                                        <i class="bi bi-phone"></i>
                                                        <h4>Call:</h4>
                                                        <p>+1 558 554 5555  </p>
                                                    </div>

                                                    {/* <iframe
                                                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                                                        frameborder="0" style="border: 0; width: 100%; height: 290px" allowfullscreen></iframe> */}
                                                </div>
                                            </div>

                                            <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                                                <form action="forms/contact.php" method="post" role="form" class="php-email-form">
                                                    <div class="row">
                                                        <div class="form-group col-md-6">
                                                            <label for="name">Your Name</label>
                                                            <input type="text" name="name" class="form-control" id="name" required />
                                                        </div>
                                                        <div class="form-group col-md-6">
                                                            <label for="name">Your Email</label>
                                                            <input type="email" class="form-control" name="email" id="email" required />
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="name">Subject</label>
                                                        <input type="text" class="form-control" name="subject" id="subject" required />
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="name">Message</label>
                                                        <textarea class="form-control" name="message" rows="10" required></textarea>
                                                    </div>
                                                    <div class="my-3">
                                                        <div class="loading">Loading</div>
                                                        <div class="error-message"></div>
                                                        <div class="sent-message">
                                                            Your message has been sent. Thank you!
                                                        </div>
                                                    </div>
                                                    <div class="text-center">
                                                        <button type="submit">Send Message</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                {/*End Contact Section*/}
                            </main>
                            {/*End #main*/}

                            {/*======= Footer =======*/}
                            <footer id="footer">
                                <div class="container footer-bottom clearfix">
                                    <div class="copyright">
                                        &copy; Copyright <strong><span>Spectrum</span></strong>. All Rights Reserved
                                    </div>
                                    <div class="credits">
                                        {/*Designed by <a href="https://ryanbarry.tech/">Rybeardawg</a>*/}
                                    </div>
                                </div>
                            </footer>
                            {/*End Footer*/}

                            <div id="preloader"></div>
                            <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i q
                                class="bi bi-arrow-up-short"></i></a>

                            {/*Vendor JS Files*/}
                            <script src="assets/vendor/aos/aos.js"></script>
                            <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
                            <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
                            <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
                            <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
                            <script src="assets/vendor/waypoints/noframework.waypoints.js"></script>
                            <script src="assets/vendor/php-email-form/validate.js"></script>

                            {/*Template Main JS File*/}
                            <script src="assets/js/main.js"></script>
                            <img src="assets/img/hero-img.png" class="img-fluid animated" alt="" />*/}
                        </div>
                    </div>
                </div>
            </section >

            <main id="main">

                {/*======= About Us Section =======*/}
                <section id="about" class="about">
                    <div class="container" data-aos="fade-up">
                        <div class="section-title">
                            <h2>About Us</h2>
                        </div>

                        <div class="row content">
                            <div class="col-lg-6">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                                <ul>
                                    <li>
                                        <i class="ri-check-double-line"></i> Ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat
                                    </li>
                                    <li>
                                        <i class="ri-check-double-line"></i> Duis aute irure dolor in
                                        reprehenderit in voluptate velit
                                    </li>
                                    <li>
                                        <i class="ri-check-double-line"></i> Ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat
                                    </li>
                                </ul>
                            </div>
                            <div class="col-lg-6 pt-4 pt-lg-0">
                                <p>
                                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                                    aute irure dolor in reprehenderit in voluptate velit esse cillum
                                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia deserunt
                                    mollit anim id est laborum.
                                </p>
                                <a href="#" class="btn-learn-more">Learn More</a>
                            </div>
                        </div>
                    </div>
                </section>
                {/*End About Us Section*/}

                {/*======= Cta Section =======*/}
                <section id="cta" class="cta">
                    <div class="container" data-aos="zoom-in">
                        <div class="row">
                            <div class="col-lg-9 text-center text-lg-start">
                                <h3>Call To Action</h3>
                                <p>
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse
                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia deserunt
                                    mollit anim id est laborum.
                                </p>
                            </div>
                            <div class="col-lg-3 cta-btn-container text-center">
                                <a class="cta-btn align-middle" href="#">Call To Action</a>
                            </div>
                        </div>
                    </div>
                </section>
                {/*End Cta Section*/}

                {/*======= Team Section =======*/}
                <section id="team" class="team section-bg">
                    <div class="container" data-aos="fade-up">
                        <div class="section-title">
                            <h2>Team</h2>
                            <p>
                                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                                Quia fugiat sit in iste officiis commodi quidem hic quas.
                            </p>
                        </div>

                        <div class="row">
                            <div class="col-lg-6" data-aos="zoom-in" data-aos-delay="100">
                                <div class="member d-flex align-items-start">
                                    <div class="pic">
                                        {/*<img src="assets/img/team/team-1.jpg" class="img-fluid" alt="" />*/}
                                    </div>
                                    <div class="member-info">
                                        <h4>Walter White</h4>
                                        <span>Chief Executive Officer</span>
                                        <p>
                                            Explicabo voluptatem mollitia et repellat qui dolorum quasi
                                        </p>
                                        <div class="social">
                                            <a href=""><i class="ri-twitter-fill"></i></a>
                                            <a href=""><i class="ri-facebook-fill"></i></a>
                                            <a href=""><i class="ri-instagram-fill"></i></a>
                                            <a href=""> <i class="ri-linkedin-box-fill"></i> </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-6 mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="200">
                                <div class="member d-flex align-items-start">
                                    <div class="pic">
                                        {/*<img src="assets/img/team/team-2.jpg" class="img-fluid" alt="" />*/}
                                    </div>
                                    <div class="member-info">
                                        <h4>Eat my Ass</h4>
                                        <span>Product Manager</span>
                                        <p>
                                            Aut maiores voluptates amet et quis praesentium qui senda
                                            para
                                        </p>
                                        <div class="social">
                                            <a href=""><i class="ri-twitter-fill"></i></a>
                                            <a href=""><i class="ri-facebook-fill"></i></a>
                                            <a href=""><i class="ri-instagram-fill"></i></a>
                                            <a href=""> <i class="ri-linkedin-box-fill"></i> </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-6 mt-4" data-aos="zoom-in" data-aos-delay="300">
                                <div class="member d-flex align-items-start">
                                    <div class="pic">
                                        {/*<img src="assets/img/team/team-3.jpg" class="img-fluid" alt="" />*/}
                                    </div>
                                    <div class="member-info">
                                        <h4>Your Mom</h4>
                                        <span>CTO</span>
                                        <p>
                                            Quisquam facilis cum velit laborum corrupti fuga rerum quia
                                        </p>
                                        <div class="social">
                                            <a href=""><i class="ri-twitter-fill"></i></a>
                                            <a href=""><i class="ri-facebook-fill"></i></a>
                                            <a href=""><i class="ri-instagram-fill"></i></a>
                                            <a href=""> <i class="ri-linkedin-box-fill"></i> </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*End Team Section*/}

                {/*======= Frequently Asked Questions Section =======*/}
                <section id="faq" class="faq section-bg">
                    <div class="container" data-aos="fade-up">
                        <div class="section-title">
                            <h2>Frequently Asked Questions</h2>
                            <p>
                                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                                Quia fugiat sit in iste officiis commodi quidem hic quas.
                            </p>
                        </div>

                        <div class="faq-list">
                            <ul>
                                <li data-aos="fade-up" data-aos-delay="100">
                                    <i class="bx bx-help-circle icon-help"></i>
                                    <a data-bs-toggle="collapse" class="collapse" data-bs-target="#faq-list-1">Non consectetur a erat nam at
                                        lectus urna duis?
                                        <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                                    <div id="faq-list-1" class="collapse show" data-bs-parent=".faq-list">
                                        <p>
                                            Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id
                                            volutpat lacus laoreet non curabitur gravida. Venenatis
                                            lectus magna fringilla urna porttitor rhoncus dolor purus
                                            non.
                                        </p>
                                    </div>
                                </li>

                                <li data-aos="fade-up" data-aos-delay="200">
                                    <i class="bx bx-help-circle icon-help"></i>
                                    <a data-bs-toggle="collapse" data-bs-target="#faq-list-2" class="collapsed">Feugiat scelerisque varius
                                        morbi enim nunc?
                                        <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                                    <div id="faq-list-2" class="collapse" data-bs-parent=".faq-list">
                                        <p>
                                            Dolor sit amet consectetur adipiscing elit pellentesque
                                            habitant morbi. Id interdum velit laoreet id donec ultrices.
                                            Fringilla phasellus faucibus scelerisque eleifend donec
                                            pretium. Est pellentesque elit ullamcorper dignissim. Mauris
                                            ultrices eros in cursus turpis massa tincidunt dui.
                                        </p>
                                    </div>
                                </li>

                                <li data-aos="fade-up" data-aos-delay="300">
                                    <i class="bx bx-help-circle icon-help"></i>
                                    <a data-bs-toggle="collapse" data-bs-target="#faq-list-3" class="collapsed">Dolor sit amet consectetur
                                        adipiscing elit?
                                        <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                                    <div id="faq-list-3" class="collapse" data-bs-parent=".faq-list">
                                        <p>
                                            Eleifend mi in nulla posuere sollicitudin aliquam ultrices
                                            sagittis orci. Faucibus pulvinar elementum integer enim. Sem
                                            nulla pharetra diam sit amet nisl suscipit. Rutrum tellus
                                            pellentesque eu tincidunt. Lectus urna duis convallis
                                            convallis tellus. Urna molestie at elementum eu facilisis
                                            sed odio morbi quis
                                        </p>
                                    </div>
                                </li>

                                <li data-aos="fade-up" data-aos-delay="400">
                                    <i class="bx bx-help-circle icon-help"></i>
                                    <a data-bs-toggle="collapse" data-bs-target="#faq-list-4" class="collapsed">Tempus quam pellentesque nec
                                        nam aliquam sem et tortor
                                        consequat? <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                                    <div id="faq-list-4" class="collapse" data-bs-parent=".faq-list">
                                        <p>
                                            Molestie a iaculis at erat pellentesque adipiscing commodo.
                                            Dignissim suspendisse in est ante in. Nunc vel risus commodo
                                            viverra maecenas accumsan. Sit amet nisl suscipit adipiscing
                                            bibendum est. Purus gravida quis blandit turpis cursus in.
                                        </p>
                                    </div>
                                </li>

                                <li data-aos="fade-up" data-aos-delay="500">
                                    <i class="bx bx-help-circle icon-help"></i>
                                    <a data-bs-toggle="collapse" data-bs-target="#faq-list-5" class="collapsed">Tortor vitae purus faucibus
                                        ornare. Varius vel pharetra vel
                                        turpis nunc eget lorem dolor?
                                        <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a>
                                    <div id="faq-list-5" class="collapse" data-bs-parent=".faq-list">
                                        <p>
                                            Laoreet sit amet cursus sit amet dictum sit amet justo.
                                            Mauris vitae ultricies leo integer malesuada nunc vel.
                                            Tincidunt eget nullam non nisi est sit amet. Turpis nunc
                                            eget lorem dolor sed. Ut venenatis tellus in metus vulputate
                                            eu scelerisque.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                {/*End Frequently Asked Questions Section*/}

                {/*======= Contact Section =======*/}
                <section id="contact" class="contact">
                    <div class="container" data-aos="fade-up">
                        <div class="section-title">
                            <h2>Contact</h2>
                            <p>
                                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                                Quia fugiat sit in iste officiis commodi quidem hic quas.
                            </p>
                        </div>

                        <div class="row">
                            <div class="col-lg-5 d-flex align-items-stretch">
                                <div class="info">
                                    <div class="address">
                                        <i class="bi bi-geo-alt"></i>
                                        <h4>Location:</h4>
                                        <p>A108 Adam Street, New York, NY 535022</p>
                                    </div>

                                    <div class="email">
                                        <i class="bi bi-envelope"></i>
                                        <h4>Email:</h4>
                                        <p>SpectrumChat@example.com</p>
                                    </div>

                                    <div class="phone">
                                        <i class="bi bi-phone"></i>
                                        <h4>Call:</h4>
                                        <p>+1 558 554 5555  </p>
                                    </div>

                                    {/* <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                                        frameborder="0" style="border: 0; width: 100%; height: 290px" allowfullscreen></iframe> */}
                                </div>
                            </div>

                            <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                                <form action="forms/contact.php" method="post" role="form" class="php-email-form">
                                    <div class="row">
                                        <div class="form-group col-md-6">
                                            <label for="name">Your Name</label>
                                            <input type="text" name="name" class="form-control" id="name" required />
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="name">Your Email</label>
                                            <input type="email" class="form-control" name="email" id="email" required />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="name">Subject</label>
                                        <input type="text" class="form-control" name="subject" id="subject" required />
                                    </div>
                                    <div class="form-group">
                                        <label for="name">Message</label>
                                        <textarea class="form-control" name="message" rows="10" required></textarea>
                                    </div>
                                    <div class="my-3">
                                        <div class="loading">Loading</div>
                                        <div class="error-message"></div>
                                        <div class="sent-message">
                                            Your message has been sent. Thank you!
                                        </div>
                                    </div>
                                    <div class="text-center">
                                        <button type="submit">Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                {/*End Contact Section*/}
            </main>
            {/*End #main*/}

            {/*======= Footer =======*/}
            <footer id="footer">
                <div class="container footer-bottom clearfix">
                    <div class="copyright">
                        &copy; Copyright <strong><span>Spectrum</span></strong>. All Rights Reserved
                    </div>
                    <div class="credits">
                        {/*Designed by <a href="https://ryanbarry.tech/">Rybeardawg</a>*/}
                    </div>
                </div>
            </footer>
            {/*End Footer*/}

            <div id="preloader"></div>
            <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i q
                class="bi bi-arrow-up-short"></i></a>

            {/*Vendor JS Files*/}
            <script src="assets/vendor/aos/aos.js"></script>
            <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
            <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
            <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
            <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
            <script src="assets/vendor/waypoints/noframework.waypoints.js"></script>
            <script src="assets/vendor/php-email-form/validate.js"></script>

            {/*Template Main JS File*/}
            <script src="assets/js/main.js"></script>
        </>
    );
}
