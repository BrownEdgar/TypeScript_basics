/////////////////////////////////////////////////////////////////
// * 
/////////////////////////////////////////////////////////////////

import './App.css';
import  { useState } from 'react'

import Title from './Components/Title/Title';

interface forState {
	id: number,
	title: string,
	complited: boolean,
}

function App() {
	const [state, setstate] = useState<forState>({
		id:46598,
		title:"learn TS",
		complited: false,
	})
  return (
    <div className="App">
		<Title title="TypeScript" lesson={1}/>
    </div>
  );
}

export default App;
