import { useRef, useState } from 'react'

import './SearchHeader.scss'
import facebookLogo from '../../../assets/img/SearchHeader/facebook-logo.jpg'
import { FaSearch, FaArrowLeft } from 'react-icons/fa'
import { BsClock } from "react-icons/bs";
import { IoIosClose } from "react-icons/io";

function SearchHeader() {
    const searchContainer = useRef()
    const searchIcon = useRef()
    const backIcon = useRef()
    const facebookImg = useRef()
    const searchList = useRef()
    const handlePress = useRef()
    const deleteIcon = useRef()

    const [input, setInput] = useState('')
    const [inputList, setInputList] = useState([])

    function handleEnterPress(e) {
        // console.log(e.target.value)
        if (e.code === 'Enter' && e.target.value !== '') {
            // console.log('abc')
            setInputList(prevList => {
                if (prevList.includes(e.target.value)) {
                    const newList = prevList.filter(item => item !== e.target.value)
                    return ([e.target.value, ...newList])
                }
                return [e.target.value, ...prevList]
            })

            setInput('')
        }
    }

    function handleClickOutsideSearch(e) {
        // console.log(e.target)
        if (!searchContainer.current.contains(e.target)) {
            searchList.current.style.display = "none"
            searchContainer.current.style.boxShadow = ""
            backIcon.current.style.display = "none"
            facebookImg.current.style.display = "inline-block"
            window.removeEventListener("click", handleClickOutsideSearch)
        }
    }

    const handleClickItem = (input) => {
        const newList = inputList.filter(item => item !== input)
        // console.log(newList)
        setInputList(prevList => [input, ...newList])
    }

    const handleDeleteInput = (e, input) => {
        // console.log(input)
        e.stopPropagation()
        const newList = inputList.filter(item => item !== input)
        setInputList(newList)
    }

    const handleFocus = () => {
        searchIcon.current.style.display = "none"
        facebookImg.current.style.display = "none"
        backIcon.current.style.display = "flex"
        searchList.current.style.display = "block"
        searchContainer.current.style.boxShadow = "0 0 8px rgba(0, 0, 0, 0.2)"
        handlePress.current = handleEnterPress
        window.addEventListener("click", handleClickOutsideSearch)
        window.addEventListener("keypress", handlePress.current, true)
    }

    const handleBlur = () => {
        searchIcon.current.style.display = "inline-block"

        // console.log(handlePress.current === handleEnterPress)
        window.removeEventListener("keypress", handlePress.current, true)
        // console.log(handleEnterPress)
    }


    return (
        <div className="searchHeader">
            <div className="searchHeader__container"
                ref={searchContainer}
            >
                <div className="searchHeader__container-input">
                    <div className="searchHeader__icon-container">
                        <i className="searchHeader-searchContainer__backIcon-wrapper" ref={backIcon}>
                            <FaArrowLeft className="searchHeader-searchContainer__backIcon" />
                        </i>
                        <a href="/" className="searchHeader__link" ref={facebookImg}>
                            <img src={facebookLogo} alt="Facebook Logo" className="searchHeader__img" />
                        </a>
                    </div>
                    <div className="searchHeader-searchContainer">
                        <i className="searchHeader-searchContainer__icon" ref={searchIcon}><FaSearch /></i>
                        <input type="text" placeholder="Tìm kiếm trên facebook"
                            className="searchHeader-searchContainer__input"
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                    </div>
                </div>
                <ul className="searchHeader__search-list"
                    ref={searchList}
                >
                    <div className="searchHeader__search-title-wrapper">
                        <span className="searchHeader__search-title">Tìm kiếm gần đây</span>
                        <span className="searchHeader__search-edit">Chỉnh sửa</span>
                    </div>
                    {inputList.map((input, index) => (
                        (index < 8) &&
                        <li className="searchHeader__search-item" key={index}
                            onClick={(e) => handleClickItem(input)}
                        >
                            <div className="searchHeader__search-content-wrapper">
                                <div className="searchHeader__search-icon-wrapper">
                                    <BsClock className="searchHeader__search-icon" />
                                </div>
                                <span className="searchHeader__search-content">{input}</span>
                            </div>
                            <div className="searchHeader__search-delete-wrapper"
                                onClick={(e) => handleDeleteInput(e, input)}
                            >
                                <IoIosClose className="searchHeader__search-delete-icon" />
                            </div>
                        </li>
                    ))}

                </ul>
            </div>
        </div>
    )
}

export default SearchHeader