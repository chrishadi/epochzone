import { ChangeEvent, MouseEvent, useState } from "react";
import { Button, TextField, ToggleButton, ToggleButtonGroup } from "@mui/material";
import DateTime from "./DateTime";
import Epoch from "./Epoch";
import NanoDate from "./NanoDate";
import { convertToEpochMilli } from "./conversion";
import './EpochConverter.css'

const unitFactor: Record<string, number> = {
    'second': 1_000_000_000,
    'milli': 1_000_000,
    'micro': 1_000,
    'nano': 1
}

function EpochConverter() {
    const [date, setDate] = useState(new NanoDate())
    const [unit, setUnit] = useState('second')
    const [inputText, setInputText] = useState(date.getUnixSecond().toString())

    const changeUnit = (_: MouseEvent<HTMLElement>, newUnit: string,) => {
        if (!newUnit || !inputText) {
            return
        }

        setUnit(newUnit)

        const value = Number(inputText)
        const milli = convertToEpochMilli(value, unit)
        setDate(new NanoDate(milli))

        const newValue = Math.trunc(milli * unitFactor['milli'] / unitFactor[newUnit])
        setInputText(newValue.toString())
    }

    const setDateFromInput = () => {
        if (!inputText) {
            return
        }

        const value = Number(inputText)
        const milli = convertToEpochMilli(value, unit)
        setDate(new NanoDate(milli))
    }

    return (
        <div className='EpochConverter'>
            <DateTime date={date}></DateTime>
            <Epoch date={date}></Epoch>
            <div className='EpochPanel'>
                <div className='EpochForm'>
                    <TextField
                        className='EpochForm-input'
                        type='number'
                        value={inputText}
                        onChange={(evt: ChangeEvent<HTMLInputElement>) => { setInputText(evt.target.value) }}
                    ></TextField>
                    <Button
                        className='EpochForm-button'
                        variant='contained'
                        onClick={setDateFromInput}
                    >Change</Button>
                </div>
                <div className='EpochUnit'>
                    <ToggleButtonGroup
                        color='primary'
                        value={unit}
                        exclusive
                        onChange={changeUnit}
                        aria-label='Unit'
                    >
                        <ToggleButton value="second">second</ToggleButton>
                        <ToggleButton value="milli">milli</ToggleButton>
                        <ToggleButton value="micro">&micro;icro</ToggleButton>
                        <ToggleButton value="nano">nano</ToggleButton>
                    </ToggleButtonGroup>
                </div>
            </div>
        </div>
    )
}

export default EpochConverter
