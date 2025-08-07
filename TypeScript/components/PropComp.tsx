
// function PropComp(props){
//     return(
//         <div>
//             <h2>PropComp in Typescript</h2>
//             <p>Name : {props.name}</p>
//         </div>
//     )

interface MyProps{
    name :string ;

}

// const PropComp: React.FC<MyProps> = ({ name }) => { //FC Stands for functional Component

const PropComp=(props:MyProps)=>{
     return(
        <div>
            <h2>PropComp in Typescript</h2>
            <p>Name : {props.name}</p>
        </div>
    )

}

export default PropComp;