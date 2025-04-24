import { useState, useEffect } from "react";

function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);

        window.addEventListener("resizeWindow", handleResize);
        handleResize();

        return () => window.removeEventListener("resizeWindow", handleResize);
    }, []);

    return width;
}

export default useWindowWidth;