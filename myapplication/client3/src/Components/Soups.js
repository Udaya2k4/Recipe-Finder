
import React from "react";
import {  Link } from "react-router-dom";
function Soups(){
    return(

        <div className="Soups">
        <div className="Soups-grid">
          <div> <img src="https://tse1.mm.bing.net/th?id=OIP.VxOnG3WljhMgNvQe6J7CegHaEn&pid=Api&P=0&h=180" width="300px" height="300px"></img><br></br>Pumpkin Soup<br></br>
           <Link to="/pumpkin"><button>Ingredients</button></Link></div>
          <div>  <img src="https://tse1.mm.bing.net/th?id=OIP.kKX_AY90yXWeX6fmoe7teQHaEK&pid=Api&P=0&h=180" width="300px" height="300px"></img><br></br>Tomato Soup
          <br></br> <Link to="/tomato"><button>Ingredients</button></Link></div>
           <div> <img src="https://tse2.mm.bing.net/th?id=OIP.I07u7yJCEHcu7J87GSItkQHaEg&pid=Api&P=0&h=180" width="300px" height="300px" ></img><br></br>Spring Onion Soup
           <br></br> <Link to="/springonin"><button>Ingredients</button></Link> </div> 
           <div><img src="https://tse3.mm.bing.net/th?id=OIP.-muQ8WcciowYCFDG7IH0ggHaFj&pid=Api&P=0&h=180" width="300px" height="300px"></img><br></br>Bottle Guard Soup
           <br></br> <Link to="/bottleguard"><button>Ingredients</button></Link></div>
           <div> <img src="https://tse2.mm.bing.net/th?id=OIP.2oVEgzsCbvXJZHG1IYVXhgHaLH&pid=Api&P=0&h=180" width="300px" height="300px" ></img><br></br>Sweet potato Soup
           <br></br> <Link to="/sweetpotato"><button>Ingredients</button></Link></div> 
            <div> <img src="https://tse2.mm.bing.net/th?id=OIP.PWZGiyFd4uYr57FX9-qp7AHaEt&pid=Api&P=0&h=180" width="300px" height="300px" ></img><br></br>Paneer Soup
            <br></br> <Link to="/paneersoup"><button>Ingredients</button></Link></div> 
        </div>
       </div> 
        
    )
}
export default Soups;