import SortArticles from "./SortArticles";
import Topics from "./Topics";
import { useContext } from "react";
import { ViewBrowseBarContext } from "../contexts/ViewBrowseBar";
import "../styling/BrowseBar.css";

function BrowseBar() {
    const {viewBrowseBar} = useContext(ViewBrowseBarContext)

    return (
        <div id="browse-bar" className={viewBrowseBar ? "show-browse-bar" : "hide-browse-bar"}>
            {!location.pathname.startsWith("/article/") && (
                <div className="browse-bar-content-wrapper">
                    <h2>Sort</h2>
                    <SortArticles />
                </div>
            )}
            <div className="browse-bar-content-wrapper">
                <h2>Browse by topic</h2>
                <Topics />
            </div>
        </div>
    );
}

export default BrowseBar;
