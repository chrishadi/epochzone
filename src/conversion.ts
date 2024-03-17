function convertToEpochMilli(value: number, unit: string): number {
    switch(unit) {
        case 'second':
            return 1_000 * value
        case 'milli':
            return value
        case 'micro':
            return Math.trunc(value/1_000)
        case 'nano':
            return Math.trunc(value/1_000_000)
    }

    return -1
}

export {convertToEpochMilli}
