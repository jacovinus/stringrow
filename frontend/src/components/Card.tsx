import React from "react";

export type CardProps = {
    id: string;
    className: string;
    children: React.ReactNode;
}

const Card = ({className, children, id}: CardProps) => {
    return <div id={id} className={className}>
        {children}
    </div>
}

export type CardContentProps = {
    children: React.ReactNode
}

const CardContent = ({children}:CardContentProps) => {
return <>{children}</>
}

export type CardHeaderProps = {
    children: React.ReactNode;
    className: string;
}

const CardHeader = ({children, className}: CardHeaderProps) => {
    return <div className={className}>
        {children}
    </div>
}

Card.CardContent = CardContent
Card.CardHeader = CardHeader
export default Card