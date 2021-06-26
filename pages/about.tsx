import React, {ReactElement} from "react";
import Layout from "../components/layout";

export default function About(): ReactElement {
	return <Layout>
		<div>
			<h2>Hi</h2>
			<div>
				<h2 className="name">I&apos;m Maciej</h2>
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
		`}</style>
	</Layout>;
}