import React, {ReactElement, useState} from "react";
import Layout from "../components/layout";

export default class Calc extends React.Component {
	state = {
		tripLength: 0,
		fuelConsumption: 0,
		fuelPrice: 0,
		burntFuel: 0,
		burntFuelCost: 0,
	};

	calc = (): void => {
		this.setState((state: any) => {
			const burntFuel = this.round(state.tripLength / 100.0 * state.fuelConsumption, 2);
			const burntFuelCost = state.burntFuel * state.fuelPrice;

			return {
				burntFuel,
				burntFuelCost,
			};
		});
	};

	round = (num: number, decimalPlaces: number = 0): number => {
		const p = Math.pow(10, decimalPlaces);
		const n = (num * p) * (1 + Number.EPSILON);
		return Math.round(n) / p;
	};

	render(): ReactElement {
		return (
			<Layout>
				<div className="container">
					<div>
						Kalkulator trasy
					</div>
					<div className="calcTable">
						<div>Długość trasy [km]</div>
						<input type="text" value={this.state.tripLength}
							   onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
								   event.target.value = event.target.value.replace(/[,]/ig, ".");
								   event.target.value = event.target.value.replace(/[^\d\\.]/ig, "");
								   this.setState({tripLength: event.target.value});
								   this.calc();
							   }}/>
						<div>Spalanie [L/100km]</div>
						<input type="text" value={this.state.fuelConsumption}
							   onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
								   event.target.value = event.target.value.replace(/[,]/ig, ".");
								   event.target.value = event.target.value.replace(/[^\d\\.]/ig, "");
								   this.setState({fuelConsumption: event.target.value});
								   this.calc();
							   }}/>
						<div>Cena paliwa [zł/L]</div>
						<input type="text" value={this.state.fuelPrice}
							   onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
								   event.target.value = event.target.value.replace(/[,]/ig, ".");
								   event.target.value = event.target.value.replace(/[^\d\\.]/ig, "");
								   this.setState({fuelPrice: event.target.value});
								   this.calc();
							   }}/>
						<div>Spalone palowo [L]</div>
						<div>{this.state.burntFuel}</div>
						<div>Koszt paliwa [zł]</div>
						<div>{this.state.burntFuelCost}</div>
					</div>
				</div>
				<style jsx>{`
				.container {
				 	border: #000 1px solid;
					padding: 1em;
				}
				
				.calcTable {
					display: grid;
					grid-template-columns: 1fr 100px;
				}
				
				`}</style>
			</Layout>
		);
	}
}