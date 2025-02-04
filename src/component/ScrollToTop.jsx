import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Har safar sahifa o'zgarsa, yuqoriga chiqadi
    }, [pathname]);

    return null;
};

export default ScrollToTop;
