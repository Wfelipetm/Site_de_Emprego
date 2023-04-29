import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './crud.css';
import logo from '../img/logo.png';
import Footer from 'componente/Footer/footer';



function Crud() {
  const [todos, setTodos] = useState([
    { id: 1, title: 'Learn React', completed: false },
    { id: 2, title: 'Build a CRUD app', completed: false },
    { id: 3, title: 'Deploy to Heroku', completed: false },
    { id: 4, title: 'Deploy to Heroku', completed: false },
    { id: 5, title: 'Deploy to Heroku', completed: false },
    { id: 6, title: 'Learn React', completed: false },
    { id: 7, title: 'Build a CRUD app', completed: false },
    { id: 8, title: 'Deploy to Heroku', completed: false },
    { id: 9, title: 'Deploy to Heroku', completed: false },
    
  ]);
  const [currentTodo, setCurrentTodo] = useState('');
  const [editingTodoId, setEditingTodoId] = useState(null);
  const [editTodoInputValue, setEditTodoInputValue] = useState('');
  const [editingTodoTitle, setEditingTodoTitle] = useState('');

  const handleInputChange = (event) => {
    setCurrentTodo(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (currentTodo) {
      const newTodo = {
        id: todos.length + 1,
        title: currentTodo,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setCurrentTodo('');
    }
  };

  const handleToggleTodo = (todoId) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (todoId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);
  };

  const handleEditTodo = (todoId) => {
    const todoToEdit = todos.find((todo) => todo.id === todoId);
    setEditingTodoId(todoId);
    setEditingTodoTitle(todoToEdit.title);
    setEditTodoInputValue(todoToEdit.title);
  };

  const handleUpdateTodo = (event, todoId) => {
    event.preventDefault();
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, title: editingTodoTitle };
      }
      return todo;
    });
    setTodos(updatedTodos);
    setEditingTodoId(null);
    setEditingTodoTitle('');
  };

  return (
    <div className="container">
      <h2>Recrutamento de novos funcionarios.</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="todoInput">Adicionar funcionario aprovado</label>
          <div className="input-group">
            <input
              id="todoInput"
              className="form-control"
              type="text"
              value={currentTodo}
              onChange={handleInputChange}
            />
            <div className="input-group-append">
              <button type="submit" className="btn btn-primary">Add</button>
            </div>
          </div>
        </div>
      </form>
      <table className="table">
  <thead>
    <tr>
      <th>ID</th>
      <th>Nome</th>
      <th>Avaliação</th>
      <th>Editar</th>
      <th>Excluir</th>
    </tr>
  </thead>
  <tbody>
  {todos.map((todo) => (
    <tr key={todo.id}>
      <td>{todo.id}</td>
      <td>
        {editingTodoId === todo.id ? (
          <input
            type="text"
            value={editTodoInputValue}
            onChange={(e) => {
              setEditTodoInputValue(e.target.value);
              setEditingTodoTitle(e.target.value);
            }}
          />
        ) : (
          todo.title
        )}
      </td>
      <td>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => handleToggleTodo(todo.id)}
        />
      </td>
      <td>
      {editingTodoId === todo.id ? (
           <button onClick={(e) => handleUpdateTodo(e, todo.id)} className="btn btn-primary save-button-1">Save</button>
        ) : (
          <>
           <button className="btn btn-primary edit-button-1" onClick={() => handleEditTodo(todo.id)}>Edit</button>
           <button className="btn btn-danger delete-button-2" onClick={() => handleDeleteTodo(todo.id)}>Delete</button>

          </>
          
        )}
      </td>
    </tr>
  ))}
</tbody>
</table>
<Footer/>
    </div>
  );
}

export default Crud;