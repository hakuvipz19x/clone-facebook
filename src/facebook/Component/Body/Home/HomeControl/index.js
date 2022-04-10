
import './HomeControl.scss'
import HomeControlList from './HomeControlList'
import HomeShortCuts from './HomeShortCuts'

function HomeControl() {

    return (
        <div className="homepage-control">
            <div className="homepage-control-container">
                <HomeControlList />
                <HomeShortCuts />
            </div>
        </div>
    )
}

export default HomeControl