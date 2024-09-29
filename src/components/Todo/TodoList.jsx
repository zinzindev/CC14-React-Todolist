import { TodoItem } from './TodoItem';

export function TodoList({ todos }) {
	return (
		<ul>
			{todos.map((todoObj) => (
				<TodoItem key={todoObj.id} todo={todoObj} />
				// {id: 1, task: lolemlolemlolem, status: false, due_date: 2024-09-29}
			))}
		</ul>
	);
}
