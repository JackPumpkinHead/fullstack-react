import React from "react";

import styles from "./index.module.scss";

interface ISegment {
    title: React.ReactNode;
    size?: 1 | 2;
    description?: string;
    children?: React.ReactNode;
}

export const Segment = ({ title, size = 1, description, children }: ISegment) => {
    return (
        <div className={styles.segment}>
            {size === 1 ? <h1 className={styles.title}>{title}</h1> : <h2 className={styles.title}>{title}</h2>}
            {description && <p className={styles.description}>{description}</p>}
            {children && <h1 className={styles.content}>{children}</h1>}
        </div>
    );
};
