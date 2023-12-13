import "./Header.css"
function Header() {
    
    return(
        
        <header className="header">
        <div className="wrapper">
           <div className="header_wrapper">
            <div className="header_logo">
                <a href="/" className="header_logo_link">
                    <img src="" alt="plants" className="heder_logo_pink"/>
                </a>
            </div>
            <nav className="navbar">
                <div className="header_list">
                  <button className="button">
                           SIGN IN
                  </button>
                  <button className="button">
                           SIGN UP
                  </button>
                </div>
                <div className="header_nav_close">
                    <span className="header_close_line"></span>
                    <span className="header_close_line"></span>
                </div>
            </nav>
            <div className="header_burger burger">
                <span className="burger_line burger_line_1"></span>
                <span className="burger_line burger_line_2"></span>
                <span className="burger_line burger_line_3"></span>
                <span className="burger_line burger_line_4"></span>
            </div>
           </div>
        </div>
    </header>
    
    )
}
export default Header;