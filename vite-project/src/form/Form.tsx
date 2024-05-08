import { useEffect, useState } from "react"

const Form = () => {
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([{}])

  function handleSubmit(e: any) {
    e.preventDeafult()

    setTodos([
      ...todos,
      { id: crypto.randomUUID(), title: newItem, completed: false },
    ])
  }
  return (
    <>
      <form className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Task</label>
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            id="item"
          />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">To-do List</h1>
      <ul className="list">
        <li>
          <label>
            <input type="checkbox" />
            Do shit
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            Do shit
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            Do shit
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
      </ul>
    </>
  )
}

export default Form
