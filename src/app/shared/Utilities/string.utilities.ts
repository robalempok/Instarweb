export function ToTitleCase(value: string) {
    return value.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

export function getInitials(value: string) {
    const words = value.split(' ');

    let text: string;

    if (words.length > 1) {
      text = words[0].substring(0, 1) + words[1].substring(0, 1);
    } else {
      text = words[0].substring(0, 2);
    }
    return text.toUpperCase();
}
