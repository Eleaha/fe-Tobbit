//sort bar
//topics
//liked articles

import SortArticles from "./SortArticles";
import Topics from "./Topics";
import "../styling/SideBar.css"

function SideBar() {

    return (
        <div id="side-nav-bar">
            <SortArticles />
            <h2>Borwse by topic</h2>
            <Topics/>
        </div>
    )
}

export default SideBar;