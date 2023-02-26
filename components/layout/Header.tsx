const Header = () => {
  return (
    <header className="header_section">
      <div className="container">
        <nav className="navbar navbar-expand-lg custom_nav-container ">
          <a className="navbar-brand" href="index.html">
            <span>Fanadesh</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
              <ul className="navbar-nav  ">
                <li className="nav-item active">
                  <a className="nav-link" href="index.html">
                    {" "}
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="about.html">
                    {" "}
                    About{" "}
                  </a>
                </li>

                <li className="nav-item ">
                  <a className="nav-link" href="admission.html">
                    {" "}
                    Admission{" "}
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="why.html">
                    {" "}
                    Why Us{" "}
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="contact.html">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
