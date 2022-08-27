import React, { useState } from "react";// 1. importo el hook useState


//create your first component
const Home = () => {

	const [tarea, setTarea] = useState(""); // 2. lo ejecuto	
	const [lista, setLista] = useState([])
	function submit(e) {
		e.preventDefault()
		console.log(tarea);
		setLista([...lista, tarea])
		setTarea("")
	}
	function borrar(name) {
		console.log(name);

		const newArray= lista.filter(item => item !== name);
		console.log(newArray);
		setLista(newArray);
	}
		console.log(lista);

	return (
		// <div className="list-group">
		// <div className="text-center">
		// 	<h1 className="text-center mt-5">ToDo List</h1>
		// </div>
		// <a href="#" className="list-group-item list-group-item-action"><input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="What needs to be done?"
		// 	onChange={(e)=>setTarea(e.target.value)}
		// 	value={tarea}
		// 	/>
		// 	</a>
		// <a href="#" className="list-gro">	{lista.map((item)=><li>{item}</li>)}</a>
		// </div>up-item list-group-item-action

		<div className="text-center">
			<h1 className="text-center mt-5">ToDo List</h1>
		<form className="list-group" onSubmit={submit}>
		<div className="list-group-item list-group-item-action">
			<label htmlFor="exampleInputEmail1" className="form-label"></label>
			<input type="text"  id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="What needs to be done?"
			onChange={(e)=>setTarea(e.target.value)}
			value={tarea}
			/>
		</div>
			<div className="list-group">
			{lista.map((item,index)=><div className="list-group-item list-group-item-action"><li key={index}>{item}<span onClick={() => borrar(item)}>  X</span></li></div>)}
			</div>	
				
		</form>
		</div>
	);
};

export default Home;
