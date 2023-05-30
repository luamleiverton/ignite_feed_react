import styles from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img src='https://images.unsplash.com/photo-1642697283420-194938fcc339?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODh8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&&h=150&q=50' />
            <div className={styles.profile}>
                
                <Avatar src='https://avatars.githubusercontent.com/u/17278753?v=4'/>
                
                <strong>Luam Leiverton</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar perfil</a>
            </footer>
        </aside>
    )
}