import { IconButton } from '@mui/material'
import { ContentCopy } from '@mui/icons-material'

function CopyButton({className, sourceSelector}: {className: string, sourceSelector: string}) {
    const copySourceText = () => {
        const sourceElement = document.querySelector(sourceSelector)
        if (!sourceElement || !sourceElement.textContent) {
            return
        }

        navigator.clipboard.writeText(sourceElement.textContent)
    }

    return (
        <IconButton className={className} aria-label='copy to clipboard' onClick={copySourceText}>
            <ContentCopy />
        </IconButton>
    )
}

export default CopyButton
