import React, { useState } from "react";// 1. importo el hook useState


//create your first component
const Home = () => {

	const [tarea, setTarea] = useState(""); // 2. lo ejecuto	
	const [lista, setLista] = useState([])
	let tareasPendientes = lista.length
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
		<div className="container text-center w-50">
			<h1 className="text-center mt-5">Lista de tareas</h1>
		<form className="list-group" onSubmit={submit}>
		<div className="list-group-item list-group-item-action">
			<label htmlFor="exampleInputEmail1" className="form-label"></label>
			<input type="text"  id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="¿Que se necesita hacer?"
			onChange={(e)=>setTarea(e.target.value)}
			value={tarea}
			/>
		</div>
			<div className="list-group">
			{lista.map((item,index)=><div className="list-group-item list-group-item-action"><li key={index}>{item}<span className= "float-end" onClick={() => borrar(item)}>  X</span></li></div>)}
			</div>	
				
		</form>
		<div>{tareasPendientes === 0 ? (<p> No hay tareas, añadir tareas </p>):(<p>{tareasPendientes} tareas en la lista</p>)}</div>
		</div>
	);
};

export default Home;
