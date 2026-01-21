import ScrollReveal from './ScrollReveal';

export default function Features() {
  return (
    <section className="position-relative" id="features">
      {/* Spacer to accommodate the overlapping Hero dashboard image (~400px overlap) */}
      <div className="d-lg-none"></div>
      <div className="d-none d-lg-block" style={{ height: '50px' }}></div>
      <div className="container !max-w-[1800px] mx-auto px-4">
        <div className="cs_section_heading cs_style_1 cs_mb_47 cs_center_column text-center position-relative z-1">
          <div className="cs_section_subtitle cs_fs_18 cs_heading_color cs_mb_22">
            <img src="/assets/img/icons/star-1.svg" alt="Star icon" />
            <span>Powerful Features</span>
            <img src="/assets/img/icons/star-1.svg" alt="Star icon" />
          </div>
          <ScrollReveal>
             <h2 className="cs_section_title cs_fs_48 cs_semibold mb-0">Everything You Need to Run <br /> Your Homestay</h2>
          </ScrollReveal>
        </div>
        <div className="cs_features_items_wrapper position-relative z-1">
          <div className="cs_feature_item cs_radius_20 cs_bg_filed" style={{backgroundImage: 'url(/assets/img/feature-item-bg.svg)'}}>
            <h3 className="cs_fs_36 cs_semibold cs_white_color cs_mb_40">Streamline your operations <br /> and grow your business</h3>
            <a href="#contact" aria-label="Register Interest" className="cs_btn cs_style_1 cs_fs_14 cs_bold cs_white_color text-uppercase">
              <span>Register Interest</span>
              <span className="cs_btn_icon"><i className="fa-solid fa-arrow-right"></i></span>
            </a>
          </div>
          <div className="cs_feature_item cs_white_bg cs_radius_20">
            <span className="cs_feature_icon cs_center cs_radius_12 cs_mb_15">
              <i className="fa-solid fa-calendar-check cs_fs_40 cs_accent_color"></i>
            </span>
            <h3 className="cs_fs_24 cs_semibold cs_mb_6">
              <a href="#" aria-label="Feature details">Booking Management</a>
            </h3>
            <ul className="cs_features_list cs_mp_0">
              <li>
                <img src="/assets/img/icons/caret-icon.svg" alt="Icon" />
                <span>Calendar View</span>
              </li>
              <li>
                <img src="/assets/img/icons/caret-icon.svg" alt="Icon" />
                <span>Guest CRM</span>
              </li>
              <li>
                <img src="/assets/img/icons/caret-icon.svg" alt="Icon" />
                <span>Online Reservations</span>
              </li>
              <li>
                <img src="/assets/img/icons/caret-icon.svg" alt="Icon" />
                <span>Automated Emails</span>
              </li>
            </ul>
          </div>
          <div className="cs_feature_item cs_white_bg cs_radius_20">
            <span className="cs_feature_icon cs_center cs_bg_1 cs_radius_12 cs_mb_15">
              <i className="fa-solid fa-boxes-stacked cs_fs_40 cs_accent_color"></i>
            </span>
            <h3 className="cs_fs_24 cs_semibold cs_mb_6">
              <a href="#" aria-label="Feature details">Inventory Control</a>
            </h3>
            <ul className="cs_features_list cs_mp_0">
              <li>
                <img src="/assets/img/icons/caret-icon.svg" alt="Icon" />
                <span>Stock Tracking</span>
              </li>
              <li>
                <img src="/assets/img/icons/caret-icon.svg" alt="Icon" />
                <span>Supplier Management</span>
              </li>
              <li>
                <img src="/assets/img/icons/caret-icon.svg" alt="Icon" />
                <span>Low Stock Alerts</span>
              </li>
              <li>
                <img src="/assets/img/icons/caret-icon.svg" alt="Icon" />
                <span>Asset Management</span>
              </li>
            </ul>
          </div>
          <div className="cs_feature_item cs_white_bg cs_radius_20">
            <span className="cs_feature_icon cs_bg_2 cs_center cs_radius_12 cs_mb_15">
              <i className="fa-solid fa-users-gear cs_fs_40 cs_accent_color"></i>
            </span>
            <h3 className="cs_fs_24 cs_semibold cs_mb_6">
              <a href="#" aria-label="Feature details">Staff Management</a>
            </h3>
            <ul className="cs_features_list cs_mp_0">
              <li>
                <img src="/assets/img/icons/caret-icon.svg" alt="Icon" />
                <span>Role-based Access</span>
              </li>
              <li>
                <img src="/assets/img/icons/caret-icon.svg" alt="Icon" />
                <span>Task Assignment</span>
              </li>
              <li>
                <img src="/assets/img/icons/caret-icon.svg" alt="Icon" />
                <span>Attendance Tracking</span>
              </li>
              <li>
                <img src="/assets/img/icons/caret-icon.svg" alt="Icon" />
                <span>Staff Performance</span>
              </li>
            </ul>
          </div>
          <div className="cs_feature_item cs_white_bg cs_radius_20">
            <span className="cs_feature_icon cs_bg_3 cs_center cs_radius_12 cs_mb_15">
              <i className="fa-solid fa-chart-line cs_fs_40 cs_accent_color"></i>
            </span>
            <h3 className="cs_fs_24 cs_semibold cs_mb_6">
              <a href="#" aria-label="Feature details">Financial Reporting</a>
            </h3>
            <ul className="cs_features_list cs_mp_0">
              <li>
                <img src="/assets/img/icons/caret-icon.svg" alt="Icon" />
                <span>Expense Tracking</span>
              </li>
              <li>
                <img src="/assets/img/icons/caret-icon.svg" alt="Icon" />
                <span>Revenue Reports</span>
              </li>
              <li>
                <img src="/assets/img/icons/caret-icon.svg" alt="Icon" />
                <span>Invoicing</span>
              </li>
              <li>
                <img src="/assets/img/icons/caret-icon.svg" alt="Icon" />
                <span>Tax Management</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="cs_feature_shape_1 position-absolute">
        <img src="/assets/img/3d-shape.png" alt="Vector shape" />
      </div>
      <div className="cs_feature_shape_2 position-absolute">
        <img src="/assets/img/spring-shape.png" alt="Spring shape" />
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
  );
}
