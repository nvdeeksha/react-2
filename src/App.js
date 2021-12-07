import cake from './cake.jpeg';
import logo from './cake2.webp';
import logo1 from './cake3.jpeg';
import './App.css';
import Counter from './practise/counter'

import Imageprops from './imageprops';

var img_array = [ cake, logo, logo1] 

function App() {
  return (
    <div>
    <div style={{textAlign:'center',fontFamily:'sans-serif',fontSize:'20px',color:'green'}}><h1>BAKING BOUTIQUE</h1> 
    
   <Counter/> 
    
    </div>
   <div><h2 style={{textAlign:'center',color:'purple'}}>menu</h2> 
   <div style={{display: "flex",alignItems: "center", justifyContent:'center'}}>
     
     {img_array.map(
       data => (
   <img src={data} alt="cake"/>
         
       )
     )}
   <img src="/img/cake.jpeg" alt="cake"/>;

{/* <Imageprops image="/img/cake.jpeg"/> */}
{/* <Imageprops image="/img/cake2.jpeg"/> */}
{/* <Imageprops image="/img/cake3.jpeg"/> */}

</div>

          </div>
      </div>

        
  );
}

export default App;



