import NanoDate from './NanoDate'
import './Epoch.css'

function Epoch({ date }: { date: NanoDate }) {
    return (
        <div className='Epoch'>
            <div className='Epoch-second Epoch-label'>seconds:</div>
            <div className='Epoch-second Epoch-value'>{date.getUnixSecond()}</div>
            <div className='Epoch-milli Epoch-label'>milliseconds:</div>
            <div className='Epoch-milli Epoch-value'>{date.getTime()}</div>
            <div className='Epoch-micro Epoch-label'>as &micro;icroseconds:</div>
            <div className='Epoch-micro Epoch-value'>{date.getUnixMicro()}</div>
            <div className='Epoch-nano Epoch-label'>as nanoseconds:</div>
            <div className='Epoch-nano Epoch-value'>{date.getUnixNano()}</div>
        </div>
    )
}

export default Epoch
