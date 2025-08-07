

interface ButtonProps{
    label : string;
    onClick : ()=> void;
    disabled? : boolean;
}

const Button:React.FC<ButtonProps> = ({label, onClick,disabled=false})=>{
    return(
       <div>
        <button onClick={onClick} disabled={disabled}>
            {label}
        </button>
       </div>
    )
}

export default Button;