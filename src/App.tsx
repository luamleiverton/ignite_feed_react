import { Post, PostType } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import './global.css';
import styles from './App.module.css';

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/17278753?v=4',
      name: 'Luam Leiverton',
      role: 'Dev'
    },
    content: [
      {type: 'paragraph', content: 'Fala galera!',},
      {type: 'paragraph', content: 'Mais um projeto lançado no meu portfólio',},
      {type: 'paragraph', content: 'Vejam lá!',},
      {type: 'link', content: 'design.com',},
    ],
    publishedAt: new Date('2023-05-26 07:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/17278753?v=4',
      name: 'João da Silva',
      role: 'Tester'
    },
    content: [
      {type: 'paragraph', content: 'Fala galera!',},
      {type: 'paragraph', content: 'Mais um projeto lançado no meu portfólio',},
      {type: 'paragraph', content: 'Vejam lá!',},
      {type: 'link', content: 'design.com',},
    ],
    publishedAt: new Date('2023-05-27 07:00:00')
  },
];

function App() {

  return (
      <div>
        <Header />
        <div className={styles.wrapper}>
          <Sidebar />
          <main>   
              { posts.map(post => {
                return (
                  <Post
                    key={post.id}
                    post={post}
                  />)
                }) 
              }
          </main>
        </div>
      </div>
  )
}


export default App
