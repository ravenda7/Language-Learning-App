type User = {
    userId: string;
    userName: string;
    userImageSrc: string;
    points: number;
};

export function quickSort(arr: User[]): User[] {
    if (arr.length <= 1) return arr;

    // Select a random index for the pivot
    const randomIndex = Math.floor(Math.random() * arr.length);
    const pivot = arr[randomIndex];

    // Remove the pivot from the array
    const remainingArr = [...arr.slice(0, randomIndex), ...arr.slice(randomIndex + 1)];

    const left: User[] = [];
    const right: User[] = [];

    // Partition the array into left and right based on the pivot
    for (const user of remainingArr) {
        if (user.points > pivot.points) {
            left.push(user);
        } else {
            right.push(user);
        }
    }

    // Return combined sorted arrays
    return [...quickSort(left), pivot, ...quickSort(right)];
}