import Link from "next/link";

type HeaderProps = { headerPosition?: boolean };

const Header: React.FC<HeaderProps> = ({ headerPosition }) => {
  return (
    <header
      className="header_section"
      style={{
        position: headerPosition ? "absolute" : "static",
        backgroundColor: headerPosition ? "" : "#fdd31d",
      }}
    >
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
                  <Link className="nav-link" href="/">
                    Home <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link" href="/about">
                    About
                  </Link>
                </li>

                <li className="nav-item ">
                  <Link className="nav-link" href="/admission">
                    Admission
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" href="/why">
                    Why Us
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" href="/contact">
                    Contact Us
                  </Link>
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
