import ScrollReveal from './ScrollReveal';

export default function MobileAppShowcase() {
  return (
    <section className="position-relative" id="mobile-app" style={{ background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)', padding: '120px 0', overflow: 'hidden' }}>
      {/* Decorative Background Pattern */}
      <div className="position-absolute" style={{ top: 0, left: 0, right: 0, bottom: 0, opacity: 0.05, backgroundImage: 'url(/assets/img/whychoose-bg-1.svg)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
      
      <div className="container !max-w-[1800px] mx-auto px-4 position-relative z-1">
        {/* Centered Heading */}
        <div className="cs_section_heading cs_style_1 text-center mx-auto position-relative z-1" style={{ marginBottom: '80px' }}>
         
              <div className="cs_section_subtitle cs_fs_18 cs_heading_color cs_mb_22 justify-content-center">
              <img src="/assets/img/icons/star-1.svg" alt="Star icon" />
              <span>Staff Mobile App</span>
              <img src="/assets/img/icons/star-1.svg" alt="Star icon" />
            </div>
            <ScrollReveal>
                <h2 className="cs_semibold mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: '1.2', color: 'white' }}>Empower Your Staff on the Go</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
                <p className="m-auto" style={{ maxWidth: '600px', fontSize: '1.125rem', color: 'rgba(255, 255, 255, 0.7)', lineHeight: '1.7' }}>Give your staff the tools they need to manage housekeeping, room service, and check-ins efficiently from their mobile devices.</p>
            </ScrollReveal>
        </div>

        <div className="row position-relative z-1 align-items-center flex" style={{ gap: '0' }}>
          {/* Image Column */}
          <div className="col-lg-6 order-lg-2 mb-5 mb-lg-0">
            <div className="position-relative d-flex justify-content-center">
              {/* Decorative Glow */}
              <div className="position-absolute" style={{ 
                top: '50%', 
                left: '50%', 
                transform: 'translate(-50%, -50%)',
                width: '400px', 
                height: '400px', 
                background: 'radial-gradient(circle, rgba(244, 162, 97, 0.15) 0%, transparent 70%)',
                borderRadius: '50%',
                zIndex: 0,
                filter: 'blur(60px)'
              }}></div>
              
              {/* Decorative Backdrop */}
              <div className="position-absolute" style={{ 
                top: '-20px', 
                left: '-20px', 
                width: '100%', 
                height: '100%', 
                background: 'linear-gradient(135deg, rgba(47, 92, 85, 0.08) 0%, rgba(244, 162, 97, 0.08) 100%)',
                borderRadius: '32px',
                zIndex: -1,
                transform: 'rotate(-3deg)',
                maxWidth: 'calc(100% + 40px)'
              }}></div>
              
              <ScrollReveal className="position-relative" style={{ 
                display: 'flex', 
                justifyContent: 'center',
                zIndex: 1,
                filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.15))'
              }}>
                <img 
                  src="/staffview2.png" 
                  alt="Staff Mobile App Screenshot" 
                  className="rounded-3xl" 
                  style={{ 
                    width: '100%',
                    maxWidth: '500px',
                    borderRadius: '28px',
                    objectFit: 'cover'
                  }}
                />
              </ScrollReveal>
            </div>
          </div>
          
          {/* Features Column */}
          <div className="col-lg-6 order-lg-1">
            <div className="position-relative mx-auto" style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '600px' }}>
              {/* Feature 1: Real-time Task Updates */}
              <ScrollReveal delay={0.3}>
                <div className="group position-relative" style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  padding: '28px',
                  borderRadius: '20px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer'
                }}>
                  <div className="d-flex align-items-start" style={{ gap: '20px' }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '16px',
                      background: 'linear-gradient(135deg, #2F5C55 0%, #1e3f39 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      boxShadow: '0 8px 24px rgba(47, 92, 85, 0.3)'
                    }}>
                      <i className="fa-solid fa-tasks" style={{ color: 'white', fontSize: '1.5rem' }}></i>
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 className="cs_semibold mb-2" style={{ fontSize: '1.25rem', color: 'white', lineHeight: '1.3' }}>Real-time Task Updates</h3>
                      <p className="mb-0" style={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: '1.6', fontSize: '0.95rem' }}>Staff receive instant notifications and can update task status on-the-go.</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Feature 2: Mobile Check-in/Check-out */}
              <ScrollReveal delay={0.4}>
                <div className="group position-relative" style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  padding: '28px',
                  borderRadius: '20px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer'
                }}>
                  <div className="d-flex align-items-start" style={{ gap: '20px' }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '16px',
                      background: 'linear-gradient(135deg, #F4A261 0%, #e08e4d 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      boxShadow: '0 8px 24px rgba(244, 162, 97, 0.3)'
                    }}>
                      <i className="fa-solid fa-mobile-screen-button" style={{ color: 'white', fontSize: '1.5rem' }}></i>
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 className="cs_semibold mb-2" style={{ fontSize: '1.25rem', color: 'white', lineHeight: '1.3' }}>Mobile Check-in/Check-out</h3>
                      <p className="mb-0" style={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: '1.6', fontSize: '0.95rem' }}>Process guest arrivals and departures seamlessly from anywhere.</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Feature 3: Room Service Management */}
              <ScrollReveal delay={0.5}>
                <div className="group position-relative" style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  padding: '28px',
                  borderRadius: '20px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer'
                }}>
                  <div className="d-flex align-items-start" style={{ gap: '20px' }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '16px',
                      background: 'linear-gradient(135deg, #E8F3F1 0%, #d0e6e2 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      boxShadow: '0 8px 24px rgba(47, 92, 85, 0.15)'
                    }}>
                      <i className="fa-solid fa-concierge-bell" style={{ color: '#2F5C55', fontSize: '1.5rem' }}></i>
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 className="cs_semibold mb-2" style={{ fontSize: '1.25rem', color: 'white', lineHeight: '1.3' }}>Room Service Management</h3>
                      <p className="mb-0" style={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: '1.6', fontSize: '0.95rem' }}>Track and fulfill guest requests efficiently with real-time updates.</p>
                    </div>
                  </div>  
                </div>
              </ScrollReveal>

              {/* Feature 4: Inventory Requests */}
              <ScrollReveal delay={0.6}>
                <div className="group position-relative mx-auto mx-w-[600px]" style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  padding: '28px',
                  borderRadius: '20px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer'
                }}>
                  <div className="d-flex align-items-start" style={{ gap: '20px' }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '16px',
                      background: 'linear-gradient(135deg, rgba(244, 162, 97, 0.3) 0%, rgba(244, 162, 97, 0.1) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      border: '2px solid rgba(244, 162, 97, 0.5)',
                      boxShadow: '0 8px 24px rgba(244, 162, 97, 0.2)'
                    }}>
                      <i className="fa-solid fa-clipboard-list" style={{ color: '#F4A261', fontSize: '1.5rem' }}></i>
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 className="cs_semibold mb-2" style={{ fontSize: '1.25rem', color: 'white', lineHeight: '1.3' }}>Inventory Requests</h3>
                      <p className="mb-0" style={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: '1.6', fontSize: '0.95rem' }}>Submit and track inventory requests to ensure supplies are always stocked.</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* CTA Button */}
              <ScrollReveal delay={0.7}>
                <div style={{ marginTop: '16px' }}>
                  <a href="#contact" aria-label="Register Interest" className="cs_btn cs_style_1 cs_fs_14 cs_bold text-uppercase" style={{
                    background: 'linear-gradient(135deg, #F4A261 0%, #e08e4d 100%)',
                    color: '#1e293b',
                    padding: '16px 32px',
                    borderRadius: '12px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '12px',
                    boxShadow: '0 8px 24px rgba(244, 162, 97, 0.3)',
                    transition: 'all 0.3s ease',
                    border: 'none'
                  }}>
                    <span>Register Interest</span>
                    <span className="cs_btn_icon"><i className="fa-solid fa-arrow-right"></i></span>
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>

      {/* Add hover animation */}
      <style>{`
        .group:hover {
          transform: translateY(-4px);
          background: rgba(255, 255, 255, 0.08) !important;
          border-color: rgba(255, 255, 255, 0.2) !important;
        }
      `}</style>
    </section>
  );
}
