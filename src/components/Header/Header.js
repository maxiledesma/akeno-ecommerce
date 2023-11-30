import TopHeader from "./TopHeader/TopHeader";
import NavBar from "./NavBar/NavBar";
import CartWidget from "./CartWidget/CartWidget";

function Header() {
    return <header className="akeno-header mb-4 has-background-grey-lighter">
            <div className="container header-top pt-4 pb-4">
                <TopHeader/>
            </div>
            <div className="has-background-grey-light">
                <div className="container">
                    <nav className="navbar has-background-grey-light" role="navigation" aria-label="main navigation">
                        <div className="navbar-brand">
                              <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="NavigationMenu">
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                            </a>
                        </div>
                        <div id="NavigationMenu" className="navbar-menu">
                            <NavBar/>
                            <CartWidget/>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
}

export default Header;