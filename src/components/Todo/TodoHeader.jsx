import styles from './TodoHeader.module.scss';
import { getFormattedDate } from '../../utils/DateUtils.js';

export function TodoHeader({ title }) {
	return (
		<div className={styles.header}>
			<h1>{title}</h1>
			<span>{getFormattedDate(Date.now())}</span>
		</div>
	);
}
