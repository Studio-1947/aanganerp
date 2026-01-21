import ScrollReveal from './ScrollReveal';

export default function DashboardShowcase() {
  return (
    <section className="position-relative" id="dashboard" style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)', padding: '120px 0' }}>
      <div className="container !max-w-[1800px] mx-auto px-4">
        {/* Centered Heading */}
        <div className="cs_section_heading cs_style_1 text-center mx-auto position-relative z-1" style={{ marginBottom: '80px' }}>
            <div className="cs_section_subtitle cs_fs_18 cs_heading_color cs_mb_22 justify-content-center">
              <img src="/assets/img/icons/star-1.svg" alt="Star icon" />
              <span>Owner Dashboard</span>
              <img src="/assets/img/icons/star-1.svg" alt="Star icon" />
            </div>
            <ScrollReveal>
                <h2 className="cs_section_title cs_fs_48 cs_semibold mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: '1.2' }}>Complete Visibility of Your Business</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
                <p className="m-auto" style={{ maxWidth: '600px', fontSize: '1.125rem', color: '#64748b', lineHeight: '1.7' }}>Track occupancy, revenue, and guest satisfaction in real-time. Make data-driven decisions to grow your homestay.</p>
            </ScrollReveal>
        </div>

        <div className="row position-relative z-1 align-items-center" style={{ gap: '0' }}>
          {/* Image Column */}
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="position-relative">
              {/* Decorative Elements */}
              <div className="position-absolute" style={{ 
                top: '-20px', 
                left: '-20px', 
                width: '100%', 
                height: '100%', 
                background: 'linear-gradient(135deg, rgba(244, 162, 97, 0.08) 0%, rgba(47, 92, 85, 0.08) 100%)',
                borderRadius: '32px',
                zIndex: -1,
                transform: 'rotate(-3deg)'
              }}></div>
              
              <ScrollReveal className="position-relative" style={{ 
                display: 'flex', 
                justifyContent: 'center',
                filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.15))'
              }}>
                <img 
                  src="/assets/img/dashboard-analytics-gen.png" 
                  alt="Owner Dashboard Analytics" 
                  className="rounded-3xl" 
                  style={{ 
                    width: '100%',
                    maxWidth: '600px',
                    borderRadius: '28px',
                    objectFit: 'cover'
                  }}
                />
              </ScrollReveal>
            </div>
          </div>
          
          {/* Features Column */}
          <div className="col-lg-6">
            <div className="position-relative" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {/* Feature 1: Real-time Analytics */}
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
                      width: '70px',
                      height: '70px',
                      borderRadius: '18px',
                      background: 'linear-gradient(135deg, #2F5C55 0%, #1e3f39 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      boxShadow: '0 8px 24px rgba(47, 92, 85, 0.25)',
                      position: 'relative'
                    }}>
                      <i className="fa-solid fa-chart-line" style={{ color: 'white', fontSize: '1.75rem' }}></i>
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 className="cs_semibold mb-2" style={{ fontSize: '1.375rem', color: '#1e293b', lineHeight: '1.3' }}>Real-time Analytics</h3>
                      <p className="mb-0" style={{ color: '#64748b', lineHeight: '1.7', fontSize: '1rem' }}>Instant access to daily, weekly, and monthly performance reports with interactive charts and insights.</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Feature 2: Financial Oversight */}
              <ScrollReveal delay={0.4}>
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
                      width: '70px',
                      height: '70px',
                      borderRadius: '18px',
                      background: 'linear-gradient(135deg, #F4A261 0%, #e08e4d 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      boxShadow: '0 8px 24px rgba(244, 162, 97, 0.25)',
                      position: 'relative'
                    }}>
                      <i className="fa-solid fa-wallet" style={{ color: 'white', fontSize: '1.75rem' }}></i>
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 className="cs_semibold mb-2" style={{ fontSize: '1.375rem', color: '#1e293b', lineHeight: '1.3' }}>Financial Oversight</h3>
                      <p className="mb-0" style={{ color: '#64748b', lineHeight: '1.7', fontSize: '1rem' }}>Track expenses, revenue, and profitability effortlessly with automated reports and forecasting.</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Feature 3: Guest Insights */}
              <ScrollReveal delay={0.5}>
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
                      width: '70px',
                      height: '70px',
                      borderRadius: '18px',
                      background: 'linear-gradient(135deg, #E8F3F1 0%, #d0e6e2 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      boxShadow: '0 8px 24px rgba(47, 92, 85, 0.15)',
                      position: 'relative'
                    }}>
                      <i className="fa-solid fa-user-check" style={{ color: '#2F5C55', fontSize: '1.75rem' }}></i>
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 className="cs_semibold mb-2" style={{ fontSize: '1.375rem', color: '#1e293b', lineHeight: '1.3' }}>Guest Insights</h3>
                      <p className="mb-0" style={{ color: '#64748b', lineHeight: '1.7', fontSize: '1rem' }}>Monitor guest satisfaction scores, reviews, and feedback to continuously improve your service.</p>
                    </div>
                  </div>
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
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12) !important;
        }
      `}</style>
    </section>
  );
}
