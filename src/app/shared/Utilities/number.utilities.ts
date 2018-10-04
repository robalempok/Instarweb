export function getAverage(arr: number[]) {
    if (arr.length) {
        const sum = arr.reduce(function(a, b) { return a + b; });
        return sum / arr.length;
    }
    return 0;
}
