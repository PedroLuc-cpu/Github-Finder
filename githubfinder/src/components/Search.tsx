type SearchProps = {
    loadUser:(userName: string) => Promise<void>;
}



import { useState, KeyboardEvent  } from "react";
import {BsSearch} from "react-icons/bs"

import classes from './Search.module.css';


function Search({loadUser}:SearchProps) {

        const [userName, SetUserName] = useState("")

        const handleKeyDown = (e: KeyboardEvent) =>{
          if(e.key === "Enter"){
            loadUser(userName)
          }
        }

  return (
    <div className={classes.search}>
        <h2>Busque por um usuário</h2>
        <p>Conheça seus melhores repositórios</p>
        <div className={classes.search_container}>
            <input 
            type="text" 
            placeholder='Digite o nome do usuário'
            onChange={(e)=> SetUserName(e.target.value)}
            onKeyDown={handleKeyDown}
             />
            <button onClick={() => loadUser(userName)}><BsSearch/></button>
        </div>
    </div>
  )
}

export default Search