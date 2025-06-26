const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const app = express();
app.use(cors());
app.use(bodyParser.json());
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'foodieshub'
});
app.post('/getFries',(req,res)=>{
  const {category} = req.body;
  console.log("Received category:", category);
  const sql = `select name,image,ingredients from recipes where category=?`;
  conn.query(sql,[category],(err,result)=>{
    if(err)
    {
      console.log('does not get the details'+err);
    }
    else 
    {
      console.log(result);
      res.json(result);
    }
  })
})
app.listen(4000, () => {
  console.log("Server running at http://localhost:4000");
}
)

  //------------const sql ="create database foodieshub";
  //const sql="CREATE TABLE recipes (id INT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(255) NOT NULL,category VARCHAR(100),ingredients TEXT,image VARCHAR(2083) )";
/*const sql=`INSERT INTO recipes (name, category, ingredients, image) VALUES 
('Spicy Chicken Fry', 'Chicken','Spicy, spice mix, salt, oil', 'public/image/spicychicken.jpg'),
('Tomato Soup', 'Soup', 'Tomato, spice mix, salt, oil', 'public/image/TomatoSoup.jpg'),
('Brinjal Curry', 'Curry', 'Brinjal, spice mix, salt, oil', 'public/image/BrinjalCurry.jpg'),
('Grilled Fish', 'Fish', 'Grilled, spice mix, salt, oil', 'public/image/Grilled Fish.jpg'),
('Butter Chicken', 'Chicken', 'Butter, spice mix, salt, oil', 'public/image/ButterChicken.jpg'),
('Garlic Prawns', 'Prawns', 'Garlic, spice mix, salt, oil', 'public/image/GarlicPrawns.jpg'),
('Veg Frankie', 'Frankies', 'Veg, spice mix, salt, oil', 'public/image/VegFrankie.jpg'),
('Pani Puri', 'Chaat', 'Pani, spice mix, salt, oil', 'public/image/PaniPuri.jpg'),
('Mango Smoothie', 'Beverages', 'Mango, spice mix, salt, oil', 'public/image/MangoSmoothie.jpg'),
('Paneer Fry', 'Fry', 'Paneer, spice mix, salt, oil', 'public/image/PaneerFry.jpg'),
('Lentil Soup', 'Soup', 'Lentil, spice mix, salt, oil', 'public/image/LentilSoup.jpg'),
('Fish Curry', 'Fish', 'Fish, spice mix, salt, oil', 'public/image/FishCurry.jpg'),
('Chicken Biryani', 'Chicken', 'Chicken, spice mix, salt, oil', 'public/image/ChickenBiryani.jpg'),
('Prawn Masala', 'Prawns', 'Prawn, spice mix, salt, oil', 'public/image/PrawnMasala.jpg'),
('Cheese Frankie', 'Frankies', 'Cheese, spice mix, salt, oil', 'public/image/CheeseFrankie.jpg'),
('Samosa Chaat', 'Chaat', 'Samosa, spice mix, salt, oil', 'public/image/SamosaChaat.jpg'),
('Cold Coffee', 'Beverages', 'Cold, spice mix, salt, oil', 'public/image/ColdCoffee.jpg'),
('Onion Pakora', 'Fry', 'Onion, spice mix, salt, oil', 'public/image/OnionPakora.jpg'),
('Sweet Corn Soup', 'Soup', 'Sweet corn, spice mix, salt, oil', 'public/image/SweetCornSoup.jpg'),
('Egg Curry', 'Curry', 'Egg, spice mix, salt, oil', 'public/image/EggCurry.jpg'),
('Fried Fish', 'Fish', 'Fried, spice mix, salt, oil', 'public/image/FriedFish.jpg'),
('Chicken Lollipop', 'Chicken', 'Chicken, spice mix, salt, oil', 'public/image/ChickenLollipop.jpg'),
('Prawn Tempura', 'Prawns', 'Prawn, spice mix, salt, oil', 'public/image/PrawnTempura.jpg'),
('Tandoori Frankie', 'Frankies', 'Tandoori, spice mix, salt, oil', 'public/image/TandooriFrankie.jpg'),
('Dahi Puri', 'Chaat', 'Dahi, spice mix, salt, oil', 'public/image/DahiPuri.jpg'),
('Lassi', 'Beverages', 'Lassi, spice mix, salt, oil', 'public/image/Lassi.jpg'),
('Aloo Fry', 'Fry', 'Aloo, spice mix, salt, oil', 'public/image/AlooFry.jpg'),
('Mushroom Soup', 'Soup', 'Mushroom, spice mix, salt, oil', 'public/image/Mushroom Soup.jpg'),
('Rajma Curry', 'Curry', 'Rajma, spice mix, salt, oil', 'public/image/RajmaCurry.jpg'),
('Fish Tikka', 'Fish', 'Fish, spice mix, salt, oil', 'public/image/FishTikka.jpg'),
('Chicken 65', 'Chicken', 'Chicken, spice mix, salt, oil', 'public/image/Chicken65.jpg'),
('Prawn Biryani', 'Prawns', 'Prawn, spice mix, salt, oil', 'public/image/PrawnBiryani.jpg'),
('Mixed Veg Frankie', 'Frankies', 'Mixed, spice mix, salt, oil', 'public/image/MixedVegFrankie.jpg'),
('Bhel Puri', 'Chaat', 'Bhel, spice mix, salt, oil', 'public/image/BhelPuri.jpg'),
('Lemonade', 'Beverages', 'Lemonade, spice mix, salt, oil', 'public/image/Lemonade.jpg'),
('Cauliflower Fry', 'Fry', 'Cauliflower, spice mix, salt, oil', 'public/image/CauliflowerFry.jpg'),
('Pumpkin Soup', 'Soup', 'Pumpkin, spice mix, salt, oil', 'public/image/PumpkinSoup.jpg'),
('Kadai Chicken', 'Chicken', 'Kadai, spice mix, salt, oil', 'public/image/KadaiChicken.jpg'),
('Fish Fingers', 'Fish', 'Fish, spice mix, salt, oil', 'public/image/FishFingers.jpg'),
('Chicken Korma', 'Chicken', 'Chicken, spice mix, salt, oil', 'public/image/Chicken Korma.jpg'),
('Prawn Koliwada', 'Prawns', 'Prawn, spice mix, salt, oil', 'public/image/PrawnKoliwada.jpg'),
('Egg Frankie', 'Frankies', 'Egg, spice mix, salt, oil', 'public/image/EggFrankie.jpg'),
('Ragda Pattice', 'Chaat', 'Ragda, spice mix, salt, oil', 'public/image/RagdaPattice.jpg'),
('Masala Chai', 'Beverages', 'Masala, milk,ginger', 'public/image/Masala Chai.jpg'),
('Ladys Finger Fry', 'Fry', 'Ladys Finger Fry, spice mix, salt, oil', 'public/image/LadysFingerFry.jpg'),
('Spinach Soup', 'Soup', 'Spinach, spice mix, salt, oil', 'public/image/SpinachSoup.jpg'),
('Chole Curry', 'Curry', 'Chole, spice mix, salt, oil', 'public/image/CholeCurry.jpg'),
('Crispy Fish', 'Fish', 'fish,tamarine, spice mix, salt, oil', 'public/image/CrispyFish.jpg'),
('Grilled Chicken', 'Chicken', 'chicken, spice mix, salt, oil', 'public/image/GrilledChicken.jpg'),
('Butter Garlic Prawns', 'Prawns', 'Butter,Prawns, spice mix, salt, oil', 'public/image/Butter Garlic Prawns.jpg')`;
 */

