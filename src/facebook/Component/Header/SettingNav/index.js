import { Link } from 'react-router-dom'
import { useContext, useRef } from 'react'
import clsx from 'clsx'

import './SettingNav.scss';
import { Avatar, Menu, Messenger, Notification, Account } from '../../../assets/img/index'
import { Menu__active, Messenger__active, Notification__active, Account__active } from '../../../assets/img/index'
import Context from '../../../Context/Context'
import MoreComponent from './MoreComponent'

function SettingNav() {
    const context = useContext(Context)
    const [activeAvatar, setActiveAvatar] = (context.activeMainNav)

    const [activeSetting, setActiveSetting] = (context.activeSettingNav)
    // const activeRef = useRef()
    // activeRef.current = activeSetting

    const settingList = [
        {
            settingName: 'Menu',
            data: Menu
        },
        {
            settingName: 'Messenger',
            data: Messenger
        },
        {
            settingName: 'Notification',
            data: Notification
        },
        {
            settingName: 'Account',
            data: Account
        }
    ]
    const activeList = [Menu__active, Messenger__active, Notification__active, Account__active]
    const settingNavMore = useRef()
    const settingNavList = useRef()
    // Click toggle setting-nav-item (Complete)
    // handle setting-nav-more
    // - Click outside to close
    // - Close when click link tag or its children (Link active)


    function handleEvent(e) {
        const checkClickSettingItem = typeof e.target.className === 'string' && settingNavList.current.contains(e.target) && e.target.tagName !== 'UL'

        if (!settingNavMore.current.contains(e.target)
            && !checkClickSettingItem) {
            console.log('abc')

            setActiveSetting(prevState => {
                window.removeEventListener('click', handleEvent)
                return {
                    settingNav: '',
                    data: undefined
                }
            })
        }
    }

    const handleClick = (item) => {
        if (item.data === activeSetting.data) setActiveSetting(prevState => {
            window.removeEventListener("click", handleEvent)
            return {
                settingName: '',
                data: undefined
            }
        })
        else setActiveSetting(prevState => {
            if (prevState.settingName === '') window.addEventListener("click", handleEvent)
            return item;
        })
    }


    return (
        <div className="settingNav">
            <Link
                to="/profile" className={clsx('settingNav__avatar-link', {
                    'settingNav__avatar-link--active': (activeAvatar === 'profile')
                })}
                onClick={() => setActiveAvatar('profile')}
            >
                <img className="settingNav__avatar-img" src={Avatar} alt="Avatar" />
                <span className="settingNav__avatar-name settingNav__avatar-name--active">Anh</span>
            </Link>

            <ul className="settingNav-list"
                ref={settingNavList}>
                {settingList.map((item, index) => (
                    <li className={clsx('settingNav-item', {
                        'settingNav-item--active': (item.data === activeSetting.data)
                    })}
                        key={index}
                        onClick={() => handleClick(item)}
                    >
                        <img className="settingNav-item__icon" src={item.data === activeSetting.data ? activeList[index] : item.data} alt={item.settingName} />
                    </li>
                ))}

                <div className={clsx('settingNav-more', {
                    'settingNav-more--menuType': activeSetting.settingName === 'Menu',
                    'settingNav-more--messengerType': activeSetting.settingName === 'Messenger',
                    'settingNav-more--notificationType': activeSetting.settingName === 'Notification',
                    'settingNav-more--accountType': activeSetting.settingName === 'Account'
                })}
                    ref={settingNavMore}
                >
                    <MoreComponent
                        activeSetting={activeSetting}
                    />
                </div>
            </ul>

        </div>
    )

}

export default (SettingNav)