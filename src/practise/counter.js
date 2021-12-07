import react,{useState} from 'react'

function Counter(){
    const [count , setcount] = useState(8)


    const CounterReduce =(e) =>{
        if(count!==0){
            setcount(count +2)
        }

    }
    
    const CounterIncrease =(e) =>{
        
            setcount(count -2)
        
    }
    return(
        <div>
        <div style={{color:'peachpuff',fontFamily:'sans-serif',textAlign:'center',backgroundColor:'crimson'}}>
            <h1>My cake shop</h1>
            <p>place your order</p>
            <h3>{count} </h3>
             
           
        
            <button onClick={CounterReduce} style={{color:'chocolate'}}><b>click here</b></button>
            <button onClick={CounterIncrease} style={{color:'chocolate'}}><b>click here</b></button>

            {/* <div img src="food.jpeg" alt="food" width="200" height="200"><h2>food logo</h2> */}
            {/* <p>indian,asian,continental</p> */}
            
            {/* </div> */}
        </div>
        </div>
    );
   
}
  
  export default Counter
