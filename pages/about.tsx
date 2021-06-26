import React, {ReactElement} from "react";
import Layout from "../components/layout";

export default class About extends React.Component {
	state = {
		bgColor: "rgb(255, 255, 255)",
	};

	changeToRandomBgColor = (): void => {
		const randomColor = () => Math.floor(Math.random() * 255);
		const newBgColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
		this.setState({bgColor: newBgColor});
	};

	maciejNameClick = (): void => {
		console.debug("Clicked on Maciej");
		this.changeToRandomBgColor();
	};

	render(): ReactElement {
		return <Layout>
			<div>
				<h2>Hi</h2>
				<div>
					<h2 className="name">I&apos;m <span className="maciej"
						onClick={this.maciejNameClick}>Maciej</span>
					</h2>
					<small>Pronounced ma-chey</small>
				</div>
				<div>
					<p>
						I&apos;m a developer from Poland. Rust is what I do and love.
					</p>
					<p>
						I do, however, have experience and use a variety of other languages and use
						them as see fit.
					</p>
				</div>
			</div>
			<style jsx>{`
			.name {
				margin: 0;
			}
			
			small {
				font-size: 0.6rem;
				margin: 0;
			}
			
			p {
			
			}
			
			.maciej:hover {
				cursor: pointer;
				background-color: #e6ebca;
				border-top: 2px solid #e6ebca;
				border-left: 2px solid #e6ebca;
				border-right: 5px solid #d2d9a7;
				border-bottom: 5px solid #d2d9a7;
				border-radius: 10px;
			}
			
			.maciej:active {
				cursor: pointer;
				background-color: #d2d9a7;
				border-top: 2px solid #d2d9a7;
				border-left: 2px solid #d2d9a7;
				border-right: 5px solid #e6ebca;
				border-bottom: 5px solid #e6ebca;
				border-radius: 10px;
			}
		`}</style>
			<style global jsx>{`
			body {
				background-color: ${this.state.bgColor};
			}
		`}</style>
		</Layout>;
	}
}