import NanoDate from './NanoDate'

describe('NanoDate is just a Date with helper methods', () => {
    const date = new NanoDate()

    test('getUnixSecond divides the milliseconds by a thousand', () => {
        expect(date.getUnixSecond()).toEqual(Math.trunc(date.getTime()/1_000))
    })

    test('getUnixMicro multiplies the milliseconds by a thousand', () => {
        expect(date.getUnixMicro()).toEqual(date.getTime()*1_000)
    })

    test('getUnixNano multiplies the milliseconds by a million', () => {
        expect(date.getUnixNano()).toEqual(date.getTime()*1_000_000)
    })
})
