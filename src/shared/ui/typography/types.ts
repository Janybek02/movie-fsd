import type { ReactNode } from "react"


export interface TypographyProps  {
    variant:TVariant,
    color: TColor,
    wieght: TWieght,
    className?: string,
    truncate? :number,
    children: ReactNode,
}

export type TVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'bodyText' | 'smallBodyText'
export type TColor = 'white' | 'red' | 'black'
export type TWieght = 'regular' | 'medium'| 'semiBold' | 'bold'
