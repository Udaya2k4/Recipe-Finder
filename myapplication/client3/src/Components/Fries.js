
// import React, { useState } from "react";

// function Fries() {
// //   const [recipes, setRecipes] = useState([]);
// //  const [results,setResults]=useState("");
// //  const [ingredients,setIngredients]=useState("");
// //   const fetchRecipes = async () => {
// //     try {
// //       const res = await fetch("http://localhost:4000/recipes/category/Fry");
// //       const data = await res.json();
// //       setRecipes(data);
// //     } catch (error) {
// //       console.error("Error fetching recipes:", error);
// //     }
// //   };





// const getDetails = async(e)=>{

//   const [fries,setFries]=useState('');
//    const [result1,setResult]=useState(null);

//   const response = await fetch('http://localhost:4000',{
//     method:'POST',
//     headers:{'Content-Type':'application/json'},
//     body:JSON.stringify({fries:fries})
//   })


//   const msg = await response.json();
//     setResult(msg);
// }



//   return (
//     <div style={{ textAlign: "center" }}>
//       <form onSubmit={getDetails}>      <input type="radio" name="f" value="potato" onChange={(e)=>(setFries(e.target.value))}></input> Potato
//             <input type="radio" name="f" value="mashroom" onChange={(e)=>(setFries(e.target.value))}></input> Mashroom
//     <input type="submit" value="Search"></input>
// <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
//         {recipes.map((recipe, index) => (
//           <div key={index} style={{ padding: "20px", width: "250px" }}>
//             <img
//               src={`/images/${recipe.image}`}
//               alt={recipe.name}
//               width="200px"
//               height="250px"
//             />
//             <h3>{recipe.name}</h3>
         
//           </div>
//         ))}
//     </div>
//     {result1 && result1[0].name}
//     </form>


//     </div>
//   );
// }

// export default Fries;


// {/*import React, { useState } from "react";
// import { Link } from "react-router-dom";
// function Fries() {
//   const [fries, setFries] = useState("");
//   const fetchFries = async () => {
//     try {
//       const res = await fetch(`http://localhost:4000/recipes/category/${category}`);
//       const data = await res.json();
//       setFries(data);
//     } catch (err) {
//       console.error("Error fetching fries:", err);
//     }

//   };
//   return (
//     <div style={{ textAlign: "center" }}>
//       <h2>Fries</h2>
//       <button onClick={fetchFries}> Load Fries</button>  
    
//       <div className="fries-grid" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
//         {fries.map((item, index) => (
//           <div key={index} style={{ padding: "20px", width: "250px" }}>
//             <img 
//             src={`/images/${item.image}`} 
//             alt={item.name} 
//             width="200px" height="200px"/>
//             <h4>{item.name}</h4>
//             <Link to={`/ingredients/${item.name}`}>
//               <button>Ingredients</button>
//             </Link>
//           </div>))} </div>
//           </div>
//           );
// }
// export default Fries;*/}
