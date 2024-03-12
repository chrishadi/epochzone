import { render, screen } from '@testing-library/react'
import NanoDate from "./NanoDate"
import Epoch from './Epoch'

const date = new NanoDate()

beforeEach(() => render(<Epoch date={date}/>))

test('renders seconds from epoch', () => {
    const secondsElement = screen.getByText(date.getUnixSecond().toString())
    expect(secondsElement).toBeInTheDocument()
})

test('renders milli seconds from epoch', () => {
    const millisElement = screen.getByText(date.getTime().toString())
    expect(millisElement).toBeInTheDocument()
})

test('renders micro seconds from epoch', () => {
    const microsElement = screen.getByText(date.getUnixMicro().toString())
    expect(microsElement).toBeInTheDocument()
})

test('renders nano seconds from epoch', () => {
    const nanosElement = screen.getByText(date.getUnixNano().toString())
    expect(nanosElement).toBeInTheDocument()
})
