export type ButtonProps = {
    type:"button" | "submit" | "reset" | undefined;
    className:string;
    children: React.ReactNode
}



export const Button = ({type="button", className, children}:ButtonProps) => {
    return <button type={type} className={className}>
        {children}
    </button>
}

export default Button