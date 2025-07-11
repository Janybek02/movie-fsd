import type { FC} from "react";
import { useState } from "react";
import { headerConfig } from "./header.config";
import { Link } from "react-router-dom";
import { Typography } from "../../../shared/ui/typography/Typography";
import styles from "./Header.module.scss"
import { Input } from "../../../shared/ui/input/Input";


export const Header: FC = () => {
    const [query, setQuery] = useState<string>("")
    console.log(query);
    
    return (
        <header className={styles.header}>
            <Typography variant="h5" color='red' wieght="bold">
                {headerConfig.logo}
            </Typography>
            <nav className={styles.nav}>
                {headerConfig.links.map((link) => {
                    return (
                    <div className={styles.links}>
                        <Link
                            key={link.href}
                            to={link.href}
                            className={styles.link}
                            >
                                <Typography variant="h5" color="white" wieght="medium">
                                    {link.label}
                                </Typography>
                            </Link>
                    </div>
                    )
                })}
            </nav>
            <div className={styles.left}>
                <div className={styles.search}>
                    <Input className={styles.input} types="text" disabled={false} placedolder="search" value={query} onChange={setQuery} />
                </div>
                <Typography variant="h5" color="white" wieght="medium">{headerConfig.lan}</Typography>
            </div>
        </header>
    )
}