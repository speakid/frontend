import "./Style.css";


export const Button = ({children, size = "Big", isInactive = false, isOutlined = false}) => {
    if (size !== "Big" && size !== "Small") throw new Error('Invalid size value. Size must be either "Big" or "Small"')
    function getClassNames(){
        let classNames = ["Button", `Button${size}`];
        if(isOutlined === false) classNames.push("Base");
        if(isOutlined === true) classNames.push("Outlined");
        if(isInactive) classNames.push("Inactive");
        return classNames.join(" ");
    }

    function clickHandler(e){
        if(isInactive){
            return
        }
        alert("a")
    }

    return (
        <button
            className={getClassNames()}
            onClick={clickHandler}
        >
            {children}
        </button>
    )
}