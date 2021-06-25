import React, {ReactElement} from "react";
import Link from "next/link";
import Layout from "../../components/layout";

export default function FirstPost(): ReactElement {
	return (
		<Layout>
			<div className="container">
				<h1>First Post</h1>
				<h2>
					<Link href="/">
						<a>Back to home</a>
					</Link>
				</h2>
			</div>
			<style jsx>{`
			.container {
			}
		`}</style>
		</Layout>
	);
}