import './MoreComponent.scss'
import MoreAccount from './MoreAccount'

function MoreComponent({ activeSetting }) {
    // console.log(activeSetting)
    return (
        <>
            {activeSetting.settingName === 'Account' && <MoreAccount/>}
        </>
    )
}

export default MoreComponent