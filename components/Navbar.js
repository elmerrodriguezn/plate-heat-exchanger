import Link from "next/link";

const Navbar = () => (
  <nav className="navbar fixed-top navbar-expand-lg navbar-dark custom-navbar">
    <Link href="/">
      <a className="navbar-brand">
        <img src="https://www.paulmueller.com/hs-fs/hubfs/2017/Home/PMC_FINAL_LOGO_2018.jpg?width=181&name=PMC_FINAL_LOGO_2018.jpg" />
      </a>
    </Link>

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link href="/contact">
            <a className="btn btn-primary-custom">Solicitar cotización</a>
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);
export default Navbar;
