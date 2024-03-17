import { convertToEpochMilli } from "./conversion"

test('convert second to milli', () => {
    expect(convertToEpochMilli(1710646049, 'second')).toEqual(1710646049000)
})

test('convert milli to milli', () => {
    expect(convertToEpochMilli(1710646049617, 'milli')).toEqual(1710646049617)
})

test('convert micro to milli', () => {
    expect(convertToEpochMilli(1710646049617123, 'micro')).toEqual(1710646049617)
})

test('convert nano to milli', () => {
    expect(convertToEpochMilli(1710646049617123456, 'nano')).toEqual(1710646049617)
})
