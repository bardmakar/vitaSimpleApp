export default function Button ({children, onClick}) {

    console.log("Button component render")

    return (
        <div>
            <button onClick={onClick}>{children}</button>
        </div>
    )
}