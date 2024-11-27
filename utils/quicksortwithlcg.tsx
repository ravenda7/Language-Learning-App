type User = {
    userId: string;
    userName: string;
    userImageSrc: string;
    points: number;
};

class LCG {
    private seed: number;
    private modulus: number;
    private multiplier: number;
    private increment: number;

    constructor(seed: number) {
        this.seed = seed;
        this.modulus = 2 ** 31 - 1;
        this.multiplier = 48271;
        this.increment = 0;
    }

    next() {
        this.seed = (this.multiplier * this.seed + this.increment) % this.modulus;
        return this.seed / this.modulus;
    }
}

const rng = new LCG(Date.now());

export function quickSort(arr: User[]): User[] {
    if (arr.length <= 1) return arr;

    const randomIndex = Math.floor(rng.next() * arr.length);
    const pivot = arr[randomIndex];

    const remainingArr = [...arr.slice(0, randomIndex), ...arr.slice(randomIndex + 1)];

    const left: User[] = [];
    const right: User[] = [];

    for (const user of remainingArr) {
        if (user.points > pivot.points) {
            left.push(user);
        } else {
            right.push(user);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}
