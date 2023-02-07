import { Header } from "./components/Header/Header"
import { ProfileCard } from "./components/ProfileCard/ProfileCard"
import { PostCard } from "./components/PostCard/PostCard"

import './reset.css'
import './global.css'

export function App() {

  const POST_CARDS_MOCKED = [
    {
      id: 1,
      publishedAt: '2023-02-06T15:03:11',
      author: {
        avatarUrl: 'https://avatars.githubusercontent.com/u/11148858?v=4',
        name: 'Douglas Toledo',
        role: 'Frontend Developer'
      },
      content: `**Hello everyone 👋**\nI just pushed a new project to my Github.\n\nThis is the first project I made from Rocketseat Ignite Course 🚀!\nCheck it out on 👉 [https://github.com/dwtoledo/project-01-ignite](https://github.com/dwtoledo/project-01-ignite).\n\n**[#newproject](https://github.com/search?q=newproject&type=topics) [#reactjs](https://github.com/search?q=reactjs&type=topics) [#frontend](https://github.com/search?q=frontend&type=topics) [#ignite](https://github.com/search?q=ignite&type=topics) [#rocketseat](https://github.com/search?q=rocketseat&type=topics)**`
    },
    {
      id: 2,
      publishedAt: '2023-01-20T12:23:45',
      author: {
        avatarUrl: 'https://avatars.githubusercontent.com/u/2254731?v=4',
        name: 'Diego Fernandes',
        role: 'CTO @Rocketseat'
      },
      content: 'I just migrated a HUGE React project from create-react-app to **[Vite](https://vitejs.dev/)** and the results were:\n\n✅ *npm start:* From 32s to 400ms (yes, it took 30s) !\n✅ *npm build:* From 120s to 22s\n\nAlso, I switched from Yarn to **[PNPM](https://pnpm.io/pt/)** and the dependences installation decreased from 24s to 8s🔥'
    }
  ];

  return (
    <div>
      <Header />
      <div className="appContentWrapper">
        <div className="appContent">
          <ProfileCard />
          <div className="postCards">
            {
              POST_CARDS_MOCKED.map((post) => {
                return <PostCard
                  key={post.id}
                  avatarUrl={post.author.avatarUrl}
                  authorName={post.author.name}
                  authorRole={post.author.role}
                  publishedAt={post.publishedAt}
                  message={post.content}
                />
              })
            }
          </div>
        </div>
      </div>

    </div>
  )
}
