import React from "react";
import styles from "./header.module.css";
import Button from "../button/Button.tsx";

export const Header: React.FC = () => {
    return (
        <header>
            <div className={styles.header_container}>
                <h1>----- Speaking club -----</h1>
                <div className={styles.header_button_container}>
                    <Button label={"Registration"} onClick={function (): void {
                        throw new Error("Function not implemented.");
                    }}>

                    </Button>
                    <Button label={"Login"} onClick={function (): void {
                        throw new Error("Function not implemented.");
                    }}>

                    </Button>
                </div>
            </div>


        </header>
    );
};