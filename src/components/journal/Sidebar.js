import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { JournalEntries } from "./JournalEntries";
import { startLogout } from "../../actions/auth";
import { startNewNote } from "../../actions/notes";

export const Sidebar = () => {
	const dispatch = useDispatch();
	const { name } = useSelector((state) => state.auth);

	const hanleLogout = () => {
		dispatch(startLogout());
	};

	const handleAddNew = () => {
		dispatch(startNewNote());
	};

	return (
		<aside className="journal__sidebar">
			<div className="journal__sidebar-navbar">
				<h3 className="mt-2">
					<i className="far fa-moon"></i>
					<span> {name}</span>
				</h3>

				<button className="btn" onClick={hanleLogout}>
					Logout
				</button>
			</div>

			<i
				className="fa
				 fa-calendar-plus fa-5x mt-5"
				style={{ textAlign: "center" }}
			></i>

			<div className="journal__new-entry">
				<button className="btn btn-primary" onClick={handleAddNew}>
					<p>
						Add New Note {"   "}
						<i
							className="fa
				 fa-pen"
							style={{ textAlign: "center" }}
						></i>
					</p>
				</button>
			</div>

			<JournalEntries />
		</aside>
	);
};
