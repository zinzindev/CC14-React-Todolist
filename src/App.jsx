import './App.scss'; // Global
import { Header } from './components/Header.jsx';
import { Sidebar } from './components/Sidebar.jsx';
import { TodoContent } from './components/Todo/TodoContent.jsx';

function App() {
	return (
		<div className='container'>
			<Header />
			<Sidebar />
			<TodoContent />
		</div>
	);
}

export default App;
