import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import PropTypes from "prop-types";
import "../styling/SortArticles.css";

function SortArticles() {
    const [sortCategory, setSortCategory] = useState("created_at");
    const [order, setOrder] = useState("desc");

    const navigate = useNavigate();
    const location = useLocation();
    const params = new URLSearchParams(location.search);

    function handleSortChange(e) {
        setSortCategory(e.target.value);
        params.set("sort_category", e.target.value);
        navigate(`/articles?${params.toString()}`, { replace: true });
    }

    function handleClick() {
        if (order === "desc") {
            setOrder("asc");
            params.set("order", "asc");
            navigate(`/articles?${params.toString()}`, { replace: true });
        } else {
            setOrder("desc");
            params.set("order", "desc");
            navigate(`/articles?${params.toString()}`, { replace: true });
        }
    }

    return (
        <section className="sort-container">
            <label htmlFor="order-select" />
            <select
                id="order-select"
                className="sort-dropdown"
                value={sortCategory}
                onChange={handleSortChange}
            >
                <option value="created_at">Date posted</option>
                <option value="comment_count">Number of comments</option>
                <option value="votes">Votes</option>
            </select>
            <button className={`order-toggle ${order}`} onClick={handleClick}>
                {order === "desc" ? (
                    <span className="material-symbols-outlined order-symbol">arrow_downward</span>
                ) : (
                    <span className="material-symbols-outlined order-symbol">arrow_upward</span>
                )}
            </button>
        </section>
    );
}

SortArticles.propTypes = {
    setSortCategory: PropTypes.func,
    setOrder: PropTypes.func,
};

export default SortArticles;
