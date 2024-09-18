import './App.scss';
import { Header } from './components/Headers.js';
import { Sidebar } from './components/Sidebar.js';

function App() {
	return (
		<div className='container'>
			<Header />
			<Sidebar />
			{/* Content */}
			<main className='content'>Content</main>
		</div>
	);
}

export default App;
