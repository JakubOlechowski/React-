import { useEffect, useState } from "react"

type TodoType = {
  id: string
  title: string
  completed: boolean
}

const NewTodoForm = () => {
  const [newItem, setNewItem] = useState<string>("")
  const [todos, setTodos] = useState<TodoType[]>([])

  useEffect(() => {
    console.log(todos)
  }, [todos])
  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault()

    setTodos((currentValue) => {
      return [
        ...currentValue,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ]
    })

    setNewItem("")
  }
  function toggleTodo(id: string, completed: boolean): void {
    setTodos((currentTodos: TodoType[]) => {
      return currentTodos.map((todo: TodoType) => {
        if (todo.id === id)
          return {
            ...todo,
            completed,
          }
        return todo
      })
    })
  }

  function deleteTodo(id: string): void {
    setTodos((currentTodos: TodoType[]) => {
      return currentTodos.filter((todo) => todo.id !== id)
    })
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Task</label>
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            id="item"
          />
        </div>
        <button
          disabled={newItem === "" ? true : false}
          type="submit"
          className="btn"
        >
          Add
        </button>
      </form>
      <h1 className="header">To-do List</h1>
      <ul className="list">
        {todos.length === 0 && <label htmlFor="item">No todos</label>}
        {todos?.map((todo: TodoType) => (
          <li key={todo.id}>
            <label>
              <input
                checked={todo.completed}
                type="checkbox"
                onChange={(e: React.ChangeEvent<HTMLElement>) =>
                  toggleTodo(todo.id, (e.target as HTMLInputElement).checked)
                }
              />
              {todo.title}
            </label>
            <button
              className="btn btn-danger"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default NewTodoForm
