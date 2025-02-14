import personService from "../services/persons";

const Persons = ({ persons, nameFilter, setPersons }) => {
	const deleteHandler = (id) => {
		const currentPerson = persons.filter((person) => person.id === id);

		const currentName = currentPerson[0].name;

		if (window.confirm(`Delete ${currentName} ?`)) {
			personService.remove(id).then(() => {
				setPersons(persons.filter((person) => person.id !== id));
			});
		}
	};

	return (
		<div>
			{persons
				.filter((person) =>
					person.name.toLowerCase().includes(nameFilter.toLowerCase())
				)
				.map((person) => (
					<div key={person.id}>
						<p>
							{person.name} {person.number}
						</p>
						<button
							onClick={() => {
								deleteHandler(person.id);
							}}
						>
							delete
						</button>
					</div>
				))}
		</div>
	);
};
export default Persons;
