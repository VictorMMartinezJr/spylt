import { useMediaQuery } from "react-responsive";

const Footer = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <footer className="footer-section">
      <img
        src="/images/footer/footer-dip.png"
        alt="Footer Dip seperating reviews and footer sections"
        className="w-full object-cover -translate-y-1"
      />

      <div className="2xl:h-[110dvh] relative md:pt-[20vh] pt-[10vh]">
        <div className="overflow-hidden z-10">
          {/* Title */}
          <h2 className="general-title text-center text-milk py-5">
            #CHUGRESPONSIBLY
          </h2>
        </div>

        {!isMobile && (
          <video
            src="/videos/footer.mp4"
            autoPlay
            playsInline
            muted
            className="absolute top-0 object-contain mix-blend-lighten pointer-events-none"
          />
        )}
        {/* Social media icons row. */}
        <div className="flex-center gap-5 relative z-10 md:mt-20 mt-5">
          <div className="social-btn">
            <img src="./images/footer/yt.svg" alt="YouTube" />
          </div>
          <div className="social-btn">
            <img src="./images/footer/insta.svg" alt="Instagram" />
          </div>
          <div className="social-btn">
            <img src="./images/footer/tiktok.svg" alt="TikTok" />
          </div>
        </div>

        {/* links */}
        <div className="mt-40 md:px-10 px-5 flex gap-10 md:flex-row flex-col justify-between text-milk font-paragraph md:text-lg font-medium">
          <div className="flex items-center md:gap-16 gap-5">
            <div>
              <p>SPYLT Flavors</p>
            </div>
            <ul>
              <li>Chug Club</li>
              <li>Student Marketing</li>
              <li>Dairy Dealers</li>
            </ul>
            <ul>
              <li>Company</li>
              <li>Contacts</li>
              <li>Tasty Talk</li>
            </ul>
          </div>

          <div className="md:max-w-lg">
            <p>
              Get Exclusive Early Access and Stay Informed About Product
              Updates, Events, and More!
            </p>
            <form className="flex justify-between items-center border-b border-[#D9D9D9] py-5 md:mt-10">
              {/* The input field and arrow icon for newsletter signup. */}
              {/* A border at the bottom for a clean, modern look. */}
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full placeholder:font-sans placeholder:text-[#999999]"
              />
              <img src="/images/footer/arrow.svg" alt="arrow" />
            </form>
          </div>
        </div>

        <div className="copyright-box">
          {/* The final row with copyright and legal links. */}
          <p>&copy; 2026 Spylt - All Rights Reserved</p>
          <div className="flex items-center gap-7">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
