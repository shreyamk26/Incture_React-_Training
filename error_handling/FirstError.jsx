

function FirstError(props){
    try{ //if we handle using these try and catch error message is showas on screen wrote in catch
// throw new Error("Something broken......") //it shows some eror and we cant handle(we not see anything on the screen)
//if we comment the try then it works fine since to show error message in catch we use try block
    }
    catch(error){
        return <p>Some error happen in first error component</p>
    }
    return(
        <div>
            <h1>This is First Error Component from Error folder</h1>
            <h2>{props.name}</h2>
        </div>
    )
}
export default FirstError;