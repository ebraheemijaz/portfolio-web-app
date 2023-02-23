export const checkIfImage = (url) => {
    const img = new Image();
    img.src = url;
    // if (img.complete) return true;
    return new Promise((resolve) => {
        img.onerror = () => resolve(false);
        img.onload = () => resolve(true);
    });
}

export const daysLeft = (deadline) => {
    const diff = new Date(deadline).getTime() - Date.now();
    const remaining = diff / (1000 * 3600 * 24);
    return remaining.toFixed(0)
};

export const calculateBarPercentage = (goal, raisedAmount) => {
    const percentage = Math.round((raisedAmount * 100) / goal);
    return percentage;
};
