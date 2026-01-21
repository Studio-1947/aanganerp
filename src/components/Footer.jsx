export default function Footer() {
  return (
    <footer className="cs_footer cs_style_1 cs_heading_color">
      <div className="cs_footer_logo_wrap position-relative" style={{backgroundImage: 'url(/assets/img/footer-bg.svg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        {/* Dark overlay for better text contrast */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          zIndex: 0
        }}></div>
        
        {/* <div className="cs_footer_brand position-relative" id="contact" style={{ zIndex: 1 }}>
          <h2 className="cs_footer_brand_title cs_fs_100 cs_bold cs_white_color mb-0 text-center" style={{ textShadow: '0 4px 12px rgba(0, 0, 0, 0.8), 0 2px 4px rgba(0, 0, 0, 0.6)' }}>Homestay ERP</h2>
          <p className="cs_footer_brand_subtitle cs_fs_24 cs_white_color text-center mb-0" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.8), 0 1px 3px rgba(0, 0, 0, 0.6)' }}>Simplify Your Homestay Operations</p>
        </div> */}
      </div>
      <div className="cs_footer_main" style={{ background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)', padding: '80px 0 40px' }}>
        <div className="container !max-w-[1800px] mx-auto px-4">
          <div className="row cs_gap_y_40 justify-content-between">
            {/* Contact Information */}
            <div className="col-lg-4">
              <div className="cs_footer_widget cs_text_widget">
                <h2 className="cs_widget_title cs_fs_24 cs_semibold mb-4" style={{ color: '#1e293b' }}>Contact Us</h2>
                <ul className="cs_menu_widget cs_mp_0" style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '12px',
                      background: 'linear-gradient(135deg, #2F5C55 0%, #1e3f39 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <i className="fa-solid fa-location-dot" style={{ color: 'white', fontSize: '1.125rem' }}></i>
                    </div>
                    <div style={{ flex: 1, paddingTop: '8px' }}>
                      <p className="mb-0" style={{ color: '#64748b', lineHeight: '1.6' }}>Mirik, Darjeeling</p>
                    </div>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '12px',
                      background: 'linear-gradient(135deg, #F4A261 0%, #e08e4d 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <i className="fa-solid fa-envelope" style={{ color: 'white', fontSize: '1.125rem' }}></i>
                    </div>
                    <div style={{ flex: 1, paddingTop: '8px' }}>
                      <a href="mailto:aangan@1947.io" style={{ color: '#64748b', textDecoration: 'none', lineHeight: '1.6' }}>aangan@1947.io</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-lg-4">
              <div className="cs_footer_widget cs_text_widget">
                <h2 className="cs_widget_title cs_fs_24 cs_semibold mb-4" style={{ color: '#1e293b' }}>Quick Links</h2>
                <ul className="cs_menu_widget cs_mp_0" style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <li><a href="#features" style={{ color: '#64748b', textDecoration: 'none', transition: 'color 0.3s' }}>Features</a></li>
                  <li><a href="#dashboard" style={{ color: '#64748b', textDecoration: 'none', transition: 'color 0.3s' }}>Owner Dashboard</a></li>
                  <li><a href="#mobile-app" style={{ color: '#64748b', textDecoration: 'none', transition: 'color 0.3s' }}>Staff Mobile App</a></li>
                  <li><a href="#pricing" style={{ color: '#64748b', textDecoration: 'none', transition: 'color 0.3s' }}>Pricing</a></li>
                  <li><a href="#" style={{ color: '#64748b', textDecoration: 'none', transition: 'color 0.3s' }}>Privacy Policy</a></li>
                </ul>
              </div>
            </div>

            {/* Newsletter */}
            <div className="col-lg-4">
              <div className="cs_footer_widget cs_newsletter_widget">
                <h2 className="cs_widget_title cs_fs_24 cs_semibold mb-4" style={{ color: '#1e293b' }}>Stay Updated</h2>
                <p className="mb-3" style={{ color: '#64748b', lineHeight: '1.6' }}>Subscribe to get the latest updates and features.</p>
                <form className="cs_newsletter_form" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <input 
                    type="email" 
                    className="cs_form_field" 
                    placeholder="Enter your email" 
                    style={{
                      padding: '14px 16px',
                      borderRadius: '12px',
                      border: '1px solid #e2e8f0',
                      fontSize: '0.95rem',
                      outline: 'none',
                      transition: 'all 0.3s'
                    }}
                  />
                  <button 
                    type="submit"
                    className="cs_btn cs_style_1 cs_fs_14 cs_bold text-uppercase" 
                    style={{
                      background: 'linear-gradient(135deg, #2F5C55 0%, #1e3f39 100%)',
                      color: 'white',
                      padding: '14px 24px',
                      borderRadius: '12px',
                      border: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      cursor: 'pointer',
                      transition: 'all 0.3s'
                    }}
                  >
                    <span>Subscribe</span>
                    <span className="cs_btn_icon"><i className="fa-solid fa-arrow-right"></i></span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="cs_copyright text-center" style={{ background: '#1e293b', padding: '24px 0' }}>
        <div className="container !max-w-[1800px] mx-auto px-4">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
            <p className="mb-0" style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.95rem' }}>
              © {new Date().getFullYear()} Homestay ERP. All rights reserved.
            </p>
            <p className="mb-0" style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.875rem' }}>
              An initiative by <a href="https://1947.io" target="_blank" rel="noopener noreferrer" style={{ color: '#F4A261', textDecoration: 'none', fontWeight: '600' }}>Studio 1947</a>
            </p>
          </div>
        </div>
      </div>

      {/* Hover Styles */}
      <style>{`
        .cs_menu_widget a:hover {
          color: #2F5C55 !important;
        }
        .cs_newsletter_form input:focus {
          border-color: #2F5C55;
          box-shadow: 0 0 0 3px rgba(47, 92, 85, 0.1);
        }
        .cs_newsletter_form button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(47, 92, 85, 0.3);
        }
      `}</style>
    </footer>
  );
}
