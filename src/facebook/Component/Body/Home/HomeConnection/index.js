
import './HomeConnection.scss'
import HomeAdvertisement from './HomeAdvertisement'
import HomeContact from './HomeContact'
import HomeMessage from './HomeMessage'

function HomeConnection() {
    return (
        <div className="homepage-connection">
            <div className="homepage-connection-container">
                <HomeAdvertisement />
                <HomeContact />
            </div>
            <HomeMessage />
        </div>
    )
}

export default HomeConnection