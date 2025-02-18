import { useState } from "react";

const Button = ({ text, onClick }) => {
	return <button onClick={onClick}>{text}</button>;
};

const StatisticLine = ({ text, value, percent }) => (
	<tr>
		<td>{text}</td>
		<td>{value}</td>
		<td>{percent}</td>
	</tr>
);

const Statistics = ({ good, neutral, bad }) => {
	if (good + neutral + bad > 0)
		return (
			<div>
				<h1>statistics</h1>

				<table>
					<tbody>
						<StatisticLine text="good" value={good} />
						<StatisticLine text="neutral" value={neutral} />
						<StatisticLine text="bad" value={bad} />
						<StatisticLine text="all" value={good + neutral + bad} />
						<StatisticLine
							text="average"
							value={
								good + bad + neutral > 0 &&
								(good - bad) / (good + bad + neutral)
							}
						/>
						<StatisticLine
							text="positive"
							value={
								good + bad + neutral > 0 &&
								(good * 100) / (good + bad + neutral)
							}
							percent="%"
						/>
					</tbody>
				</table>
			</div>
		);
	return (
		<div>
			<h1>Statistics</h1>
			<p>No feedback given</p>
		</div>
	);
};

const App = () => {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	const increaseGood = () => {
		setGood(good + 1);
	};

	const increaseNeutral = () => {
		setNeutral(neutral + 1);
	};

	const increaseBad = () => {
		setBad(bad + 1);
	};

	return (
		<div>
			<h1>give feedback</h1>
			<Button onClick={increaseGood} text="good" />
			<Button onClick={increaseNeutral} text="neutral" />
			<Button onClick={increaseBad} text="bad" />
			<Statistics good={good} neutral={neutral} bad={bad} />
		</div>
	);
};

export default App;
