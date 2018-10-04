export const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June',
'July', 'August', 'September', 'October', 'November', 'December'
];

export const WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export function getMonthName(month: number) {
    return MONTHS[month];
}

export function getWeekDayName(day: number) {
    return WEEKDAYS[day];
}

export function getDaysInMonth(date: Date) {
    return new Date(date.getFullYear(), date.getMonth(), 0).getDate();
}
