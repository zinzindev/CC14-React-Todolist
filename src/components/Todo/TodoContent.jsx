import { AddTodo } from './AddTodo';
import { TodoHeader } from './TodoHeader';
import { TodoList } from './TodoList';

export function TodoContent() {
	return (
		<main className='content'>
			<TodoHeader />
			<AddTodo />
			<TodoList />
		</main>
	);
}
