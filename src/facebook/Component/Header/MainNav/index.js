import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import './MainNav.scss'
import {
    Home, Friends, Watch, Groups, Games_Tab,
    Home__active, Friends__active, Watch__active, Groups__active, Games_Tab__active
} from '../../../assets/img/'
import Context from '../../../Context/Context'
import clsx from 'clsx'

function MainNav() {
    const navLists = [
        {
            path: '',
            data: Home
        },
        {
            path: 'friends',
            data: Friends
        },
        {
            path: 'watch',
            data: Watch
        },
        {
            path: 'groups',
            data: Groups
        },
        {
            path: 'games_Tab',
            data: Games_Tab
        }
    ]
    const activeLists = [Home__active, Friends__active, Watch__active, Groups__active, Games_Tab__active]
    const context = useContext(Context)
    const [active, setActive] = context.activeMainNav
    return (
        <>
            <div className="mainNav">
                <ul className="mainNav-list">
                    {navLists.map((item, index) => {
                        return (
                            <li className="mainNav-item" key={index}>
                                <Link to={`/${item.path}`} className={clsx('mainNav-item__link', {
                                    'mainNav-item__link--active': (active === item.path)
                                })}
                                    onClick={() => setActive(item.path)}
                                >
                                    <img className={clsx('mainNav-item__link-icon', {
                                        'mainNav-item__link-icon--active': (active === item.path)
                                    })}
                                        src={(active === item.path) ? activeLists[index] : navLists[index].data} alt="Main Nav Icon">
                                    </img>
                                </Link>
                                {active === item.path && <div className="mainNav-line" key={item.path}></div>}
                            </li>

                        )

                    }

                    )}
                </ul>
            </div>
        </>
    )
}

export default MainNav