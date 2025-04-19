import { ComponentProps } from "react"

type TVariant = "primary" | "secondary" | "danger" | "warnig" | "success"

type TButton = ComponentProps<"button"> & {
    variant?: TVariant
}

export default function Button({ children, variant, style, ...rest }: TButton) {

    console.log(checkvariant(variant));

    return (
        <button {...rest} style={{ borderRadius: "6px", padding: "4px 8px", ...style, ...checkvariant(variant) }}>
            {children}
        </button>
    )
}


function checkvariant(variant?: TVariant) {
    if (variant === "primary") {
        return { backgroundColor: "blue", color: "white" };
    } else if (variant === "secondary") {
        return { backgroundColor: "gray", color: "balck" };
    }
    else if (variant === "danger") {
        return { bakgroundColor: "green", color: "white" };
    }
    else if (variant === "success") {
        return { backgroundColor: "red", color: "white" };
    }
    else if (variant === "warnig") {
        return { backgroundColor: "yellow", color: "white" };
    }
}