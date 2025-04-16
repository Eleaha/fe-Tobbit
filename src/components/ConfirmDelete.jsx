import PropTypes from "prop-types";
import { useState } from "react";
import "../styling/ConfirmDelete.css";

function ConfirmDelete({ setShowDeleteConfirm, itemId, deleteFunc }) {
    const [error, setError] = useState(false);

    function handleYes() {
        setError(false);
        deleteFunc(itemId).catch(() => {
            setError(true);
        });
    }

    
    return (
        <div className="confirm-delete">
            <p>Are you sure you want to delete this?</p>
            <div className="confirm-button-wrapper">
                <button onClick={handleYes} className="confirm-delete-button styled-button">
                    Yes
                </button>
                <button
                    onClick={() => setShowDeleteConfirm(false)}
                    className="confirm-delete-button styled-button"
                >
                    No
                </button>
            </div>
            {error && <p>Something went wrong! Please refresh the page and try again.</p>}
        </div>
    );
}

ConfirmDelete.propTypes = {
    setShowDeleteConfirm: PropTypes.func,
    itemId: PropTypes.number,
    deleteFunc: PropTypes.func,
};

export default ConfirmDelete;
