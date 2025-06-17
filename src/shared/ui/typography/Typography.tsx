import { type FC, type JSX } from "react";
import type { TVariant, TypographyProps } from "./types";
import classNames from "classnames";
import styles from './Typography.module.scss'
export const Typography: FC<TypographyProps> = (
    {
        variant,
        color,
        wieght,
        className,
        children,
    }) => {
    const Tags: Record<TVariant, keyof JSX.IntrinsicElements> = {
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        h4: 'h4',
        h5: 'h5',
        h6: 'h6',
        bodyText: 'p',
        smallBodyText: 'p'
    }
    const TagName = Tags[variant]
    const classNameGenerated = classNames(
        styles[variant],
        styles[color],
        styles[wieght],
        className
    )
    return (
        <TagName
            className={classNameGenerated}
        >
            {children}
        </TagName>
    );

};
