import react,{useState} from 'react'

function Counter(){
    const [count , setcount] = useState(2)


    const CounterReduce =(e) =>{
        if(count!==0){
            setcount(count /2)
        }

    }
    
    const CounterIncrease =(e) =>{
        
            setcount(count *2)
        
    }
    return(
        <div>
            <h1>welcome to grssl</h1>
            <h3>{count} </h3>
            <button onClick={CounterReduce}>click here</button>
            <button onClick={CounterIncrease}>click here</button>
        </div>
    );
   
}
  
  export default Counter
