export default function Footer() {
  return (
    <footer className="cs_footer cs_style_1 cs_heading_color">
      {/* Main Footer Content */}
      <div className="cs_footer_main" style={{ 
        background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)', 
        padding: '80px 0 60px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative Background Elements */}
        <div style={{
          position: 'absolute',
          top: '-50%',
          right: '-10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(47, 92, 85, 0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          pointerEvents: 'none'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '-30%',
          left: '-5%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(244, 162, 97, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          pointerEvents: 'none'
        }}></div>

        <div className="container !max-w-[1200px] mx-auto px-4 position-relative">
          {/* Footer Top - Branding */}
          <div className="text-center mb-5">
            <h2 style={{ 
              fontSize: 'clamp(2rem, 4vw, 2.5rem)', 
              fontWeight: '700',
              color: 'white',
              marginBottom: '12px',
              letterSpacing: '-0.5px'
            }}>
              Aangan ERP
            </h2>
            <p style={{ 
              fontSize: '1.125rem',
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Simplify Your Homestay Operations
            </p>
          </div>

          {/* Divider */}
          <div style={{
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
            margin: '48px 0'
          }}></div>

          {/* Footer Middle - 3 Columns Centered */}
          <div className="row justify-content-center cs_gap_y_40">
            {/* Quick Links */}
            <div className="col-lg-3 col-md-6">
              <div className="cs_footer_widget text-center text-md-start">
                <h3 style={{ 
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  color: 'white',
                  marginBottom: '24px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  Explore
                </h3>
                <ul style={{ 
                  listStyle: 'none', 
                  padding: 0, 
                  margin: 0,
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '12px' 
                }}>
                  <li>
                    <a href="#features" style={{ 
                      color: 'rgba(255, 255, 255, 0.7)', 
                      textDecoration: 'none', 
                      transition: 'all 0.3s',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      <i className="fa-solid fa-chevron-right" style={{ fontSize: '0.75rem' }}></i>
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#dashboard" style={{ 
                      color: 'rgba(255, 255, 255, 0.7)', 
                      textDecoration: 'none', 
                      transition: 'all 0.3s',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      <i className="fa-solid fa-chevron-right" style={{ fontSize: '0.75rem' }}></i>
                      Owner Dashboard
                    </a>
                  </li>
                  <li>
                    <a href="#mobile-app" style={{ 
                      color: 'rgba(255, 255, 255, 0.7)', 
                      textDecoration: 'none', 
                      transition: 'all 0.3s',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      <i className="fa-solid fa-chevron-right" style={{ fontSize: '0.75rem' }}></i>
                      Staff Mobile App
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Info */}
            <div className="col-lg-4 col-md-6">
              <div className="cs_footer_widget text-center text-md-start">
                <h3 style={{ 
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  color: 'white',
                  marginBottom: '24px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  Get In Touch
                </h3>
                <ul style={{ 
                  listStyle: 'none', 
                  padding: 0, 
                  margin: 0,
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '16px' 
                }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', justifyContent: 'flex-start' }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: 'rgba(47, 92, 85, 0.2)',
                      border: '1px solid rgba(47, 92, 85, 0.3)',
                       display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <i className="fa-solid fa-location-dot" style={{ color: '#2F5C55', fontSize: '1rem' }}></i>
                    </div>
                    <div style={{ flex: 1, paddingTop: '8px' }}>
                      <p className="mb-0" style={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: '1.6' }}>
                        Mirik, Darjeeling
                      </p>
                    </div>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', justifyContent: 'flex-start' }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: 'rgba(244, 162, 97, 0.2)',
                      border: '1px solid rgba(244, 162, 97, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <i className="fa-solid fa-envelope" style={{ color: '#F4A261', fontSize: '1rem' }}></i>
                    </div>
                    <div style={{ flex: 1, paddingTop: '8px' }}>
                      <a href="mailto:aangan@1947.io" style={{ 
                        color: 'rgba(255, 255, 255, 0.7)', 
                        textDecoration: 'none', 
                        lineHeight: '1.6',
                        transition: 'color 0.3s'
                      }}>
                        aangan@1947.io
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA Section */}
            <div className="col-lg-3 col-md-12">
              <div className="cs_footer_widget text-center text-lg-start">
                <h3 style={{ 
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  color: 'white',
                  marginBottom: '24px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  Ready to Start?
                </h3>
                <p style={{ 
                  color: 'rgba(255, 255, 255, 0.6)', 
                  marginBottom: '20px',
                  lineHeight: '1.6',
                  fontSize: '0.95rem'
                }}>
                  Join the waitlist and be the first to simplify your homestay management.
                </p>
                <a 
                  href="#" 
                  aria-label="Register Interest" 
                  data-tally-open="A7Bz8z" 
                  data-tally-layout="modal" 
                  data-tally-overlay="1" 
                  data-tally-emoji-text="👋" 
                  data-tally-emoji-animation="wave"
                  style={{
                    background: 'linear-gradient(135deg, #F4A261 0%, #e08e4d 100%)',
                    color: '#1e293b',
                    padding: '12px 24px',
                    borderRadius: '10px',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '0.875rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'all 0.3s',
                    boxShadow: '0 4px 12px rgba(244, 162, 97, 0.3)'
                  }}
                  className="footer-cta-btn"
                >
                  Register Interest
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="cs_copyright text-center" style={{ 
        background: '#0a0f1a', 
        padding: '32px 0',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)'
      }}>
        <div className="container !max-w-[1200px] mx-auto px-4">
          <div style={{ 
            display: 'flex', 
            flexDirection: 'row', 
            gap: '8px', 
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <p className="mb-0" style={{ 
              color: 'rgba(255, 255, 255, 0.5)', 
              fontSize: '0.875rem' 
            }}>
              © {new Date().getFullYear()} Homestay ERP. All rights reserved.
            </p>
            <span style={{ color: 'rgba(255, 255, 255, 0.3)' }}>•</span>
            <p className="mb-0" style={{ 
              color: 'rgba(255, 255, 255, 0.5)', 
              fontSize: '0.875rem' 
            }}>
              An initiative by <a 
                href="https://1947.io" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ 
                  color: '#F4A261', 
                  textDecoration: 'none', 
                  fontWeight: '600',
                  transition: 'color 0.3s'
                }}
              >
                Studio 1947
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Hover Styles */}
      <style>{`
        .cs_footer_widget a:hover {
          color: white !important;
          transform: translateX(4px);
        }
        .footer-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(244, 162, 97, 0.4) !important;
        }
        @media (max-width: 768px) {
          .cs_footer_widget {
            text-align: center !important;
          }
          .cs_footer_widget ul {
            align-items: center;
          }
          .cs_footer_widget ul li {
            justify-content: center !important;
          }
        }
      `}</style>
    </footer>
  );
}
