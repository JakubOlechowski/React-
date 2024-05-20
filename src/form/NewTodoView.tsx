import { useState } from "react"
import NewTodoForm from "./NewTodoForm"
type TodosListType = {
  id: string
  title: string
}
const NewTodoView = () => {
  const [todosLists, setTodosLists] = useState<TodosListType[]>([])
  const [newTodosList, setNewTodosList] = useState<TodosListType>({})

  function addNewTodosList(newTodosListProp: TodosListType): void {
    setTodosLists((prevState: TodosListType[]) => {
      return [
        ...prevState,
        { id: newTodosListProp.id, title: newTodosListProp.title },
      ]
    })
  }

  return (
    <>
      <button onClick={() => addNewTodosList(newTodosList)} className="btn">
        Add new list
      </button>
      {todosLists.map((todosList: TodosListType) => {
        return (
          <>
            <NewTodoForm title={todosList.title} />
          </>
        )
      })}
      <NewTodoForm />
    </>
  )
}

export default NewTodoView
