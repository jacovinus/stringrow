export type LabelProps = {
    children: React.ReactNode;
    htmlFor: string;
};

const Label = ({ children, htmlFor }: LabelProps) => {
    return (
        <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor={htmlFor}
        >
            {children}
        </label>
    );
};

export default Label;
