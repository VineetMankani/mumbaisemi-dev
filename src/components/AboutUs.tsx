import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section id="about" style={{ minHeight: '100vh', background: '#f4f8fc', paddingTop: '80px' }}>
      <div className="container py-5">
        <h2 className="subtitle mb-5 fw-bold text-center">About Us</h2>

        {/* What We Do Section */}
        <div className="row align-items-center mb-5">
          <div className="col-lg-9 mb-4 mb-lg-0">
            <div className="about-content" style={{ opacity: 0, transform: 'translateY(30px)', animation: 'fadeInUp 0.7s forwards 0.3s' }}>
              <h3 className="mb-4 fw-bold" style={{ color: '#0d2957' }}>What We Do</h3>
              <div className="card border-0 shadow-sm mb-4" style={{ background: 'linear-gradient(135deg, #e3f0ff 0%, #f8fbff 100%)', borderRadius: '1rem', padding: '1.5rem' }}>
                <p style={{ fontSize: '1rem', color: '#2c3e50', lineHeight: '1.8' }}>
                  We are a fab-less semiconductor company designing high-performance <b>RF, Analog, Mixed-signal, and Digital ICs</b> for advanced communications, AI/ML hardware, autonomous vehicles, low-power IoT, and more. Our core strength lies in developing innovative circuits to address the challenges in chip design.
                </p>
              </div>
              <div className="card border-0 shadow-sm" style={{ background: 'linear-gradient(135deg, #e3f0ff 0%, #f8fbff 100%)', borderRadius: '1rem', padding: '1.5rem' }}>
                <p style={{ fontSize: '1rem', color: '#2c3e50', lineHeight: '1.8' }}>
                  We research and innovate to produce disruptive solutions for futuristic challenges to develop high-quality semiconductor chips in India for national and global needs. Our first product, <b>DhruvaPro</b>, is an example of our commitment to delivering best-in-class semiconductor chips for the technical problems of our nation and across the world.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="about-image" style={{ opacity: 0, transform: 'translateX(30px)', animation: 'fadeInRight 0.7s forwards 0.5s', position: 'relative'
            }}>
              <img src="src/assets/workatmumbaisemi.png" alt="Work at MumbaiSemi" className="img-fluid" style={{ height: '100%', width: '100%', objectFit: 'cover', transition: 'transform 0.3s ease, box-shadow 0.3s ease'}} />
              <div className="card-img-overlay d-flex align-items-end" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)', opacity: 0, transition: 'opacity 0.3s ease' }}>
                <div className="text-white p-4">
                  <h5 className="mb-2">Our Headquarters</h5>
                  <p className="mb-0">Located in Mumbai, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Work at MumbaiSemi Section */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="work-section" style={{ opacity: 0, transform: 'translateY(30px)', animation: 'fadeInUp 0.7s forwards 0.7s' }}>
              <div className="card border-0 shadow-sm" style={{
                background: 'linear-gradient(135deg, #e3f0ff 0%, #f8fbff 100%)',
                borderRadius: '1rem',
              }}>
                <h3 className="mb-4 fw-bold text-center" style={{ color: '#0d2957' }}>Work at MumbaiSemi</h3>
                <div id="carouselExampleIndicators" className="carousel slide px-5" data-bs-ride="carousel">
                  <div className="carousel-inner px-5">
                    <div className="carousel-item active">
                      <p style={{ fontSize: '1rem', color: '#2c3e50', lineHeight: '1.8', textAlign: 'center' }}>
                        At MumbaiSemi, we love to work on challenging problems that demand precision, creativity, and excellent technical skills. We collaborate strongly, learn continuously, and take pride in the quality of our work.
                      </p>
                    </div>
                    <div className="carousel-item">
                      <p style={{ fontSize: '1rem', color: '#2c3e50', lineHeight: '1.8', textAlign: 'center' }}>
                        Whether you're just starting your career or have years of tape-outs behind you, you will work alongside people passionate about pushing the limits of chip design.
                      </p>
                    </div>
                    <div className="carousel-item">
                      <p style={{ fontSize: '1rem', color: '#2c3e50', lineHeight: '1.8', textAlign: 'center' }}>
                        Diverse perspectives lead to stronger designs. We're proud to be an equal opportunity employer — and we're always looking for curious, driven minds to join us. We want to hear from you if you enjoy solving challenging chip design problems. Please send us a copy of your CV.
                      </p>
                    </div>
                  </div>
                  <div className="carousel-indicators position-relative mb-0 mt-0">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </div>
                  <button className="carousel-control-prev mb-3" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next mb-3" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          to { opacity: 1; transform: none; }
        }
        @keyframes fadeInRight {
          to { opacity: 1; transform: none; }
        }
        .about-image .card:hover {
          transform: translateY(-10px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.15);
        }
        .about-image .card:hover img {
          transform: scale(1.05);
        }
        .about-image .card:hover .card-img-overlay {
          opacity: 1;
        }
        .carousel-control-prev,
        .carousel-control-next {
          width: 10%;
          opacity: 1;
        }
        .carousel-control-prev-icon,
        .carousel-control-next-icon {
          background-color: #0d6efd;
          border-radius: 50%;
          padding: 1rem;
          width: 2.5rem;
          height: 2.5rem;
          background-size: 50%;
          transition: all 0.3s ease;
        }
        .carousel-control-prev:hover .carousel-control-prev-icon,
        .carousel-control-next:hover .carousel-control-next-icon {
          background-color: #0b5ed7;
          transform: scale(1.1);
        }
        .carousel-indicators {
          margin-top: 1rem;
        }
        .carousel-indicators button {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: #0d6efd;
          opacity: 0.5;
          transition: all 0.3s ease;
        }
        .carousel-indicators button.active {
          opacity: 1;
          transform: scale(1.2);
        }
        .carousel-indicators button:hover {
          opacity: 0.8;
        }
      `}</style>
    </section>
  );
};

export default AboutUs; 