import SortArticles from "./SortArticles";
import Topics from "./Topics";
import "../styling/SideBar.css";

function SideBar() {
    return (
        <div id="side-nav-bar">
            <div className="side-bar-content-wrapper">
                <h2>Browse by topic</h2>
                <Topics />
            </div>
            {location.pathname.startsWith("/article/") ? null : (
                <div className="side-bar-content-wrapper">
                    <h2>Sort</h2>
                    <SortArticles />
                </div>
            )}
        </div>
    );
}

export default SideBar;
