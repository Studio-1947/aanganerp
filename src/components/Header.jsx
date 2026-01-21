export default function Header() {
  return (
    <header className="cs_site_header cs_style_1 cs_type_1 cs_sticky_header cs_heading_color cs_heading_font position-relative !w-full !max-w-none">
      <div className="cs_main_header position-relative z-1 !w-full">
        <div className="container !max-w-[1800px] mx-auto px-4">
          <div className="cs_main_header_in position-relative">
            <div className="cs_header_shape position-absolute">
              <img src="/assets/img/header-shape-2.svg" alt="Header shape" />
            </div>
            <div className="cs_main_header_left position-relative z-1">
              <a className="cs_site_branding" href="index.html" aria-label="Home page link">
                <span className="cs_fs_24 cs_bold cs_heading_color">Aangan ERP</span>
              </a>
            </div>
            <div className="cs_main_header_center">
              <div className="cs_nav">
                <ul className="cs_nav_list">
                  <li><a href="#home" aria-label="Menu link">Home</a></li>
                  <li><a href="#features" aria-label="Menu link">Features</a></li>
                  <li><a href="#pricing" aria-label="Menu link">Pricing</a></li>
                  <li><a href="#contact" aria-label="Menu link">Contact</a></li>
                  {/* <li><a href="#" className="cs_heading_color">Owner Login</a></li> */}
                  {/* <li><a href="#" className="cs_heading_color">Staff Login</a></li> */}
                </ul>
              </div>
            </div>
            <div className="cs_main_header_right">
              <a href="#contact" aria-label="Register Interest" className="cs_btn cs_style_1 cs_bg_1 cs_fs_14 cs_bold cs_white_color text-uppercase">
                <span>Register Interest</span>
                <span className="cs_btn_icon"><i className="fa-solid fa-arrow-right"></i></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
