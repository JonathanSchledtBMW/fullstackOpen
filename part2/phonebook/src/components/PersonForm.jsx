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

	return (
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
	);
};
export default PersonForm;
