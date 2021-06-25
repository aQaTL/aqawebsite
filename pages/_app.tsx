import React, {ReactElement} from "react";
import {AppProps} from "next/app";
import Head from "next/head";

import "@fontsource/ubuntu/300.css";
import "@fontsource/ubuntu/400.css";
import "@fontsource/ubuntu/500.css";
import "@fontsource/ubuntu/700.css";
import "@fontsource/ubuntu/300-italic.css";
import "@fontsource/ubuntu/400-italic.css";
import "@fontsource/ubuntu/500-italic.css";
import "@fontsource/ubuntu/700-italic.css";

import "../styles/global.css";

export default function App({Component, pageProps}: AppProps): ReactElement {
	return <>
		<Head>
			<title>aQaWebsite</title>
			<link rel="icon" href="/favicon.ico"/>
		</Head>
		<Component {...pageProps} />
	</>;
}
