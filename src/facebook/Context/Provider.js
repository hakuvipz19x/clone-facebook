import Context from './Context'
import { useState } from 'react'
function Provider({ children }) {

    const path = window.location.pathname.slice(1)
    console.log(path)
    const [activeMainNav, setActiveMainNav] = useState(path)
    const [activeSettingNav, setActiveSettingNav] = useState({
        settingName: '',
        data: undefined
    })
    return (
        <Context.Provider value={{
            activeMainNav: [activeMainNav, setActiveMainNav],
            activeSettingNav: [activeSettingNav, setActiveSettingNav]
        }}>
            {children}  
        </Context.Provider>
    )
}

export default Provider