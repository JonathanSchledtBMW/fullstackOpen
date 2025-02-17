import personService from "../services/persons";

const PersonForm = ({
	handleNameChange,
	handleNumberChange,
	newName,
	newNumber,
	persons,
	errorMessage,
	setPersons,
	setNewName,
	setNewNumber,
	setMessage,
	setErrorMessage,
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
		const personObjectId = persons.find((person) => person.name === newName);

		const changedPerson = { ...personObject, number: newNumber };

		if (personExists()) {
			if (
				window.confirm(
					`${newName} is already added to phonebook, replace the old number with a new one?`
				)
			) {
				personService
					.update(personObjectId.id, changedPerson)
					.then((returnedPerson) => {
						setPersons(
							persons.map((person) =>
								person.id !== personObject.id ? person : returnedPerson
							)
						);
					})
					.catch((error) => {
						setErrorMessage(
							`Information of ${newName} has already been removed from server`
						);
						setTimeout(() => {
							setErrorMessage(null);
						}, 5000);
					});

				setMessage(`Updated ${newName}`);
				setTimeout(() => {
					setMessage(null);
				}, 5000);
			}
		} else {
			personService.create(personObject).then((returnedPerson) => {
				setPersons(persons.concat(returnedPerson));
			});
			setMessage(`Added ${newName}`);
			setTimeout(() => {
				setMessage(null);
			}, 5000);
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
