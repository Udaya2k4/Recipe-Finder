import React, { useState } from "react";
function TestFries(){
        const [Category, setCategory] = useState("");
        const [result,setResult]=useState(null);
    const getDetails = async(e)=>{
        e.preventDefault();
         setResult(null);
        const response = await fetch('http://localhost:4000/getFries',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({category: Category})
        })
       const result = await response.json();
        setResult(result);
    }
    return(
    <div>
        <h1>Vegetarian Recipes</h1>
       
              <form onSubmit={getDetails}>   
                  
                <input type="radio" name="f" value="Fry" onChange={(e)=>(setCategory(e.target.value))}></input> Fry<br></br>
                <input type="radio" name="f" value="Soup" onChange={(e)=>(setCategory(e.target.value))}></input> Soup<br></br>
                 <input type="radio" name="f" value="Curry" onChange={(e)=>(setCategory(e.target.value))}></input> Curry<br></br>
                 <input type="submit" value="Search veg"></input>
                 </form>
                
                    <form onSubmit={getDetails}>
                 <h1>Non-Vegetarian Recipes</h1>
                  <input type="radio" name="f1" value="Fish" onChange={(e)=>(setCategory(e.target.value))}></input> Fish<br></br>
                   <input type="radio" name="f1" value="Chicken" onChange={(e)=>(setCategory(e.target.value))}></input> Chicken<br></br>
                    <input type="radio" name="f1" value="Prawns" onChange={(e)=>(setCategory(e.target.value))}></input> Prawns<br></br>
                    <input type="submit" value="Search nonveg"></input>
                    </form>
                   
                       <form onSubmit={getDetails}>
                    <h1>Snacks</h1>
                     <input type="radio" name="f2" value="Frankies" onChange={(e)=>(setCategory(e.target.value))}></input> Frankies<br></br>
                      <input type="radio" name="f2" value="Chaat" onChange={(e)=>(setCategory(e.target.value))}></input> Chaat<br></br>
                        <input type="radio" name="f2" value="Beverages" onChange={(e)=>(setCategory(e.target.value))}></input> Beverages<br></br>
               <input type="submit" value="Search snacks"></input>
        </form>
            {result && result.map((x)=>(<tr><td>{x.name}</td><td><img src={`/${x.image.replace("public/", "")}`} alt="not found" height="100px"></img></td><td>Ingredients:{x.ingredients}</td></tr>))}
          </div>
    )
}
export default TestFries;
     
       