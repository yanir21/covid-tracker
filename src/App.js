import React from 'react';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {},
			country: ''
		};
	}

	async componentDidMount() {
		const fetchedData = await fetchData();
		this.setState({ data: fetchedData });
	}
	async handleCountryChange(country) {
		const fetchedData = await fetchData(country);
		this.setState({ data: fetchedData, country: country });
	}
	render() {
		const { data, country } = this.state;
		return (
			<div className={styles.container}>
				<img src="https://i.ibb.co/7QpKsCX/image.png"></img>
				<Cards data={data} />
				<CountryPicker onChangeCountry={country => this.handleCountryChange(country)} />
				<Chart data={data} country={country} />
			</div>
		);
	}
}

export default App;
