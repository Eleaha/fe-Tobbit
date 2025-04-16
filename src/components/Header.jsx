import { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { UserContext } from "../contexts/User";
import "../styling/Header.css";

function Header() {
    const { user } = useContext(UserContext);
    return (
        <header>
            <Link to="/articles" className="link">
                <h1>Tobbit</h1>
            </Link>
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
    viewTopics: PropTypes.bool,
    setViewTopics: PropTypes.func,
};

export default Header;
