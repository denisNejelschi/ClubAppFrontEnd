import React from "react";
import styles from "./header.module.css";

export const Header: React.FC = () => {
    return (
            <div className={styles.header_container}>
                <h1>----- Speaking club -----</h1>
            </div>
    );
};