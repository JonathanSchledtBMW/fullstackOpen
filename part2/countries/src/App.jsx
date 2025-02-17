import { useState, useEffect } from "react";
import countryService from "./services/countries";

function App() {
	const [countries, setCountries] = useState([]);

	useEffect(() => {
		countryService.getAll().then((initialCountries) => {
			setCountries(initialCountries);
		});
	}, []);

	return (
		<>
			<p>test</p>
			<div>{countries}</div>
		</>
	);
}

export default App;
