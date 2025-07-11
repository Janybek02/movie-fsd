import type { ChangeEvent, FC } from "react";
import type { InputProps } from "./types";
import styles from "./Input.module.scss"


export const Input: FC<InputProps> = ({
    value,
    placedolder = "asdfasdfa",
    onChange,
    className,
    types,
    disabled = false,

}) => {

    

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value)
    }

    return (
        <div className={styles.main}>
            <input className={className} type={types} value={value} onChange={handleChange} placeholder={placedolder} disabled={disabled} />
        </div>
    )
}