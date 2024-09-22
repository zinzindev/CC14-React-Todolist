import styles from './TodoHeader.module.scss';

export function TodoHeader() {
	const today = new Date();
	const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };

	return (
		<div className={styles.header}>
			<h1>Inbox</h1>
			<span>{today.toLocaleDateString('en-US', options)}</span>
		</div>
	);
}
