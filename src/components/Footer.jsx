export default function Footer() {
  return (
    <div className="footerid">
      <div className="container">
        <footer className="cream foot">
          <div>
            <div className="logosfooterrr">
              <img src="/images/logo-montee.svg" alt="" />
            </div>

            <p
              className="small paragraphtexttt"
              style={{ margin: "8px 0 60px" }}
            >
              Building your dreams in real estate
            </p>
            <b className="paragraphtexttt">Subscribe to our news</b>
            <input
              type="email"
              className="paragraphtexttt"
              placeholder="Enter your email"
              aria-label="Email"
            />
            <span className="pill paragraphtexttt" role="button" tabIndex={0}>
              Subscribe
            </span>
          </div>

          <div>
            {["Home", "Our properties", "Our advantages", "Our services"].map(
              (l) => (
                <a
                  className="paragraphtexttt"
                  href="#"
                  key={l}
                  onClick={(e) => e.preventDefault()}
                >
                  {l}
                </a>
              ),
            )}
            <p className="small paragraphtexttt" style={{ marginTop: 80 }}>
              123 Zayed Road, Dubai Marina, Dubai, United Arab Emirates
            </p>
          </div>

          <div>
            <p className="paragraphtexttt">
              We are here to change your future.
            </p>
            <span className="pill paragraphtexttt" style={{ marginTop: 12 }}>
              Contact us
            </span>
          </div>

          <div className="legal paragraphtexttt">
            <span>© 2026 Monte Real Estate</span>
            <span>Terms of service · Privacy policy</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
