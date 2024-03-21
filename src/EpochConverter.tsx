import { ChangeEvent, MouseEvent, SyntheticEvent, useState } from "react";
import { Button, TextField, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DateTimeValidationError, LocalizationProvider, PickerChangeHandlerContext } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Epoch from "./Epoch";
import NanoDate from "./NanoDate";
import { convertEpochMilliToTick, convertTickToEpochMilli } from "./conversion";
import './EpochConverter.css'

function EpochConverter() {
    const [date, setDate] = useState(new NanoDate())
    const [unit, setUnit] = useState('second')
    const [inputText, setInputText] = useState(date.getUnixSecond().toString())
    const [isDirty, setIsDirty] = useState(false)

    const onDateTimePickerChange = (
        val: dayjs.Dayjs | null,
        context: PickerChangeHandlerContext<DateTimeValidationError>
    ) => {
        if (!context.validationError && val) {
            const date = new NanoDate(val.toDate())
            setDate(date)

            if (!isDirty) {
                const tick = convertEpochMilliToTick(date.getTime(), unit)
                setInputText(tick.toString())
            }
        }
    }

    const setDateFromTick = (evt: SyntheticEvent) => {
        evt.preventDefault()

        if (!inputText) {
            return
        }

        const tick = Number(inputText)
        const milli = convertTickToEpochMilli(tick, unit)
        setDate(new NanoDate(milli))
        setIsDirty(false)
    }

    const onTickInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
        setInputText(evt.target.value)
        setIsDirty(true)
    }

    const changeUnit = (_: MouseEvent<HTMLElement>, newUnit: string,) => {
        if (!newUnit) {
            return
        }

        setUnit(newUnit)

        if (!isDirty) {
            const newTick = convertEpochMilliToTick(date.getTime(), newUnit)
            setInputText(newTick.toString())
        }
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
                <form className='EpochForm' onSubmit={setDateFromTick}>
                    <TextField
                        className='EpochForm-input'
                        type='number'
                        name='tick'
                        value={inputText}
                        onChange={onTickInputChange}
                    ></TextField>
                    <Button
                        className='EpochForm-button'
                        type='submit'
                        variant='contained'
                    >Apply</Button>
                </form>
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
