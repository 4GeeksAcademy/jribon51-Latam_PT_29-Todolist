import React, { useState } from "react";

//include images into your bundle


//create your first component
const Home = () => {
//	const [tarea, setTarea] = useState("");
	const [tareas,setTareas]=useState([{nombre:"tarea 1"}]);
	return (
		<div className="text-center mt-5 container">
			<div className="input-group mb-3">
				<div className="input-group-prepend">
					<span className="input-group-text">Todo's</span>
				</div>
				<input className="form-control form-control-lg" type="text" placeholder=".form-control-lg"
					onKeyDown={e => {
						if (e.key === 'Enter') {
//							setTarea(e.target.value);
							setTareas([...tareas, {nombre:e.target.value}]);
						}
					}}
				/>
				
			</div>
			<div>
					<ul>
						{tareas.map((tarea,index)=>{
							return (<li onClick={()=>{
								let copiaTareas = [...tareas];
								setTareas(copiaTareas.filter((tareaCopia,index)=>{
									return tareaCopia.nombre!=tarea.nombre
								}))
							}}>{tarea.nombre}</li>);
						})}
					</ul>
				</div>
		</div>
	);
};

export default Home;