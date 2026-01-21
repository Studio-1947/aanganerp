import ScrollReveal from './ScrollReveal';

export default function HowItWorks() {
  return (
    <section className="position-relative mt-[-50px]" style={{ background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)', padding: '120px 0 80px' }}>
      <div className="container !max-w-[1800px] mx-auto px-4">
        {/* Centered Heading */}
        <div className="cs_section_heading cs_style_1 text-center mx-auto position-relative z-1" style={{ marginBottom: '80px' }}>
            <div className="cs_section_subtitle cs_fs_18 cs_heading_color cs_mb_22 justify-content-center">
              <img src="/assets/img/icons/star-1.svg" alt="Star icon" />
              <span>How It Works</span>
              <img src="/assets/img/icons/star-1.svg" alt="Star icon" />
            </div>
            <ScrollReveal>
                <h2 className="cs_section_title cs_fs_48 cs_semibold mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: '1.2' }}>Get Started in Three Easy Steps</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
                <p className="m-auto" style={{ maxWidth: '600px', fontSize: '1.125rem', color: '#64748b', lineHeight: '1.7' }}>Join hundreds of homestays digitizing their operations with Aangan ERP. It's simpler than you think.</p>
            </ScrollReveal>
        </div>

        <div className="row position-relative z-1 align-items-center" style={{ gap: '0' }}>
          {/* Image Column */}
          <div className="col-lg-6 order-lg-2 mb-5 mb-lg-0">
            <div className="position-relative">
              {/* Decorative Elements */}
              <div className="position-absolute" style={{ 
                top: '-20px', 
                right: '-20px', 
                width: '100%', 
                height: '100%', 
                background: 'linear-gradient(135deg, rgba(47, 92, 85, 0.08) 0%, rgba(244, 162, 97, 0.08) 100%)',
                borderRadius: '32px',
                zIndex: -1,
                transform: 'rotate(3deg)'
              }}></div>
              
              <div className="position-relative" style={{ 
                display: 'flex', 
                justifyContent: 'center',
                filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.15))'
              }}>
                <img 
                  src="/assets/img/how-it-works-gen.png" 
                  alt="Homestay owner managing bookings" 
                  className="rounded-3xl object-cover" 
                  style={{ 
                    width: '320px',
                    height: '320px',
                    borderRadius: '28px',
                    objectFit: 'cover'
                  }}
                />
                
                {/* Floating Badge */}
                <div className="position-absolute d-none d-md-block" style={{
                  bottom: '-20px',
                  left: '-30px',
                  background: 'white',
                  padding: '20px 24px',
                  borderRadius: '20px',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
                  animation: 'float 3s ease-in-out infinite'
                }}>
                  <div className="d-flex align-items-center" style={{ gap: '16px' }}>
                    <div style={{
                      background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                      padding: '14px',
                      borderRadius: '14px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <i className="fa-solid fa-check-double" style={{ color: 'white', fontSize: '1.25rem' }}></i>
                    </div>
                    <div>
                      <p className="mb-0" style={{ fontSize: '0.875rem', color: '#64748b', fontWeight: '500' }}>Quick Setup</p>
                      <h4 className="mb-0" style={{ fontSize: '1.125rem', fontWeight: '700', color: '#1e293b' }}>Under 5 Mins</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Steps Column */}
          <div className="col-lg-6 order-lg-1">
            <div className="position-relative" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {/* Step 1 */}
              <ScrollReveal delay={0.1}>
                <div className="group position-relative" style={{
                  background: 'white',
                  padding: '32px',
                  borderRadius: '24px',
                  boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  border: '1px solid rgba(0, 0, 0, 0.05)'
                }}>
                  <div className="d-flex align-items-start" style={{ gap: '24px' }}>
                    <div style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '20px',
                      background: 'linear-gradient(135deg, #2F5C55 0%, #1e3f39 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      boxShadow: '0 8px 24px rgba(47, 92, 85, 0.3)',
                      position: 'relative'
                    }}>
                      <i className="fa-solid fa-user-plus" style={{ color: 'white', fontSize: '2rem' }}></i>
                      <div style={{
                        position: 'absolute',
                        top: '-8px',
                        right: '-8px',
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        background: '#F4A261',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: '700',
                        fontSize: '0.875rem',
                        color: 'white',
                        boxShadow: '0 4px 12px rgba(244, 162, 97, 0.4)'
                      }}>1</div>
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 className="cs_semibold mb-2" style={{ fontSize: '1.5rem', color: '#1e293b', lineHeight: '1.3' }}>Register Account</h3>
                      <p className="mb-0" style={{ color: '#64748b', lineHeight: '1.7', fontSize: '1rem' }}>Sign up for an owner account and set up your property profile with basic details in minutes.</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Step 2 */}
              <ScrollReveal delay={0.2}>
                <div className="group position-relative" style={{
                  background: 'white',
                  padding: '32px',
                  borderRadius: '24px',
                  boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  border: '1px solid rgba(0, 0, 0, 0.05)'
                }}>
                  <div className="d-flex align-items-start" style={{ gap: '24px' }}>
                    <div style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '20px',
                      background: 'linear-gradient(135deg, #F4A261 0%, #e08e4d 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      boxShadow: '0 8px 24px rgba(244, 162, 97, 0.3)',
                      position: 'relative'
                    }}>
                      <i className="fa-solid fa-boxes-stacked" style={{ color: 'white', fontSize: '2rem' }}></i>
                      <div style={{
                        position: 'absolute',
                        top: '-8px',
                        right: '-8px',
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        background: '#2F5C55',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: '700',
                        fontSize: '0.875rem',
                        color: 'white',
                        boxShadow: '0 4px 12px rgba(47, 92, 85, 0.4)'
                      }}>2</div>
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 className="cs_semibold mb-2" style={{ fontSize: '1.5rem', color: '#1e293b', lineHeight: '1.3' }}>Add Staff & Inventory</h3>
                      <p className="mb-0" style={{ color: '#64748b', lineHeight: '1.7', fontSize: '1rem' }}>Onboard your team members and list your inventory items to keep track of all assets seamlessly.</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Step 3 */}
              <ScrollReveal delay={0.3}>
                <div className="group position-relative" style={{
                  background: 'white',
                  padding: '32px',
                  borderRadius: '24px',
                  boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  border: '1px solid rgba(0, 0, 0, 0.05)'
                }}>
                  <div className="d-flex align-items-start" style={{ gap: '24px' }}>
                    <div style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '20px',
                      background: 'linear-gradient(135deg, #E8F3F1 0%, #d0e6e2 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      boxShadow: '0 8px 24px rgba(47, 92, 85, 0.15)',
                      position: 'relative'
                    }}>
                      <i className="fa-solid fa-calendar-check" style={{ color: '#2F5C55', fontSize: '2rem' }}></i>
                      <div style={{
                        position: 'absolute',
                        top: '-8px',
                        right: '-8px',
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        background: '#F4A261',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: '700',
                        fontSize: '0.875rem',
                        color: 'white',
                        boxShadow: '0 4px 12px rgba(244, 162, 97, 0.4)'
                      }}>3</div>
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 className="cs_semibold mb-2" style={{ fontSize: '1.5rem', color: '#1e293b', lineHeight: '1.3' }}>Manage Bookings</h3>
                      <p className="mb-0" style={{ color: '#64748b', lineHeight: '1.7', fontSize: '1rem' }}>Start accepting reservations, managing check-ins, and delighting your guests with ease.</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>

      {/* Add floating animation */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .group:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12) !important;
        }
      `}</style>
    </section>
  );
}
