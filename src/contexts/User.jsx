import { createContext, useEffect, useState } from "react";
import { getUser } from "../utils/api-interactions";
import PropTypes from "prop-types";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [username] = useState("cooljmessy");
    const [user, setUser] = useState();

    useEffect(() => {
        getUser(username).then(({ data }) => {
            setUser(data.user);
        });
    }, [username]);

    return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

UserProvider.propTypes = {
    children: PropTypes.object,
};
