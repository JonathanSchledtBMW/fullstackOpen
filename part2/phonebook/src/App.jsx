import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personService from "./services/persons";

const App = () => {
	const [persons, setPersons] = useState([]);
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [nameFilter, setNameFilter] = useState("");

	useEffect(() => {
		personService.getAll().then((initialPersons) => {
			setPersons(initialPersons);
		});
	}, []);

	const handleNameChange = (event) => {
		setNewName(event.target.value);
	};

	const handleNumberChange = (event) => {
		setNewNumber(event.target.value);
	};

	const handleFilterChange = (event) => {
		setNameFilter(event.target.value);
	};

	return (
		<div>
			<h2>Phonebook</h2>
			<Filter nameFilter={nameFilter} handleFilterChange={handleFilterChange} />
			<h2>add a new</h2>
			<PersonForm
				handleNameChange={handleNameChange}
				handleNumberChange={handleNumberChange}
				newName={newName}
				newNumber={newNumber}
				persons={persons}
				setPersons={setPersons}
				setNewName={setNewName}
				setNewNumber={setNewNumber}
			/>
			<h2>Numbers</h2>
			<Persons
				persons={persons}
				nameFilter={nameFilter}
				setPersons={setPersons}
			/>
		</div>
	);
};

export default App;
