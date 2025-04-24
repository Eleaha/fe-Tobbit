import { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { UserContext } from "../contexts/User";
import "../styling/Header.css";
import { ViewBrowseBarContext } from "../contexts/ViewBrowseBar";

function Header() {
    const { user } = useContext(UserContext);
    const { setViewBrowseBar, viewBrowseBar } = useContext(ViewBrowseBarContext);

    function handleMenuClick() {
        setViewBrowseBar(!viewBrowseBar);
    }

    return (
        <header>
            <div className="left-header-content">
                <button onClick={handleMenuClick} className="menu-button">
                    {viewBrowseBar ? (
                        <span className="material-symbols-outlined menu-toggle-icon">
                            close
                        </span>
                    ) : (
                        <span className="material-symbols-outlined menu-toggle-icon">
                            menu
                        </span>
                    )}
                </button>
                <Link to="/articles" className="link">
                    <h1>Tobbit</h1>
                </Link>
            </div>
            {user && (
                <div className="header-user-info-wrapper">
                    <p>{user.username}</p>
                    <img className="header-profile-pic" src={user.avatar_url} />
                </div>
            )}
        </header>
    );
}

Header.propTypes = {
    viewBrowseBar: PropTypes.bool,
    setViewBrowseBar: PropTypes.func,
};

export default Header;
