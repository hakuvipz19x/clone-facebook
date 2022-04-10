import Header from './Component/Header'
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom'
import ContextProvider from './Context/Provider'
import { Provider } from 'react-redux'

import store from './store.js'
import './Facebook.css'
import HomePage from './Component/Body/Home'
import FriendsPage from './Component/Body/Friends'
import WatchPage from './Component/Body/Watch'
import GroupsPage from './Component/Body/Groups'
import Games_TabPage from './Component/Body/Games_Tab'
import Profile from './Component/Body/Profile'

function App() {

    return (
        <HashRouter basename={process.env.BASE_URL}>
                <ContextProvider>
                    <Provider store={store}>
                        <div className="App">
                            <Header />
                            <div className="Body">
                                <Routes>
                                    <Route exact path="/" element={<HomePage />} />
                                    <Route exact path="/friends" element={<FriendsPage />} />
                                    <Route exact path="/watch" element={<WatchPage />} />
                                    <Route exact path="/groups" element={<GroupsPage />} />
                                    <Route exact path="/games_Tab" element={<Games_TabPage />} />
                                    <Route exact path="/profile" element={<Profile />} />
                                </Routes>
                            </div>
                        </div>
                    </Provider>
                </ContextProvider>
        </HashRouter>

    )
}

export default App