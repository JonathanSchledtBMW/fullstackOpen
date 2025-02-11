import { useState } from "react";

const App = () => {
	const [persons, setPersons] = useState([
		{ name: "Arto Hellas", number: "040-123456", id: 1 },
		{ name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
		{ name: "Dan Abramov", number: "12-43-234345", id: 3 },
		{ name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
	]);
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [nameFilter, setNameFilter] = useState("");

	const personExists = () => {
		const personObject = persons.find((person) => person.name === newName);
		if (personObject) {
			return true;
		} else {
			return false;
		}
	};

	const addNameNumber = (event) => {
		event.preventDefault();
		const personObject = {
			name: newName,
			number: newNumber,
		};

		if (personExists()) {
			alert(`${newName} is already added to phonebook`);
		} else {
			setPersons(persons.concat(personObject));
		}

		setNewName("");
		setNewNumber("");
	};

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
			<div>
				filter shown with{" "}
				<input value={nameFilter} onChange={handleFilterChange} />
			</div>
			<h2>add a new</h2>
			<form onSubmit={addNameNumber}>
				<div>
					name: <input value={newName} onChange={handleNameChange} required />
				</div>
				<div>
					number:{" "}
					<input value={newNumber} onChange={handleNumberChange} required />
				</div>
				<div>
					<button type="submit">add</button>
				</div>
			</form>
			<h2>Numbers</h2>
			{persons
				.filter((person) =>
					person.name.toLowerCase().includes(nameFilter.toLowerCase())
				)
				.map((person) => (
					<p key={person.name}>
						{person.name} {person.number}
					</p>
				))}
		</div>
	);
};

export default App;
