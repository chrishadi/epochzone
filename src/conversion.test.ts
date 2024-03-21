import { convertEpochMilliToTick, convertTickToEpochMilli } from "./conversion"

describe('convertTickToEpochMilli', () =>{
    test('from second to milli', () => {
        expect(convertTickToEpochMilli(1710646049, 'second')).toEqual(1710646049000)
    })

    test('from milli to milli', () => {
        expect(convertTickToEpochMilli(1710646049617, 'milli')).toEqual(1710646049617)
    })

    test('from micro to milli', () => {
        expect(convertTickToEpochMilli(1710646049617123, 'micro')).toEqual(1710646049617)
    })

    test('from nano to milli', () => {
        expect(convertTickToEpochMilli(1710646049617123456, 'nano')).toEqual(1710646049617)
    })
})

describe('convertEpochMilliToTick', () =>{
    test('from milli to second', () => {
        expect(convertEpochMilliToTick(1710646049617, 'second')).toEqual(1710646049)
    })

    test('from milli to milli', () => {
        expect(convertEpochMilliToTick(1710646049617, 'milli')).toEqual(1710646049617)
    })

    test('from milli to micro', () => {
        expect(convertEpochMilliToTick(1710646049617, 'micro')).toEqual(1710646049617000)
    })

    test('from milli to nano', () => {
        expect(convertEpochMilliToTick(1710646049617, 'nano')).toEqual(1710646049617000000)
    })
})
