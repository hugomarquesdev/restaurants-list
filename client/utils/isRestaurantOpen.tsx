export function isRestaurantOpen(openTime: any, closeTime: any) {
    const currentTime = new Date();
    const [openHour, openMinutes = "0"] = openTime
        .split(/[:am|pm]/)
        .map(Number);
    const [closeHour, closeMinutes = "0"] = closeTime
        .split(/[:am|pm]/)
        .map(Number);

    const openDate = new Date(currentTime);
    openDate.setHours(openHour, openMinutes, 0);

    const closeDate = new Date(currentTime);
    if (closeHour < openHour) {
        // Handles cases where closing time is after midnight
        closeDate.setDate(closeDate.getDate() + 1);
    }
    closeDate.setHours(closeHour, closeMinutes, 0);

    return currentTime >= openDate && currentTime <= closeDate;
}
