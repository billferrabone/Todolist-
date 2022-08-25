import React, { useState } from "react";// 1. importo el hook useState


//create your first component
const Home = () => {

	const [tarea, setTarea] = useState(""); // 2. lo ejecuto	
	const [lista, setLista] = useState([])
	function submit(e) {
		e.preventDefault()
		console.log(tarea);
		setTarea("")
		setLista([...lista, tarea])
	}
	// function impresion(e) {
	// 	setLista(currentFruits => currentFruits.concat('Manzana'))
	// }	
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">ToDo List</h1>
		<form className="container" onSubmit={submit}>
		<div className="mb-3">
			<label htmlFor="exampleInputEmail1" className="form-label"></label>
			<input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="What needs to be done?"
			onChange={(e)=>setTarea(e.target.value)}
			// onKeyPress={(e)=>setTarea(e.target.value)}
			value={tarea}
			/>
			<div id="emailHelp" className="form-text"></div>
		</div>
		<div className="mb-3">
			{lista.map((item)=><li>{item}</li>)}
		</div>
		</form>
		</div>
	);
};

export default Home;
