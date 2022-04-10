
import {
    FaMinus, FaPhoneAlt, FaVideo,
    FaPlusCircle, FaFileImage, FaSmile
} from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { RiFileGifFill } from "react-icons/ri";
import { ImSmile } from "react-icons/im";

import './HomeMessageShow.scss'
import { Avatar } from '../../../../../../assets/img'
import store from '../../../../../../store'
import { updateList } from '../../../../../../actions/connection.js'
function HomeMessageShow({ info }) {

    // console.log(info)

    const handleRemoveConnection = () => {
        // console.log(info)
        const list = store.getState().connection
        if (list.hideConnectionList.length > 0) {
            const connection = list.hideConnectionList.pop()
            list.connectionList = [connection, ...list.connectionList]
        }

        list.connectionList = list.connectionList.filter(connection => connection.id !== info.id)
        // console.log(list)
        store.dispatch(updateList(list))
    }

    const handleHideConnection = () => {
        const list = store.getState().connection
        // if (list.hideConnectionList.length > 0) {
        //     const connection = list.hideConnectionList.pop()
        //     list.connectionList = [connection, ...list.connectionList]
        // }

        list.connectionList = list.connectionList.filter(connection => connection.id !== info.id)
        list.hideConnectionList = [...list.hideConnectionList, info]

        store.dispatch(updateList(list))
    }

    return (
        <div className="homepage-connection__message-show homepage-connection__message-show--active">
            <div className="homepage-connection__message-show-header">
                <div className="homepage-connection__message-show-header-wrapper">
                    <div className="homepage-connection__message-show-avatar-wrapper">
                        <img src={info.avatar} alt="" className="homepage-connection__message-show-avatar" />
                    </div>
                    <div className="homepage-connection__message-show-name-wrapper">
                        <span className="homepage-connection__message-show-name">{info.name}</span>
                        <div className="homepage-connection__message-show-status-wrapper">
                            <span className="homepage-connection__message-show-status">{info.status} &middot;</span>
                            <i className="homepage-connection__message-show-status-icon"></i>
                        </div>
                    </div>
                    <div className="homepage-connection__message-show-more-wrapper">
                        <svg className="homepage-connection__message-show-more-svg" width="10px" height="10px" viewBox="0 0 18 10"><path fillRule="evenodd" clipRule="evenodd" d="M1 2.414A1 1 0 012.414 1L8.293 6.88a1 1 0 001.414 0L15.586 1A1 1 0 0117 2.414L9.707 9.707a1 1 0 01-1.414 0L1 2.414z"></path></svg>
                    </div>
                </div>
                <ul className="homepage-connection__message-show-function-list">
                    <li className="homepage-connection__message-show-function-item">
                        <FaPhoneAlt className="homepage-connection__message-show-function-icon" />
                    </li>
                    <li className="homepage-connection__message-show-function-item">
                        <FaVideo className="homepage-connection__message-show-function-icon" />
                    </li>
                    <li className="homepage-connection__message-show-function-item"
                        onClick={handleHideConnection}
                    >
                        <FaMinus className="homepage-connection__message-show-function-icon" />
                    </li>
                    <li className="homepage-connection__message-show-function-item"
                        onClick={handleRemoveConnection}
                    >
                        <MdClose className="homepage-connection__message-show-function-icon homepage-connection__message-show-function-icon--large" />
                    </li>
                </ul>
            </div>
            <div className="homepage-connection__message-show-body">

            </div>
            <div className="homepage-connection__message-show-chat">
                <ul className="homepage-connection__message-show-chat-function-list">
                    <li className="homepage-connection__message-show-chat-function-item">
                        <FaPlusCircle className="homepage-connection__message-show-chat-function-icon" />
                    </li>
                    <ul className="homepage-connection__message-show-chat-function-hide-list">
                        <li className="homepage-connection__message-show-chat-function-item">
                            <FaFileImage className="homepage-connection__message-show-chat-function-icon" />
                        </li>
                        <li className="homepage-connection__message-show-chat-function-item">
                            <FaSmile className="homepage-connection__message-show-chat-function-icon" />
                        </li>
                        <li className="homepage-connection__message-show-chat-function-item">
                            <RiFileGifFill className="homepage-connection__message-show-chat-function-icon" />
                        </li>
                    </ul>
                </ul>
                <div className="homepage-connection__message-show-chat-input-wrapper">
                    <input type="text" placeholder="Aa" className="homepage-connection__message-show-chat-input" />
                    <div className="homepage-connection__message-show-chat-icon-wrapper">
                        <ImSmile className="homepage-connection__message-show-chat-icon" />
                    </div>
                </div>
                <div className="homepage-connection__message-show-chat-like-wrapper">
                    <img className="homepage-connection__message-show-chat-like-img" height="20" width="20" alt="🤷🏾‍♀" referrerPolicy="origin-when-cross-origin" src="https://static.xx.fbcdn.net/images/emoji.php/v9/td3/1.5/20/1f937_1f3fe_200d_2640.png"></img>
                </div>
            </div>
        </div>
    )
}

export default HomeMessageShow