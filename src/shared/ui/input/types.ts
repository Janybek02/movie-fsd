import type { InputHTMLAttributes } from "react";

type inputTypes = "number" | "search" | "button" | "time" | "image" | "text" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "month" | "password" | "radio" | "range"

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'>{
    value: string;
    placedolder: string;
    onChange: (value: string) => void
    disabled: boolean;
    className: string;
    types: inputTypes
}