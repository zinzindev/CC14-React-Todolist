import styles from './TodoItem.module.scss';
import { HiCheck, HiPencil, HiTrash } from 'react-icons/hi';
import { useState } from 'react';
import { TodoForm } from './TodoForm';

//(todoSchema {id: 1, task: lolemlolemlolem, status: false, due_date: 2024-09-29})
export function TodoItem({ todo }) {
	/*------------------ 1. Logic State -----------------*/
	const [isDone, setIsDone] = useState(todo.status);
	const [isEditMode, setIsEditMode] = useState(false);

	const handleToggleCheck = () => {
		setIsDone(!isDone);
	};

	const handleOpenEdit = () => {
		setIsEditMode(true);
	};

	const handleDeleteTodo = () => {
		console.log('Delete');
	};

	let checkboxStyle = isDone ? styles.checkbox__icon__done : styles.checkbox__icon;
	let tasksStyle = isDone ? styles.done : '';
	/*------------------ 2. Render UI -----------------*/
	return (
		<>
			{!isEditMode ? (
				<li className={styles.todo__item__container}>
					{/* <div className={styles.checkbox__container}> */}
					<div className={styles.checkbox__container} onClick={handleToggleCheck}>
						{/* <HiCheck className={checkboxStyle} onClick={handleToggleCheck} /> */}
						<HiCheck className={checkboxStyle} />
					</div>

					{/* <p className={styles.done}>item-{el}</p> */}
					<p className={tasksStyle}>{todo.task}</p>

					<div className={styles.edit__icon} onClick={handleOpenEdit}>
						<HiPencil />
					</div>

					<div className={styles.delete__icon} onClick={handleDeleteTodo}>
						<HiTrash />
					</div>
				</li>
			) : (
				<TodoForm
					submitText='Edit task'
					// onSetIsEditMode={setIsEditMode}
					onSetIsShowForm={setIsEditMode}
					oldTask='ole-task-name'
				/>
			)}
		</>
	);
}
