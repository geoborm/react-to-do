import React from 'react'

export default function PokeForm() {
   
    async function handleClick(e){
        e.preventDefault();
        console.log(e);
        try {
            let response = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
            let data = await response.json();
            return data;
        } catch(err){
            console.error(err);
        };
        e.target.task.value = '';
    }
  
    return (
        <form>
            <h1 className="text-center">Search Pokemon</h1>
            <div className="form-">
                {/* <label htmlFor="task">Enter task</label> */}
                <input className="form-control" type="text" name="task" placeholder='Enter Pokemon...' />
                <input type="submit" className='btn btn-outline-primary w-100 mt-3' />
            </div>
        </form>
  )
}

