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

        <div className={`header-bottom ${headerActive ? 'active' : ''}`} data-header style={{ height: '65px', paddingBlock: '8px', maxHeight: '65px' }}>
          <div className="container" style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
            <a href="#" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '10px', lineHeight: 0 }}>
              <img src="/assets/images/logo.png" alt="ANTONY'S DENTAL CARE"
                style={{ height: '48px', width: 'auto', maxHeight: '48px', objectFit: 'contain' }} />
              <span style={{ fontSize: '18px', fontWeight: '800', color: '#ffffff', lineHeight: '1.2' }}>ANTONY'S DENTAL CARE</span>
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
          <section className="section hero" id="home" style={{ backgroundImage: "linear-gradient(to bottom, #000000, #1a1a1a)" }} aria-label="hero">
            <div className="container">
              <div className="hero-content">
                <p className="section-subtitle animate-fade-in-up">Welcome To ANTONY'S DENTAL CARE</p>
                <h1 className="h1 hero-title animate-fade-in-up delay-100">We Are Best Dental Service</h1>
                <p className="hero-text animate-fade-in-up delay-200">
                  We provide top-quality dental services to ensure your smile stays healthy and beautiful. Our expert team is here to give you the best care possible.
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
                      <p className="card-text">Effective root canal treatments to save your natural teeth.</p>
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
                      <p className="card-text">Professional teeth alignment services for a perfect smile.</p>
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
                      <p className="card-text">Enhance your smile with our advanced cosmetic dentistry.</p>
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
                      <p className="card-text">Comprehensive oral hygiene checks for long-lasting health.</p>
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
                      <p className="card-text">Get expert dental advice from our qualified professionals.</p>
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
                      <p className="card-text">Thorough inspections to detect and treat cavities early.</p>
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
                  At Antony's Dental Care, we are committed to providing exceptional dental care in a comfortable and friendly environment. Our team of experienced dentists utilizes the latest technology to ensure precise and effective treatments.
                </p>
                <p className="section-text">
                  We believe that a healthy smile is a gateway to overall well-being. From routine check-ups to complex procedures, we are here to support your dental health journey every step of the way.
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
                  <div className="doctor-card transition-all duration-300 hover:-translate-y-2 flex flex-row items-center gap-6 text-left">
                    <div className="card-banner img-holder shrink-0" style={{ '--width': '200', '--height': '220', width: '200px', maxWidth: '200px', margin: '0' } as React.CSSProperties}>
                      <img src="/assets/images/doctor-1.png" width="200" height="220" loading="lazy" alt="Howard Holmes" className="img-cover" />
                    </div>
                    <div className="flex-1">
                      <h3 className="h3 text-4xl mb-3">
                        <a href="#" className="card-title">Howard Holmes</a>
                      </h3>
                      <p className="card-subtitle text-2xl mb-5">Dentist</p>
                      <ul className="list-disc pl-6 text-xl mb-6 space-y-3 text-gray-300">
                        <li>10+ years of experience</li>
                        <li>Cosmetic Dentistry Specialist</li>
                        <li>Member of ADA</li>
                      </ul>
                      <ul className="card-social-list" style={{ justifyContent: 'flex-start' }}>
                        <li><a href="#" className="card-social-link"><ion-icon name="logo-facebook"></ion-icon></a></li>
                        <li><a href="#" className="card-social-link"><ion-icon name="logo-twitter"></ion-icon></a></li>
                        <li><a href="#" className="card-social-link"><ion-icon name="logo-instagram"></ion-icon></a></li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="scrollbar-item">
                  <div className="doctor-card transition-all duration-300 hover:-translate-y-2 flex flex-row items-center gap-6 text-left">
                    <div className="card-banner img-holder shrink-0" style={{ '--width': '200', '--height': '220', width: '200px', maxWidth: '200px', margin: '0' } as React.CSSProperties}>
                      <img src="/assets/images/doctor-2.png" width="200" height="220" loading="lazy" alt="Ella Thompson" className="img-cover" />
                    </div>
                    <div className="flex-1">
                      <h3 className="h3 text-4xl mb-3">
                        <a href="#" className="card-title">Ella Thompson</a>
                      </h3>
                      <p className="card-subtitle text-2xl mb-5">Dentist</p>
                      <ul className="list-disc pl-6 text-xl mb-6 space-y-3 text-gray-300">
                        <li>Pediatric Specialist</li>
                        <li>Gentle Care Certified</li>
                        <li>Kids' Favorite</li>
                      </ul>
                      <ul className="card-social-list" style={{ justifyContent: 'flex-start' }}>
                        <li><a href="#" className="card-social-link"><ion-icon name="logo-facebook"></ion-icon></a></li>
                        <li><a href="#" className="card-social-link"><ion-icon name="logo-twitter"></ion-icon></a></li>
                        <li><a href="#" className="card-social-link"><ion-icon name="logo-instagram"></ion-icon></a></li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="scrollbar-item">
                  <div className="doctor-card transition-all duration-300 hover:-translate-y-2 flex flex-row items-center gap-6 text-left">
                    <div className="card-banner img-holder shrink-0" style={{ '--width': '200', '--height': '220', width: '200px', maxWidth: '200px', margin: '0' } as React.CSSProperties}>
                      <img src="/assets/images/doctor-3.png" width="200" height="220" loading="lazy" alt="Vincent Cooper" className="img-cover" />
                    </div>
                    <div className="flex-1">
                      <h3 className="h3 text-4xl mb-3">
                        <a href="#" className="card-title">Vincent Cooper</a>
                      </h3>
                      <p className="card-subtitle text-2xl mb-5">Dentist</p>
                      <ul className="list-disc pl-6 text-xl mb-6 space-y-3 text-gray-300">
                        <li>Root Canal Expert</li>
                        <li>Micro-Endodontics</li>
                        <li>Pain-free Treatments</li>
                      </ul>
                      <ul className="card-social-list" style={{ justifyContent: 'flex-start' }}>
                        <li><a href="#" className="card-social-link"><ion-icon name="logo-facebook"></ion-icon></a></li>
                        <li><a href="#" className="card-social-link"><ion-icon name="logo-twitter"></ion-icon></a></li>
                        <li><a href="#" className="card-social-link"><ion-icon name="logo-instagram"></ion-icon></a></li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="scrollbar-item">
                  <div className="doctor-card transition-all duration-300 hover:-translate-y-2 flex flex-row items-center gap-6 text-left">
                    <div className="card-banner img-holder shrink-0" style={{ '--width': '200', '--height': '220', width: '200px', maxWidth: '200px', margin: '0' } as React.CSSProperties}>
                      <img src="/assets/images/doctor-4.png" width="200" height="220" loading="lazy" alt="Danielle Bryant" className="img-cover" />
                    </div>
                    <div className="flex-1">
                      <h3 className="h3 text-4xl mb-3">
                        <a href="#" className="card-title">Danielle Bryant</a>
                      </h3>
                      <p className="card-subtitle text-2xl mb-5">Dentist</p>
                      <ul className="list-disc pl-6 text-xl mb-6 space-y-3 text-gray-300">
                        <li>Preventative Care</li>
                        <li>Patient Education</li>
                        <li>Holistic Approach</li>
                      </ul>
                      <ul className="card-social-list" style={{ justifyContent: 'flex-start' }}>
                        <li><a href="#" className="card-social-link"><ion-icon name="logo-facebook"></ion-icon></a></li>
                        <li><a href="#" className="card-social-link"><ion-icon name="logo-twitter"></ion-icon></a></li>
                        <li><a href="#" className="card-social-link"><ion-icon name="logo-instagram"></ion-icon></a></li>
                      </ul>
                    </div>
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
                    <figure className="card-banner img-holder" style={{ '--width': '400', '--height': '270', maxWidth: '400px', margin: '0 auto' } as React.CSSProperties}>
                      <img src="/assets/images/blog-1.jpg" width="400" height="270" loading="lazy" alt="Cras accumsan nulla nec lacus ultricies placerat." className="img-cover" />
                      <div className="card-badge">
                        <ion-icon name="calendar-outline"></ion-icon>
                        <time className="time" dateTime="2025-03-24">24th March 2025</time>
                      </div>
                    </figure>
                    <div className="card-content">
                      <h3 className="h3">
                        <a href="#" className="card-title">Common Dental Problems and How to Avoid Them</a>
                      </h3>
                      <p className="card-text">
                        Learn about common dental issues like cavities and gum disease, and discover simple tips to prevent them.
                      </p>
                      <a href="#" className="card-link">Read More</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="blog-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1 rounded-lg">
                    <figure className="card-banner img-holder" style={{ '--width': '400', '--height': '270', maxWidth: '400px', margin: '0 auto' } as React.CSSProperties}>
                      <img src="/assets/images/blog-2.jpg" width="400" height="270" loading="lazy" alt="Dras accumsan nulla nec lacus ultricies placerat." className="img-cover" />
                      <div className="card-badge">
                        <ion-icon name="calendar-outline"></ion-icon>
                        <time className="time" dateTime="2025-03-24">24th March 2025</time>
                      </div>
                    </figure>
                    <div className="card-content">
                      <h3 className="h3">
                        <a href="#" className="card-title">The Importance of Regular Dental Check-ups</a>
                      </h3>
                      <p className="card-text">
                        Regular visits to the dentist are crucial for maintaining good oral health. Find out why you shouldn't skip your appointments.
                      </p>
                      <a href="#" className="card-link">Read More</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="blog-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1 rounded-lg">
                    <figure className="card-banner img-holder" style={{ '--width': '400', '--height': '270', maxWidth: '400px', margin: '0 auto' } as React.CSSProperties}>
                      <img src="/assets/images/blog-3.jpg" width="400" height="270" loading="lazy" alt="Seas accumsan nulla nec lacus ultricies placerat." className="img-cover" />
                      <div className="card-badge">
                        <ion-icon name="calendar-outline"></ion-icon>
                        <time className="time" dateTime="2025-03-24">24th March 2025</time>
                      </div>
                    </figure>
                    <div className="card-content">
                      <h3 className="h3">
                        <a href="#" className="card-title">Tips for Maintaining a Healthy Smile</a>
                      </h3>
                      <p className="card-text">
                        Discover expert advice on daily oral hygiene practices that can help you keep your smile bright and healthy.
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
                <img src="/assets/images/logo.png" alt="ANTONY'S DENTAL CARE" width="200" height="50" />
              </a>
              <p className="footer-text">
                Antony's Dental Care provides comprehensive dental care services. We are dedicated to ensuring the best oral health for all our patients.
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
            <p className="copyright">&copy; 2025 All Rights Reserved by codewithsadee.</p>
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
          className="fixed inset-0 z-[9999] overflow-y-auto"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          {/* Background backdrop */}
          <div className="fixed inset-0 bg-black/90 transition-opacity" aria-hidden="true" onClick={closeModal}></div>

          <div className="flex min-h-full items-center justify-center p-4 text-center">
            {/* Modal panel with RGB BORDER */}
            <div
              className="relative transform overflow-hidden rounded-xl bg-[#1a1a1a] text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-4xl"
              style={{
                border: '5px solid transparent',
                backgroundImage: 'linear-gradient(#1a1a1a, #1a1a1a), linear-gradient(90deg, #9b5de5, #f15bb5, #fee440, #00bbf9, #00f5d4, #9b5de5)',
                backgroundOrigin: 'border-box',
                backgroundClip: 'padding-box, border-box',
                backgroundSize: '100% 100%, 200% 100%',
                animation: 'rgb-border 2s linear infinite'
              }}
            >

              {/* Header */}
              <div className="bg-[#2a1b3d] px-6 py-4 flex justify-between items-center border-b border-gray-700">
                <h3 className="text-2xl font-extrabold leading-6 text-white tracking-wide" id="modal-title">Book Your Appointment</h3>
                <button onClick={closeModal} className="text-white hover:text-gray-300 focus:outline-none bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                  <ion-icon name="close" style={{ fontSize: '32px' }}></ion-icon>
                </button>
              </div>

              {/* Form Content */}
              <form onSubmit={handleBooking}>
                <div className="bg-[#1a1a1a] px-8 pb-8 pt-6">
                  <div className="space-y-6">
                    <div className="bg-[#2d2d2d] p-4 rounded-lg border-l-4 border-purple-500">
                      <p className="text-lg text-gray-200 font-medium">Please fill out the form below. We'll confirm your visit instantly!</p>
                    </div>

                    <div>
                      <label htmlFor="full-name" className="block text-xl font-bold text-gray-200 mb-2">Full Name</label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="full-name"
                          id="full-name"
                          required
                          className="block w-full rounded-lg border-2 border-gray-700 bg-[#2d2d2d] px-4 py-3 text-white shadow-sm focus:border-purple-500 focus:ring-purple-500 text-lg placeholder-gray-500"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xl font-bold text-gray-200 mb-2">Phone Number</label>
                      <div className="mt-1">
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          required
                          className="block w-full rounded-lg border-2 border-gray-700 bg-[#2d2d2d] px-4 py-3 text-white shadow-sm focus:border-purple-500 focus:ring-purple-500 text-lg placeholder-gray-500"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="date" className="block text-xl font-bold text-gray-200 mb-2">Preferred Date</label>
                      <div className="mt-1">
                        <input
                          type="date"
                          name="date"
                          id="date"
                          required
                          className="block w-full rounded-lg border-2 border-gray-700 bg-[#2d2d2d] px-4 py-3 text-white shadow-sm focus:border-purple-500 focus:ring-purple-500 text-lg section-text"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="bg-[#111111] px-8 py-6 sm:flex sm:flex-row-reverse gap-4 border-t border-gray-800">
                  <button
                    type="submit"
                    disabled={isBooking}
                    className="inline-flex w-full justify-center rounded-lg bg-purple-600 px-6 py-4 text-lg font-bold text-white shadow-lg hover:bg-purple-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 sm:w-auto transition-transform hover:scale-105"
                    style={{ backgroundColor: '#9b5de5', color: '#ffffff', border: 'none' }}
                  >
                    {isBooking ? 'Processing...' : 'CONFIRM BOOKING'}
                  </button>
                  <button
                    type="button"
                    className="mt-4 inline-flex w-full justify-center rounded-lg bg-transparent px-6 py-4 text-lg font-bold text-white shadow-sm ring-1 ring-inset ring-gray-600 hover:bg-white/10 sm:mt-0 sm:w-auto transition-colors"
                    onClick={closeModal}
                    style={{ backgroundColor: 'transparent', color: '#ffffff', border: '1px solid #4b5563' }}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
