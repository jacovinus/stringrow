export type InputProps = {
    name: string;
    type: string;
    placeholder?: string;
    id: string;
    autoComplete?: string;
    className: string;
    required: boolean;
    defaultValue?:string;
};

const Input = ({
    name,
    type = "text",
    placeholder = "",
    autoComplete = "",
    id,
    className,
    defaultValue="",
    required = false,
}: InputProps) => {
    return (
        <input
            className={className}
            id={id}
            required={required}
            autoComplete={autoComplete}
            placeholder={placeholder}
            defaultValue={defaultValue}
            type={type}
            name={name}
        />
    );
};

export default Input