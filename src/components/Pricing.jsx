import ScrollReveal from './ScrollReveal';

export default function Pricing() {
  return (
    <section className="cs_gray_bg_2 position-relative" id="pricing">
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container !max-w-[1800px] mx-auto px-4">
        <div className="cs_section_heading cs_style_1 cs_mb_47 cs_center_column text-center position-relative z-1">
          <div className="cs_section_subtitle cs_fs_18 cs_heading_color cs_mb_22">
            <img src="/assets/img/icons/star-1.svg" alt="Star icon" />
            <span>Pricing Plan</span>
            <img src="/assets/img/icons/star-1.svg" alt="Star icon" />
          </div>
          <ScrollReveal>
             <h2 className="cs_section_title cs_fs_48 cs_semibold mb-0">Transparent Pricing for <br /> Every Stage</h2>
          </ScrollReveal>
        </div>
        <div className="cs_pricing_wrapper z-1">
          <div className="row cs_gap_y_30 align-items-center justify-content-center">
            <div className="col-lg-4 col-md-6">
              <ScrollReveal delay={0.1} className="cs_pricing_plan cs_style_1 cs_white_bg cs_radius_20">
                <h3 className="cs_pricing_title cs_fs_24 cs_semibold cs_mb_20">Starter</h3>
                <div className="cs_price cs_fs_48 cs_bold cs_mb_30">Free</div>
                <p className="cs_pricing_desc cs_mb_30">Perfect for small homestays just getting started.</p>
                <ul className="cs_list cs_style_1 cs_mb_40 cs_mp_0">
                  <li>
                    <i className="fa-solid fa-circle-check cs_theme_color_2"></i>
                    <span>Up to 5 Rooms</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check cs_theme_color_2"></i>
                    <span>Basic Booking Calendar</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check cs_theme_color_2"></i>
                    <span>Basic Reports</span>
                  </li>
                </ul>
                <a href="#contact" className="cs_btn cs_style_1 cs_fs_16 cs_bold cs_heading_color cs_gray_bg_2 w-100 text-uppercase">
                  <span>Get Started</span>
                </a>
              </ScrollReveal>
            </div>
            <div className="col-lg-4 col-md-6">
              <ScrollReveal delay={0.2} className="cs_pricing_plan cs_style_1 cs_accent_bg cs_radius_20 active">
                <div className="cs_pricing_badge cs_fs_14 cs_white_color cs_mb_27">Most Popular</div>
                <h3 className="cs_pricing_title cs_fs_24 cs_semibold cs_white_color cs_mb_20">Growth</h3>
                <div className="cs_price cs_fs_48 cs_bold cs_white_color cs_mb_30">
                  ₹999<span className="cs_fs_18 cs_normal">/month</span>
                </div>
                <p className="cs_pricing_desc cs_white_color cs_opacity_8 cs_mb_30">For growing homestays needing more control.</p>
                <ul className="cs_list cs_style_1 cs_white_color cs_opacity_8 cs_mb_40 cs_mp_0">
                  <li>
                    <i className="fa-solid fa-circle-check cs_theme_color_5"></i>
                    <span>Up to 20 Rooms</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check cs_theme_color_5"></i>
                    <span>Advanced Booking System</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check cs_theme_color_5"></i>
                    <span>Inventory Management</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check cs_theme_color_5"></i>
                    <span>Waitlist Management</span>
                  </li>
                </ul>
                <a href="#contact" className="cs_btn cs_style_1 cs_fs_16 cs_bold cs_heading_color cs_white_bg w-100 text-uppercase">
                  <span>Get Started</span>
                </a>
              </ScrollReveal>
            </div>
            <div className="col-lg-4 col-md-6">
              <ScrollReveal delay={0.3} className="cs_pricing_plan cs_style_1 cs_white_bg cs_radius_20">
                <h3 className="cs_pricing_title cs_fs_24 cs_semibold cs_mb_20">Pro</h3>
                <div className="cs_price cs_fs_48 cs_bold cs_mb_30">
                  ₹2499<span className="cs_fs_18 cs_normal">/month</span>
                </div>
                <p className="cs_pricing_desc cs_mb_30">Complete solution for large or multiple properties.</p>
                <ul className="cs_list cs_style_1 cs_mb_40 cs_mp_0">
                  <li>
                    <i className="fa-solid fa-circle-check cs_theme_color_2"></i>
                    <span>Unlimited Rooms</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check cs_theme_color_2"></i>
                    <span>Staff Mobile App</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check cs_theme_color_2"></i>
                    <span>Advanced Analytics</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check cs_theme_color_2"></i>
                    <span>Priority Support</span>
                  </li>
                </ul>
                <a href="#contact" className="cs_btn cs_style_1 cs_fs_16 cs_bold cs_heading_color cs_gray_bg_2 w-100 text-uppercase">
                  <span>Get Started</span>
                </a>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
  );
}
