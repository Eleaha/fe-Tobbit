import "../styling/Loading.css"

function Loading() {
    return (
        <div className="loading-wrapper route">
            <h2>
                Loading
                <span className="loading-dot loading-dot1">.</span>
                <span className="loading-dot loading-dot2">.</span>
                <span className="loading-dot loading-dot3">.</span>
            </h2>
        </div>
    );
}

export default Loading;
