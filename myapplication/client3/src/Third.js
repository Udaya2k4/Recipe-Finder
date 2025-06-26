
import React from "react"

class Display extends React.Component(){
    render(){
return(
        <div>
            <h1>Iam display function</h1>
        </div>
    )

}
} 
const Display1 = ()=>{
    return(
        <div>
            <h1>Iam Display1 function</h1>
           
        </div>
    )
} 
function Third(){
    return(
        <div>
            <h1>Iam Third function</h1>
             <Display />
             <Display1 />
        </div>
    )
}
export default Third;