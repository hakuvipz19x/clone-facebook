import { useState } from 'react'
import './HomeMessage.scss'
import { Avatar } from '../../../../../assets/img'
import HomeMessageShow from './HomeMessageShow'
import store from '../../../../../store'
import { updateList } from '../../../../../actions/connection.js'
function HomeMessage() {

    const [list, setList] = useState({
        connectionList: [],
        hideConnectionList: []
    })

    store.subscribe(() => {
        const conList = store.getState().connection.connectionList
        const hideConList = store.getState().connection.hideConnectionList
        // console.log(list)
        setList({
            connectionList: [...conList],
            hideConnectionList: [...hideConList]
        })
    })

    const handleClickHideConnection = (item) => {

        list.hideConnectionList = list.hideConnectionList.filter(connection => connection.id !== item.id)

        if (list.connectionList.length >= 3) {
            list.hideConnectionList = [...list.hideConnectionList, list.connectionList[0]]
            list.connectionList = list.connectionList.filter(connection => connection.id !== list.connectionList[0].id)
            console.log(list)
        }

        list.connectionList = [...list.connectionList, item]

        setList(list)
        store.dispatch(updateList(list))
    }

    return (
        <div className="homepage-connection__message">
            <div className="homepage-connection__message-container">
                <ul className="homepage-connection__message-hide-list">
                    <li className="homepage-connection__message-hide-item">
                        <div className="homepage-connection__message-new-wrapper">
                            <i className="homepage-connection__message-new-img" />
                        </div>
                    </li>
                    {list.hideConnectionList.map((item, index) => (

                        (index > list.hideConnectionList.length - 7) &&

                        <li className="homepage-connection__message-hide-item" key={index}
                            onClick={() => handleClickHideConnection(item)}
                        >
                            <div className="homepage-connection__message-avatar-wrapper">
                                <img src={item.avatar} alt="" className="homepage-connection__message-avatar-img" />
                            </div>
                        </li>
                    ))}
                    <li className="homepage-connection__message-hide-item">
                        <div className="homepage-connection__message-more-wrapper">
                            <span className="homepage-connection__message-more">&middot;&middot;&middot;</span>
                        </div>
                    </li>
                </ul>
                <ul className="homepage-connection__message-show-list">
                    {list.connectionList.map((item, index) => (
                        <li className="homepage-connection__message-show-item" key={index}>
                            <HomeMessageShow
                                info={item}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default HomeMessage