const Header = ({ name }) => <h1>{name}</h1>;

const Content = ({ parts }) => (
	<div>
		{parts.map((part) => (
			<Part key={part.id} part={part} />
		))}
		<Total parts={parts} />
	</div>
);

const Part = ({ part }) => (
	<p>
		{part.name} {part.exercises}
	</p>
);

const Total = ({ parts }) => {
	console.log(parts);
	const total = parts.reduce(
		(accumulator, currentValue) => accumulator + currentValue.exercises,
		0
	);
	console.log(total);

	return (
		<p>
			<strong>total of {total} exercises</strong>
		</p>
	);
};

const Course = ({ course }) => {
	return (
		<div>
			<Header name={course.name} />
			<Content parts={course.parts} />
		</div>
	);
};

export default Course;
