function timestampToDate(timestamp) {
    const date = new Date(timestamp)
    return date.toString().slice(0, 21)
}

export {timestampToDate}