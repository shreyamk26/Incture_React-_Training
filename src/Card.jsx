// function Card(props){
function Card(props){
    return(
        // <div>
        //     <h2>Welcome:{props.name}</h2>
        //     <p>City:{props.city}</p>
    
        // </div>   ---for props---
        //   <div>
        //     <h2>Welcome:{name}</h2>
        //     <p>City:{city}</p>
    
        // </div>
        // without using props we directly use function Card({name,city})

        <div><h2>card Component</h2>
        {/* <button onClick={handleClick()}></button>//error */}
        <button onClick={props.onClick}>{props.label}</button>
        </div>
        
    )
}
 export default Card;