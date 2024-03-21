const unitFactor: Record<string, number> = {
    'second': 1_000_000_000,
    'milli': 1_000_000,
    'micro': 1_000,
    'nano': 1
}

function convertTickToEpochMilli(tick: number, unit: string): number {
    if (unit in unitFactor) {
        return Math.trunc(tick * unitFactor[unit] / unitFactor['milli'])
    }

    throw new Error(`Unsupported unit: ${unit}`)
}

function convertEpochMilliToTick(milli: number, unit: string): number {
    if (unit in unitFactor) {
        return Math.trunc(milli * unitFactor['milli'] / unitFactor[unit])
    }

    throw new Error(`Unsupported unit: ${unit}`)
}

export {convertTickToEpochMilli, convertEpochMilliToTick}
