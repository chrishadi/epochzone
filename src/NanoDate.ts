class NanoDate extends Date {
    getUnixSecond():  number {
        return Math.trunc(this.getTime() / 1000)
    }

    getUnixMicro(): number {
        return this.getTime() * 1000
    }

    getUnixNano(): number {
        return this.getTime() * 1000000
    }
}

export default NanoDate
