const Footer = () => {
  return (
    <>
      <section className="info_section layout_padding-top">
        <div className="info_logo-box">
          <h2>Fanadesh</h2>
        </div>
        <div className="container layout_padding2">
          <div className="row">
            <div className="col-md-3">
              <h5>About Us</h5>
              <p>
                dolor sit amet, consectetur magna aliqua. Ut enim ad minim
                veniam, quisdotempor incididunt r
              </p>
            </div>
            <div className="col-md-3">
              <h5>Useful Link</h5>
              <ul>
                <li>
                  <a href="">Video games</a>
                </li>
                <li>
                  <a href="">Remote control</a>
                </li>
                <li>
                  <a href="">3d controller</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>Contact Us</h5>
              <p>
                dolor sit amet, consectetur magna aliqua. quisdotempor
                incididunt ut e
              </p>
            </div>
            <div className="col-md-3">
              <div className="subscribe_container">
                <h5>Newsletter</h5>
                <div className="form_container">
                  <form action="">
                    <input type="email" placeholder="Enter your email" />
                    <button type="submit">Subscribe</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="social_container">
            <div className="social-box">
              <a href="">
                <picture>
                  <img src="/static/images/fb.png" alt="" />
                </picture>
              </a>

              <a href="">
                <picture>
                  <img src="/static/images/twitter.png" alt="" />
                </picture>
              </a>
              <a href="">
                <picture>
                  <img src="/static/images/linkedin.png" alt="" />
                </picture>
              </a>
              <a href="">
                <picture>
                  <img src="/static/images/instagram.png" alt="" />
                </picture>
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer className="container-fluid footer_section">
        <p>
          Copyright &copy; 2019 All Rights Reserved By
          <a href="https://html.design/">Free Html Templates</a>
        </p>
      </footer>
    </>
  );
};

export default Footer;
