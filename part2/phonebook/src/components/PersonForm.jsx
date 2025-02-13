import axios from "axios";

const PersonForm = ({
	handleNameChange,
	handleNumberChange,
	newName,
	newNumber,
	persons,
	setPersons,
	setNewName,
	setNewNumber,
}) => {
	const personExists = () => {
		const personObject = persons.find((person) => person.name === newName);
		if (personObject) {
			return true;
		} else {
			return false;
		}
	};

	const addPerson = (event) => {
		event.preventDefault();
		const personObject = {
			name: newName,
			number: newNumber,
		};

		if (personExists()) {
			alert(`${newName} is already added to phonebook`);
		} else {
			axios
				.post("http://localhost:3001/persons", personObject)
				.then((response) => {
					setPersons(persons.concat(response.data));
				});
		}

		setNewName("");
		setNewNumber("");
	};

	return (
		<form onSubmit={addPerson}>
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
	);
};
export default PersonForm;
