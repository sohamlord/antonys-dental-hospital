// @ts-nocheck
'use client';

import { useState, useEffect, FormEvent } from 'react';



export default function Home() {
  const [navActive, setNavActive] = useState(false);
  const [headerActive, setHeaderActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBooking, setIsBooking] = useState(false);

  const toggleNav = () => setNavActive(!navActive);
  const closeNav = () => setNavActive(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setHeaderActive(true);
      } else {
        setHeaderActive(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBooking = (e: FormEvent) => {
    e.preventDefault();
    setIsBooking(true);
    setTimeout(() => {
      alert('Thank you! Your appointment request has been received. We will contact you shortly.');
      setIsBooking(false);
      closeModal();
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <>
      <header className={`header ${headerActive ? 'active' : ''}`}>
        <div className="header-top">
          <div className="container">
            <ul className="contact-list">
              <li className="contact-item">
                <ion-icon name="mail-outline"></ion-icon>
                <a href="mailto:contact@antonysdental.com" className="contact-link">contact@antonysdental.com</a>
              </li>
              <li className="contact-item">
                <ion-icon name="call-outline"></ion-icon>
                <a href="tel:+919791413584" className="contact-link">+91 9791413584</a>
              </li>
            </ul>
            <ul className="social-list">
              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-youtube"></ion-icon>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={`header-bottom ${headerActive ? 'active' : ''}`} data-header style={{ height: '90px', paddingBlock: '5px', maxHeight: '90px' }}>
          <div className="container" style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
            <a href="#" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '10px', lineHeight: 0 }}>
              <img src="/assets/images/logo.png" alt="ANTONY'S DENTAL HOSPITAL"
                style={{ height: '75px', width: 'auto', maxHeight: '75px', objectFit: 'contain' }} />
              <span style={{ fontSize: '24px', fontWeight: '800', color: '#162e5c', lineHeight: '1.2' }}>ANTONY'S DENTAL CARE</span>
            </a>

            <nav className={`navbar container ${navActive ? 'active' : ''}`} data-navbar>
              <ul className="navbar-list">
                <li><a href="#home" className="navbar-link" onClick={closeNav}>Home</a></li>
                <li><a href="#service" className="navbar-link" onClick={closeNav}>Services</a></li>
                <li><a href="#about" className="navbar-link" onClick={closeNav}>About Us</a></li>
                <li><a href="#blog" className="navbar-link" onClick={closeNav}>Blog</a></li>
                <li><a href="#" className="navbar-link" onClick={closeNav}>Contact</a></li>
              </ul>
            </nav>

            <button className="btn" data-appointment-btn onClick={openModal}
              style={{ padding: '4px 12px !important', fontSize: '1rem !important', height: 'auto !important', minHeight: 'unset !important', lineHeight: 'normal !important' }}>
              Book appointment
            </button>

            <button className={`nav-toggle-btn ${navActive ? 'active' : ''}`} aria-label="Toggle menu" data-nav-toggler onClick={toggleNav}>
              <ion-icon name="menu-sharp" aria-hidden="true" class="menu-icon"></ion-icon>
              <ion-icon name="close-sharp" aria-hidden="true" class="close-icon"></ion-icon>
            </button>
          </div>
        </div>
      </header>

      <main>
        <article>
          {/* HERO */}
          <section className="section hero" id="home" style={{ backgroundImage: "url('/assets/images/hero-bg.png')" }} aria-label="hero">
            <div className="container">
              <div className="hero-content">
                <p className="section-subtitle animate-fade-in-up">Welcome To ANTONY'S DENTAL HOSPITAL</p>
                <h1 className="h1 hero-title animate-fade-in-up delay-100">We Are Best Dental Service</h1>
                <p className="hero-text animate-fade-in-up delay-200">
                  Donec vitae libero non enim placerat eleifend aliquam erat volutpat. Curabitur diam ex, dapibus purus sapien, cursus sed
                  nisl tristique, commodo gravida lectus non.
                </p>
                <form action="" className="hero-form">
                  <input type="email" name="email_address" aria-label="email" placeholder="Your Email Address..." required
                    className="email-field" />
                  <button type="submit" className="btn">Get Call Back</button>
                </form>
              </div>
              <figure className="hero-banner animate-float">
                <img src="/assets/images/hero-banner.png" width="587" height="839" alt="hero banner" className="w-100" />
              </figure>
            </div>
          </section>

          {/* SERVICE */}
          <section className="section service" id="service" aria-label="service">
            <div className="container">
              <p className="section-subtitle text-center">Our Services</p>
              <h2 className="h2 section-title text-center">What We Provide</h2>
              <ul className="service-list">
                <li>
                  <div className="service-card transition-all duration-300 hover:scale-105 hover:shadow-xl rounded-lg">
                    <div className="card-icon">
                      <img src="/assets/images/service-icon-1.png" width="100" height="100" loading="lazy" alt="service icon" className="w-100" />
                    </div>
                    <div>
                      <h3 className="h3 card-title">Root Canal</h3>
                      <p className="card-text">Aenean eleifend turpis tellus, nec laoreet metus elementum ac.</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="service-card transition-all duration-300 hover:scale-105 hover:shadow-xl rounded-lg">
                    <div className="card-icon">
                      <img src="/assets/images/service-icon-2.png" width="100" height="100" loading="lazy" alt="service icon" className="w-100" />
                    </div>
                    <div>
                      <h3 className="h3 card-title">Alignment Teeth</h3>
                      <p className="card-text">Aenean eleifend turpis tellus, nec laoreet metus elementum ac.</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="service-card transition-all duration-300 hover:scale-105 hover:shadow-xl rounded-lg">
                    <div className="card-icon">
                      <img src="/assets/images/service-icon-3.png" width="100" height="100" loading="lazy" alt="service icon" className="w-100" />
                    </div>
                    <div>
                      <h3 className="h3 card-title">Cosmetic Teeth</h3>
                      <p className="card-text">Aenean eleifend turpis tellus, nec laoreet metus elementum ac.</p>
                    </div>
                  </div>
                </li>
                <li className="service-banner">
                  <figure>
                    <img src="/assets/images/service-banner.png" width="409" height="467" loading="lazy" alt="service banner" className="w-100" />
                  </figure>
                </li>
                <li>
                  <div className="service-card transition-all duration-300 hover:scale-105 hover:shadow-xl rounded-lg">
                    <div className="card-icon">
                      <img src="/assets/images/service-icon-4.png" width="100" height="100" loading="lazy" alt="service icon" className="w-100" />
                    </div>
                    <div>
                      <h3 className="h3 card-title">Oral Hygiene</h3>
                      <p className="card-text">Aenean eleifend turpis tellus, nec laoreet metus elementum ac.</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="service-card transition-all duration-300 hover:scale-105 hover:shadow-xl rounded-lg">
                    <div className="card-icon">
                      <img src="/assets/images/service-icon-5.png" width="100" height="100" loading="lazy" alt="service icon" className="w-100" />
                    </div>
                    <div>
                      <h3 className="h3 card-title">Live Advisory</h3>
                      <p className="card-text">Aenean eleifend turpis tellus, nec laoreet metus elementum ac.</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="service-card transition-all duration-300 hover:scale-105 hover:shadow-xl rounded-lg">
                    <div className="card-icon">
                      <img src="/assets/images/service-icon-6.png" width="100" height="100" loading="lazy" alt="service icon" className="w-100" />
                    </div>
                    <div>
                      <h3 className="h3 card-title">Cavity Inspection</h3>
                      <p className="card-text">Aenean eleifend turpis tellus, nec laoreet metus elementum ac.</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* ABOUT */}
          <section className="section about" id="about" aria-label="about">
            <div className="container">
              <figure className="about-banner">
                <img src="/assets/images/about-banner.png" width="470" height="538" loading="lazy" alt="about banner" className="w-100" />
              </figure>
              <div className="about-content">
                <p className="section-subtitle">About Us</p>
                <h2 className="h2 section-title">We Care For Your Dental Health</h2>
                <p className="section-text section-text-1">
                  Aliquam ac sem et diam iaculis efficitur. Morbi in enim odio. Nullam quis volutpat est, sed dapibus sapien. Cras
                  condimentum eu velit id tempor. Curabitur purus sapien, cursus sed nisl tristique, commodo vehicula arcu.
                </p>
                <p className="section-text">
                  Aliquam erat volutpat. Aliquam enim massa, sagittis blandit ex mattis, ultricies posuere sapien. Morbi a dignissim enim.
                  Fusce elementum, augue in elementum porta, sapien nunc volutpat ex, a accumsan nunc lectus eu lectus.
                </p>
                <a href="#" className="btn">Read more</a>
              </div>
            </div>
          </section>

          {/* DOCTOR */}
          <section className="section doctor" aria-label="doctor">
            <div className="container">
              <p className="section-subtitle text-center">Our Doctor</p>
              <h2 className="h2 section-title text-center">Best Expert Dentist</h2>
              <ul className="has-scrollbar">
                <li className="scrollbar-item">
                  <div className="doctor-card transition-all duration-300 hover:-translate-y-2">
                    <div className="card-banner img-holder" style={{ '--width': '460', '--height': '500' } as React.CSSProperties}>
                      <img src="/assets/images/doctor-1.png" width="460" height="500" loading="lazy" alt="Howard Holmes" className="img-cover" />
                    </div>
                    <h3 className="h3">
                      <a href="#" className="card-title">Howard Holmes</a>
                    </h3>
                    <p className="card-subtitle">Dentist</p>
                    <ul className="card-social-list">
                      <li><a href="#" className="card-social-link"><ion-icon name="logo-facebook"></ion-icon></a></li>
                      <li><a href="#" className="card-social-link"><ion-icon name="logo-twitter"></ion-icon></a></li>
                      <li><a href="#" className="card-social-link"><ion-icon name="logo-instagram"></ion-icon></a></li>
                    </ul>
                  </div>
                </li>
                <li className="scrollbar-item">
                  <div className="doctor-card transition-all duration-300 hover:-translate-y-2">
                    <div className="card-banner img-holder" style={{ '--width': '460', '--height': '500' } as React.CSSProperties}>
                      <img src="/assets/images/doctor-2.png" width="460" height="500" loading="lazy" alt="Ella Thompson" className="img-cover" />
                    </div>
                    <h3 className="h3">
                      <a href="#" className="card-title">Ella Thompson</a>
                    </h3>
                    <p className="card-subtitle">Dentist</p>
                    <ul className="card-social-list">
                      <li><a href="#" className="card-social-link"><ion-icon name="logo-facebook"></ion-icon></a></li>
                      <li><a href="#" className="card-social-link"><ion-icon name="logo-twitter"></ion-icon></a></li>
                      <li><a href="#" className="card-social-link"><ion-icon name="logo-instagram"></ion-icon></a></li>
                    </ul>
                  </div>
                </li>
                <li className="scrollbar-item">
                  <div className="doctor-card transition-all duration-300 hover:-translate-y-2">
                    <div className="card-banner img-holder" style={{ '--width': '460', '--height': '500' } as React.CSSProperties}>
                      <img src="/assets/images/doctor-3.png" width="460" height="500" loading="lazy" alt="Vincent Cooper" className="img-cover" />
                    </div>
                    <h3 className="h3">
                      <a href="#" className="card-title">Vincent Cooper</a>
                    </h3>
                    <p className="card-subtitle">Dentist</p>
                    <ul className="card-social-list">
                      <li><a href="#" className="card-social-link"><ion-icon name="logo-facebook"></ion-icon></a></li>
                      <li><a href="#" className="card-social-link"><ion-icon name="logo-twitter"></ion-icon></a></li>
                      <li><a href="#" className="card-social-link"><ion-icon name="logo-instagram"></ion-icon></a></li>
                    </ul>
                  </div>
                </li>
                <li className="scrollbar-item">
                  <div className="doctor-card transition-all duration-300 hover:-translate-y-2">
                    <div className="card-banner img-holder" style={{ '--width': '460', '--height': '500' } as React.CSSProperties}>
                      <img src="/assets/images/doctor-4.png" width="460" height="500" loading="lazy" alt="Danielle Bryant" className="img-cover" />
                    </div>
                    <h3 className="h3">
                      <a href="#" className="card-title">Danielle Bryant</a>
                    </h3>
                    <p className="card-subtitle">Dentist</p>
                    <ul className="card-social-list">
                      <li><a href="#" className="card-social-link"><ion-icon name="logo-facebook"></ion-icon></a></li>
                      <li><a href="#" className="card-social-link"><ion-icon name="logo-twitter"></ion-icon></a></li>
                      <li><a href="#" className="card-social-link"><ion-icon name="logo-instagram"></ion-icon></a></li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* CTA */}
          <section className="section cta" aria-label="cta">
            <div className="container">
              <figure className="cta-banner">
                <img src="/assets/images/cta-banner.png" width="1056" height="1076" loading="lazy" alt="cta banner" className="w-100" />
              </figure>
              <div className="cta-content">
                <p className="section-subtitle">Book Dentail Appointment</p>
                <h2 className="h2 section-title">We Are open And Welcoming Patients</h2>
                <button className="btn" data-appointment-btn onClick={openModal}>Book appointment</button>
              </div>
            </div>
          </section>

          {/* BLOG */}
          <section className="section blog" id="blog" aria-label="blog">
            <div className="container">
              <p className="section-subtitle text-center">Our Blog</p>
              <h2 className="h2 section-title text-center">Latest Blog & News</h2>
              <ul className="blog-list">
                <li>
                  <div className="blog-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1 rounded-lg">
                    <figure className="card-banner img-holder" style={{ '--width': '1180', '--height': '800' } as React.CSSProperties}>
                      <img src="/assets/images/blog-1.jpg" width="1180" height="800" loading="lazy" alt="Cras accumsan nulla nec lacus ultricies placerat." className="img-cover" />
                      <div className="card-badge">
                        <ion-icon name="calendar-outline"></ion-icon>
                        <time className="time" dateTime="2022-03-24">24th March 2022</time>
                      </div>
                    </figure>
                    <div className="card-content">
                      <h3 className="h3">
                        <a href="#" className="card-title">Cras accumsan nulla nec lacus ultricies placerat.</a>
                      </h3>
                      <p className="card-text">
                        Curabitur sagittis libero tincidunt tempor finibus. Mauris at dignissim ligula, nec tristique orci.
                      </p>
                      <a href="#" className="card-link">Read More</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="blog-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1 rounded-lg">
                    <figure className="card-banner img-holder" style={{ '--width': '1180', '--height': '800' } as React.CSSProperties}>
                      <img src="/assets/images/blog-2.jpg" width="1180" height="800" loading="lazy" alt="Dras accumsan nulla nec lacus ultricies placerat." className="img-cover" />
                      <div className="card-badge">
                        <ion-icon name="calendar-outline"></ion-icon>
                        <time className="time" dateTime="2022-03-24">24th March 2022</time>
                      </div>
                    </figure>
                    <div className="card-content">
                      <h3 className="h3">
                        <a href="#" className="card-title">Dras accumsan nulla nec lacus ultricies placerat.</a>
                      </h3>
                      <p className="card-text">
                        Curabitur sagittis libero tincidunt tempor finibus. Mauris at dignissim ligula, nec tristique orci.
                      </p>
                      <a href="#" className="card-link">Read More</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="blog-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1 rounded-lg">
                    <figure className="card-banner img-holder" style={{ '--width': '1180', '--height': '800' } as React.CSSProperties}>
                      <img src="/assets/images/blog-3.jpg" width="1180" height="800" loading="lazy" alt="Seas accumsan nulla nec lacus ultricies placerat." className="img-cover" />
                      <div className="card-badge">
                        <ion-icon name="calendar-outline"></ion-icon>
                        <time className="time" dateTime="2022-03-24">24th March 2022</time>
                      </div>
                    </figure>
                    <div className="card-content">
                      <h3 className="h3">
                        <a href="#" className="card-title">Seas accumsan nulla nec lacus ultricies placerat.</a>
                      </h3>
                      <p className="card-text">
                        Curabitur sagittis libero tincidunt tempor finibus. Mauris at dignissim ligula, nec tristique orci.
                      </p>
                      <a href="#" className="card-link">Read More</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </article>
      </main>

      <footer className="footer">
        <div className="footer-top section">
          <div className="container">
            <div className="footer-brand">
              <a href="#" className="logo">
                <img src="/assets/images/logo.png" alt="ANTONY'S DENTAL HOSPITAL" width="200" height="50" />
              </a>
              <p className="footer-text">
                Mauris non nisi semper, lacinia neque in, dapibus leo. Curabitur sagittis libero tincidunt tempor finibus.
                Mauris at dignissim ligula, nec tristique orci.Quisque vitae metus.
              </p>
              <div className="schedule">
                <div className="schedule-icon">
                  <ion-icon name="time-outline"></ion-icon>
                </div>
                <span className="span">
                  Monday - Saturday:<br />
                  9:00am - 10:00Pm
                </span>
              </div>
            </div>

            <ul className="footer-list">
              <li><p className="footer-list-title">Other Links</p></li>
              <li><a href="#" className="footer-link"><ion-icon name="add-outline"></ion-icon><span className="span">Home</span></a></li>
              <li><a href="#" className="footer-link"><ion-icon name="add-outline"></ion-icon><span className="span">About Us</span></a></li>
              <li><a href="#" className="footer-link"><ion-icon name="add-outline"></ion-icon><span className="span">Services</span></a></li>
              <li><a href="#" className="footer-link"><ion-icon name="add-outline"></ion-icon><span className="span">Project</span></a></li>
              <li><a href="#" className="footer-link"><ion-icon name="add-outline"></ion-icon><span className="span">Our Team</span></a></li>
              <li><a href="#" className="footer-link"><ion-icon name="add-outline"></ion-icon><span className="span">Latest Blog</span></a></li>
            </ul>

            <ul className="footer-list">
              <li><p className="footer-list-title">Our Services</p></li>
              <li><a href="#" className="footer-link"><ion-icon name="add-outline"></ion-icon><span className="span">Root Canal</span></a></li>
              <li><a href="#" className="footer-link"><ion-icon name="add-outline"></ion-icon><span className="span">Alignment Teeth</span></a></li>
              <li><a href="#" className="footer-link"><ion-icon name="add-outline"></ion-icon><span className="span">Cosmetic Teeth</span></a></li>
              <li><a href="#" className="footer-link"><ion-icon name="add-outline"></ion-icon><span className="span">Oral Hygiene</span></a></li>
              <li><a href="#" className="footer-link"><ion-icon name="add-outline"></ion-icon><span className="span">Live Advisory</span></a></li>
              <li><a href="#" className="footer-link"><ion-icon name="add-outline"></ion-icon><span className="span">Cavity Inspection</span></a></li>
            </ul>

            <ul className="footer-list">
              <li><p className="footer-list-title">Contact Us</p></li>
              <li className="footer-item">
                <div className="item-icon"><ion-icon name="location-outline"></ion-icon></div>
                <address className="item-text">1247/Plot No. 39, 15th Phase,<br />LHB Colony, Kanpur</address>
              </li>
              <li className="footer-item">
                <div className="item-icon"><ion-icon name="call-outline"></ion-icon></div>
                <a href="tel:+919791413584" className="footer-link">+91 9791413584</a>
              </li>
              <li className="footer-item">
                <div className="item-icon"><ion-icon name="mail-outline"></ion-icon></div>
                <a href="mailto:contact@antonysdental.com" className="footer-link">contact@antonysdental.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <p className="copyright">&copy; 2022 All Rights Reserved by codewithsadee.</p>
            <ul className="social-list">
              <li><a href="#" className="social-link"><ion-icon name="logo-facebook"></ion-icon></a></li>
              <li><a href="#" className="social-link"><ion-icon name="logo-instagram"></ion-icon></a></li>
              <li><a href="#" className="social-link"><ion-icon name="logo-twitter"></ion-icon></a></li>
            </ul>
          </div>
        </div>
      </footer>

      {/* Back to top */}
      <a href="#top" className={`back-top-btn ${headerActive ? 'active' : ''}`} aria-label="back to top" data-back-top-btn>
        <ion-icon name="caret-up" aria-hidden="true"></ion-icon>
      </a>

      {/* MODAL */}
      {isModalOpen && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${isModalOpen ? 'opacity-100' : 'opacity-0'}`}
          id="appointment-modal" aria-hidden="true" onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}>
          <div
            className={`bg-white rounded-lg shadow-xl w-full max-w-md mx-4 transform transition-transform duration-300 relative ${isModalOpen ? 'scale-100' : 'scale-95'}`}>
            <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-800" data-modal-close onClick={closeModal}>
              <ion-icon name="close-outline" size="large"></ion-icon>
            </button>
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">Book Appointment</h2>
              <form id="appointment-form" className="space-y-4" onSubmit={handleBooking}>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input type="text" required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 p-2 border" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <input type="tel" required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 p-2 border" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Preferred Date</label>
                  <input type="date" required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 p-2 border" />
                </div>
                <button type="submit" disabled={isBooking}
                  className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300 disabled:opacity-50">
                  {isBooking ? 'Booking...' : 'Confirm Booking'}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
