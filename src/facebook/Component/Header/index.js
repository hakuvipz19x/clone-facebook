import './Header.css'
import SearchHeader from './SearchHeader'
import MainNav from './MainNav'
import SettingNav from './SettingNav'

function Header() {
    return (
        <nav className="Header">
            <div className="Header__container">
                <SearchHeader/>
                <MainNav/>
                <SettingNav/>
            </div>  
        </nav>
    )
}

export default Header