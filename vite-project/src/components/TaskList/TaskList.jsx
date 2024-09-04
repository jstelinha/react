import { TaskItem } from './TaskItem/TaskItem'
import styles from './TaskList.module.css'

export function TaskList() {
    
    const listaTarefas = [
        {id:1, tarefa: "Estudar"},
        {id:2, tarefa: "Lavar a louça"},
        {id:3, tarefa: "Ir a academia"},
        {id:4, tarefa: "estudar DW"}
    ]

    return (
        listaTarefas.map(item => <TaskItem texto = {item.tarefa} />)
    )
}