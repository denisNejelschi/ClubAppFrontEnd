import React from "react";
import styles from "./header.module.css";
import Button from "../button/Button.tsx";

export const Header: React.FC = () => {
    return (
        <div className={styles.header_container}>
            <div className={styles.header_title_container}>
                <h1>----- Speaking club -----</h1>
            </div>
            <div className={styles.header_button_container}>
                <Button label={"Registration"} onClick={() => {
                }}></Button>
                <Button label={"Login"} onClick={() => {
                }}></Button>
            </div>
        </div>
    );
};