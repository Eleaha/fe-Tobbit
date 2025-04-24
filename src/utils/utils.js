function timestampToDate(timestamp) {
    const date = new Date(timestamp);
    return date.toString().slice(0, 21);
}

function formatPreviewText(text, nWords) {
    if (nWords === 0) {
        return "";
    }
    return text.split(" ").length < nWords
        ? text
        : text.split(" ").slice(0, nWords).join(" ") + "...";
}

export { timestampToDate, formatPreviewText };
