import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const ViewBrowseBarContext = createContext();

export const ViewBrowseBarProvider = ({ children }) => {
    const [viewBrowseBar, setViewBrowseBar] = useState(false);

    return (
        <ViewBrowseBarContext.Provider value={{ viewBrowseBar, setViewBrowseBar }}>
            {children}
        </ViewBrowseBarContext.Provider>
    );
};

ViewBrowseBarProvider.propTypes = {
    children: PropTypes.object,
};
