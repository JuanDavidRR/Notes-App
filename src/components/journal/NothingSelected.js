import React from "react";

export const NothingSelected = () => {
	return (
		<div className="nothing__main-content">
			<h1>NotesApp</h1>
			¡Te damos la bienvenida a NotesApp, tú app web para añadir los
			más memorables recuerdos para que siempre puedas tenerlos a la
			mano!
			<ol>
				<li>
					{" "}
					Si deseas seleccionar una nota en la que estabas trabajando
					y la guardaste puedes encontrarlo en tu panel izquierdo en
					'Notas recientes'
				</li>
				<li>
					Si deseas agregar una nueva nota simplemente dirígete a tu
					panel izquierdo y haz clic en 'Add New Note' y escribe tus
					más memorables recuerdos
				</li>
				<li>
					Si deseas eliminar una nota seleccionala en nuestro panel
					izquierdo y ve a la parte inferior y da clic 'Delete'
				</li>
				<li>
					Para guardar tu nota simplemente ve a la parte superior
					derecha y da clic en 'Save' para salvar tus notas en la base
					de datos
				</li>
				<li>
					Si deseas adjuntar una foto para tu nota simplemente
					dirígete a la parte superior derecha y selecciona 'Picture'
					y allí adjunta una imagen de portada
				</li>
				<li>
					Si deseas finalizar tu sesión simplemente ve a la parte
					superior izquierda y da clic en 'Logout'
				</li>
			</ol>
		</div>
	);
};
