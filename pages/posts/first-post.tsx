import React, {ReactElement} from "react";
import Link from "next/link";
import Head from "next/head";

export default function FirstPost(): ReactElement {
	return (
		<>
		<div className="container">
			<Head>
				<title>First post!</title>
			</Head>
			<h1>First Post</h1>
			<h2>
				<Link href="/">
					<a>Back to home</a>
				</Link>
			</h2>
		</div>
		<style jsx>{`
			.container {
				padding-left: 2em;
			}
		`}</style>
		</>
	);
}