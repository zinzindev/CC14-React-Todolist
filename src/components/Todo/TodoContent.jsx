import styles from './TodoContent.module.scss'; // Module CSS
import { HiCheck, HiPencil, HiTrash } from 'react-icons/hi';

export function TodoContent() {
	const mockTodo = Array.from({ length: 50 }, (el, idx) => idx + 1);

	const today = new Date();
	const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };

	return (
		<main className='content'>
			{/* Todo-Header */}
			<div className={styles.header}>
				<h1>Inbox</h1>
				<span>{today.toLocaleDateString('en-US', options)}</span>
			</div>

			{/* Add Todo */}
			<div>
				<div className={styles.add__todo}>
					<span>+</span>
					<h3>Add task</h3>
				</div>
			</div>

			{/* Todo Form */}
			<form className={styles.todo__form__container}>
				<input className={styles.todo__form__input} placeholder='Task Name' />
				<div className={styles.todo__form__footer}>
					<p className={styles.todo__error}>Title is required</p>
					<div className={styles.todo__form__buttons}>
						<button>Cancel</button>
						<button>Add Task</button>
					</div>
				</div>
			</form>

			{/* Todolist */}
			<ul>
				{mockTodo.map((el) => (
					<li className={styles.todo__item__container} key={el}>
						<div className={styles.checkbox__container}>
							<HiCheck className={styles.checkbox__icon} />
						</div>

						<p className={styles.done}>item-{el}</p>

						<div className={styles.edit__icon}>
							<HiPencil />
						</div>

						<div className={styles.delete__icon}>
							<HiTrash />
						</div>
					</li>
				))}
			</ul>
		</main>
	);
}
