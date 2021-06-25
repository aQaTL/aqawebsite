import React, {ReactElement} from "react";
import styles from "./layout.module.css";

interface LayoutProps {
	children: React.ReactNode
}

export default function Layout({children}: LayoutProps): ReactElement {
	return <div className={styles.container}>{children}</div>;
}