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

	// ADD-TODO
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

	// UPDATE-TODO
	// updateValue = {task: 'NewTask', status: false}
	const handleEditTodo = (todoId, updateObj) => {
		// Modify Array
		// #1 FindIndex
		const foundIndex = todos.findIndex((todoObj) => todoObj.id === todoId);

		// Not Found
		if (foundIndex === -1) return;

		// Founded
		const newTodos = [...todos];
		// let oldTodoObj = newTodos[foundIndex];
		// oldTodoObj.task = newTask
		// newTodos[foundIndex] = Object.assign(newTodos[foundIndex], updateObj);
		newTodos[foundIndex] = { ...newTodos[foundIndex], ...updateObj };
		// { "id": 4, "task": "Proin risus.", "status": true, "due_date": "2025-02-01" },

		setTodos(newTodos);
	};
	const handleDelete = (todoId) => {
		// Logic: Manipulate Array
		// const foundIndex = todos.findIndex((todoObj) => todoObj.id === todoId);
		// if (foundIndex === -1) return;
		// const newTodos = [...todos];
		// newTodos.splice(foundIndex, 1);
		// setTodos(newTodos);

		setTodos((curr) => curr.filter((todoObj) => todoObj.id !== todoId));
	};

	// # UI
	return (
		<main className='content'>
			<TodoHeader title='Today' />
			<AddTodo onAddTodo={handleAddTodo} />
			<TodoList todos={todos} onEditTodo={handleEditTodo} onDeleteTodo={handleDelete} />
		</main>
	);
}
