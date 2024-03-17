import NanoDate from './NanoDate'
import CopyButton from './CopyButton'
import './Epoch.css'

function Epoch({ date }: { date: NanoDate }) {
    return (
        <div className='Epoch'>
            <div className='Epoch-second Epoch-label'>seconds:</div>
            <div className='Epoch-second Epoch-value'>{date.getUnixSecond()}</div>
            <CopyButton
                className='Epoch-second Epoch-button'
                aria-label='copy to clipboard'
                sourceSelector='.Epoch-second.Epoch-value'
            ></CopyButton>
            <div className='Epoch-milli Epoch-label'>milliseconds:</div>
            <div className='Epoch-milli Epoch-value'>{date.getTime()}</div>
            <CopyButton
                className='Epoch-milli Epoch-button'
                aria-label='copy to clipboard'
                sourceSelector='.Epoch-milli.Epoch-value'
            ></CopyButton>
            <div className='Epoch-micro Epoch-label'>as &micro;icroseconds:</div>
            <div className='Epoch-micro Epoch-value'>{date.getUnixMicro()}</div>
            <CopyButton
                className='Epoch-micro Epoch-button'
                aria-label='copy to clipboard'
                sourceSelector='.Epoch-micro.Epoch-value'
            ></CopyButton>
            <div className='Epoch-nano Epoch-label'>as nanoseconds:</div>
            <div className='Epoch-nano Epoch-value'>{date.getUnixNano()}</div>
            <CopyButton
                className='Epoch-nano Epoch-button'
                aria-label='copy to clipboard'
                sourceSelector='.Epoch-nano.Epoch-value'
            ></CopyButton>
        </div>
    )
}

export default Epoch
