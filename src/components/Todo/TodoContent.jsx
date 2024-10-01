import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { AddTodo } from './AddTodo';
import { TodoHeader } from './TodoHeader';
import { TodoList } from './TodoList';

import mockData from '../../data/todos.json';

export function TodoContent() {
	// # Logic
	const [todos, setTodos] = useState(mockData);
	// console.log(uuidv4());
	// console.log(uuidv4());
	// console.log(uuidv4());

	const handleAddTodo = (newTask) => {
		// มี new todos
		let newTodoObj = { id: uuidv4(), task: newTask, status: false, due_date: '' };

		// สร้าง state ใหม่
		// update state โดย new state
		// const newTodos = [newTodoObj, ...todos];
		// setTodos(newTodos);

		// update state โดย callback
		setTodos((currentState) => [newTodoObj, ...currentState]);
	};

	// # UI
	return (
		<main className='content'>
			<TodoHeader />
			<AddTodo onAddTodo={handleAddTodo} />
			<TodoList todos={todos} />
		</main>
	);
}
