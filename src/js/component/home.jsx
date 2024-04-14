import React, { useState } from "react";
import { renderToNodeStream } from "react-dom/server";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faTrash } from '@fortawesome/free-solid-svg-icons';
//include images into your bundle


//create your first component
const Home = () => {
	//	const [tarea, setTarea] = useState("");
	const [tareas, setTareas] = useState([]);
	const [inputValue, setInputValue] = useState('');

	const handleEnterPress = (event) => {
		if (event.key === 'Enter') {
			handleAddTodo();
		}
	};

	const handleInputChange = (event) => {
		setInputValue(event.target.value);
	};

	const handleAddTodo = () => {
		if (inputValue.trim() !== '') { //si el input limpio de espacios es distinto a string vacío
			setTareas([...tareas,inputValue]); //lo agrega al array tareas
			setInputValue(''); // Limpia el input
		}
	};

	const handleDeleteTodo = (index) => {
		const newTareas = [...tareas]; // Hace una copia del array en la variable
		newTareas.splice(index, 1); //recorta del array, según el index dado
		setTareas(newTareas); //El array sin el elemento recortado es el nuevo valor de todos
	};

	return (
		<div className="text-center mt-5 container">
			<h1>Todo</h1>
			<div className="">
				{/* <label htmlFor="todoInput" className="form-label">¡Creá tu lista de Tareas!</label> */}
				<input
					type="text"
					value={inputValue}
					onChange={handleInputChange}
					onKeyDown={handleEnterPress}
					placeholder="Ingresa una tarea"
					className="form-control"
				/>
			</div>
			<div> 
				<ul className="list-group">
					{tareas.map((tarea, index) => (
						<li key={index} className="text-primary fs-3 px-5 list-group-item d-flex justify-content-between align-items-center">
							{tarea}
							<button onClick={() => handleDeleteTodo(index)} className="btn btn-danger boton">
								<i class="fas fa-trash-alt"></i>
							</button>
						</li>
					))}
				</ul>
			</div>
			<h1>Cantidad de tareas: {tareas.length}</h1>
		</div>
	);
};

export default Home;