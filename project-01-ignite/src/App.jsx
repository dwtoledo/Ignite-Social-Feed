import { Header } from "./components/Header/Header"
import { ProfileCard } from "./components/ProfileCard/ProfileCard"
import { PostCard } from "./components/PostCard/PostCard"

import './reset.css'
import './global.css'

export function App() {
  return (
    <div>
      <Header />
      <div className="appContentWrapper">
        <div className="appContent">
          <ProfileCard />
          <div className="postCards">
            <PostCard />
            <PostCard />
            <PostCard />
          </div>
        </div>
      </div>

    </div>
  )
}
