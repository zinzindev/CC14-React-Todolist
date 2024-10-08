import styles from './TodoItem.module.scss';
import { HiCheck, HiPencil, HiTrash } from 'react-icons/hi';
import { useState } from 'react';
import { TodoForm } from './TodoForm';
import { getFormattedDate } from '../../utils/DateUtils';
import PropTypes from 'prop-types';

TodoItem.propTypes = {
	onAddTodo: PropTypes.func,
	onEditTodo: PropTypes.func,
	todo: PropTypes.oneOfType([PropTypes.object]),
};

//(todoSchema {id: 1, task: lolemlolemlolem, status: false, due_date: 2024-09-29})
export function TodoItem({ todo, onEditTodo, onDeleteTodo }) {
	/*------------------ 1. Logic State -----------------*/
	// const [isDone, setIsDone] = useState(todo.status);
	const [isEditMode, setIsEditMode] = useState(false);
	// console.log(todo.id);

	const handleToggleCheck = () => {
		// setIsDone(!isDone);
		// console.log('STATE', !isDone);
		// console.log('STATUS', todo.status);
		// onEditTodo(todo.id, !todo.status);
		onEditTodo(todo.id, { status: !todo.status }); // handleEditTodo(todo.id, {status: !todo.status});
	};

	const handleOpenEdit = () => {
		setIsEditMode(true);
		console.log(todo.id);
	};

	const handleDeleteTodo = () => {
		console.log('Delete', todo.id);
		onDeleteTodo(todo.id);
	};

	let checkboxStyle = todo.status ? styles.checkbox__icon__done : styles.checkbox__icon;
	let tasksStyle = todo.status ? styles.done : '';
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

					<p>{getFormattedDate(todo.due_date)}</p>

					{/* <div className={styles.edit__icon} onClick={() => onDeleteTodo(todo.id)}> */}
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
					// oldTask={todo.task}
					onEditTodo={onEditTodo}
					todo={todo}
				/>
			)}
		</>
	);
}
