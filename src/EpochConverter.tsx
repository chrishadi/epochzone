import { ChangeEvent, MouseEvent, useState } from "react";
import { Button, TextField, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DateTimeValidationError, LocalizationProvider, PickerChangeHandlerContext } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
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

    const onDateTimePickerChange = (
        val: dayjs.Dayjs | null,
        context: PickerChangeHandlerContext<DateTimeValidationError>
    ) => {
        if (!context.validationError && val) {
            setDate(new NanoDate(val.toDate()))
        }
    }

    const setDateFromInput = () => {
        if (!inputText) {
            return
        }

        const value = Number(inputText)
        const milli = convertToEpochMilli(value, unit)
        setDate(new NanoDate(milli))
    }

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

    return (
        <div className='EpochConverter'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                    views={['year', 'month', 'day', 'hours', 'minutes', 'seconds']}
                    minDate={dayjs(0)}
                    value={dayjs(date)}
                    onChange={onDateTimePickerChange}
                ></DateTimePicker>
            </LocalizationProvider>
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
                    >Apply</Button>
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
