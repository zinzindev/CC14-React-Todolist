import styles from './TodoForm.module.scss';
import { useState } from 'react';

// (TodoForm => call in 2 mode)
// Mode-1 : Add
// Mode-2 : Edit
export function TodoForm({ onSetIsShowForm, submitText, oldTask, onAddTodo }) {
	/*------------------ 1: logic-section -----------------*/
	const [task, setTask] = useState(oldTask || '');
	const [isError, setIsError] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();

		// validate
		if (task.trim() === '') {
			setIsError(true);
			return;
		} else {
			// validate passed -> execute addTodo
			onAddTodo(task); // from <TodoContent />
		}

		// set back to normal mode
		onSetIsShowForm(false);
	};
	const handleClickCancel = (e) => {
		// from <AddTodo />
		// onSetIsAddMode?.(false);
		// console.log(onSetIsAddMode?.(false));

		// from <TodoItem />
		// onSetIsEditMode?.(false);

		// from <AddTodo /> + <TodoItem />
		onSetIsShowForm(false);
	};

	const handleChangeInput = (e) => {
		setIsError(false);
		setTask(e.target.value);
	};

	/*------------------ 2: UI-section -----------------*/
	return (
		<form className={styles.todo__form__container} onSubmit={handleSubmit}>
			<input
				className={styles.todo__form__input}
				placeholder='Task Name'
				value={task}
				onChange={handleChangeInput}
			/>
			<div className={styles.todo__form__footer}>
				{isError && <p className={styles.todo__error}>Title Name is required</p>}
				<div className={styles.todo__form__buttons}>
					<button type='button' onClick={handleClickCancel}>
						Cancel
					</button>
					<button type='submit'>{submitText}</button>
				</div>
			</div>
		</form>
	);
}
