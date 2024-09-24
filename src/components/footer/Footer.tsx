import React from "react";
import styles from "./footer.module.css"
import Button from "../button/Button";

export const Footer: React.FC = () => {
    return (
        <div className={styles.footer_container}>
            <h3>
                Footer component
            </h3>
            <Button label={'login'} onClick={function(): void {
                throw new Error('Function not implemented.');
            }}
            />
        </div>
    );
};
