import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import styles from "./App.module.css";
import { TaskList } from "./components/TaskList/TaskList";

export function App(){
  return (
    <div className={styles.App}>
      <Header/>

      <Main>
        <form>
          <input type="text" />
          <button>+</button>
        </form>

      <TaskList/>  
      </Main>
      
      <Footer autor="Lauber" ano="2024"></Footer>
    </div>
  )
}

