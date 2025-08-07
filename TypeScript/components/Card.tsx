


interface CardProps{
    children : React.ReactNode;
    style?: React.CSSProperties;
}

const Card:React.FC<CardProps> = ({children,style})=>{

    return(
        <div style={{padding: "20px",
            border: "1px solid black",
            borderRadius : "8px" , ...style
        }}>
            {children}
            
        </div>
    )

}

export default Card;