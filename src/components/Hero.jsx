import ScrollReveal from './ScrollReveal';

export default function Hero() {
  return (
    <section className="cs_hero cs_style_2 cs_bg_filed position-relative !w-full !max-w-none bg-cover bg-center !pb-0 !mb-0" style={{backgroundImage: 'url(/assets/img/hero-bg-2.jpg)'}}>
      <div className="container !max-w-[1800px] mx-auto px-4"> {/* Fix: Enforce 1800px width to match header */}
        <div className="cs_hero_text text-center position-relative">
          <p className="cs_hero_subtitle cs_heading_color cs_heading_font cs_mb_18 text-center">
            <span className="cs_theme_color_4">
              <img src="/assets/img/icons/star-1.svg" alt="Star icon" />
            </span>
            <span>Homestay Management System</span>
            <span className="cs_theme_color_4">
              <img src="/assets/img/icons/star-1.svg" alt="Star icon" />
            </span>
          </p>
          <ScrollReveal>
             <h1 className="cs_hero_title cs_fs_64 cs_mb_20">Aangan ERP: Simplify Your <br /> Homestay Operations</h1>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
             <p className="cs_hero_desc cs_mb_26">A comprehensive SaaS solution designed for homestay owners and staff.<br />Manage bookings, inventory, and staff effortlessly.</p>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="cs_btns_group">
              <a href="#contact" aria-label="Register Interest" className="cs_btn cs_style_1 cs_fs_16 cs_bold cs_heading_color cs_gray_bg_2 text-uppercase">
                <span>Register Interest</span>
                <span className="cs_btn_icon"><i className="fa-solid fa-arrow-right"></i></span>
              </a>
              <a href="#features" aria-label="Learn More" className="cs_btn cs_style_1 cs_fs_16 cs_bold cs_heading_color cs_white_bg text-uppercase">
                <span>Learn More</span>
                <span className="cs_btn_icon"><i className="fa-solid fa-arrow-right"></i></span>
              </a>
            </div>
            
            {/* Dashboard Preview - Laptop Style Half-Overlap */}
            <style>
              {`
                .cs_dashboard_lap {
                  margin-top: 2rem; /* Mobile default (mt-8) */
                }
                @media (min-width: 1024px) {
                  .cs_dashboard_lap {
                    margin-top: -200px;
                  }
                }
                @media (min-width: 1280px) {
                  .cs_dashboard_lap {
                    margin-top: -300px;
                  }
                }
              `}
            </style>
            <div className="cs_dashboard_lap relative z-10 perspective-[2000px] flex justify-center translate-y-[50%]">
              <div className="relative w-[90%] md:w-[80%] lg:w-[75%] transform-style-3d rotate-x-6 transition-transform duration-700 hover:rotate-x-0 group">
                {/* Laptop Screen Frame - Slim Border & Curvy */}
                <div className="relative bg-[#1a1a1a] rounded-[1.5rem] p-[4px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] ring-1 ring-white/10 border border-gray-800">
                   {/* Reflection/Gloss */}
                   <div className="absolute top-0 left-0 w-full h-[40%] bg-gradient-to-b from-white/10 to-transparent rounded-t-[1.2rem] pointer-events-none z-20 opacity-50"></div>
                   
                   {/* The Image */}
                   <img 
                     src="/hero2.png" 
                     alt="Aangan ERP Dashboard" 
                     className="w-full h-auto rounded-[1.2rem] shadow-inner bg-black block"
                   />
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div className="cs_hero_shape_1 position-absolute">
            <img src="/assets/img/hero-shape-1.svg" alt="Shape" />
          </div>
        </div>
        <div className="cs_hero_shape_2 position-absolute">
          <img src="/assets/img/hero-shape-2.svg" alt="Shape" />
        </div>
      </div>
    </section>
  );
}
