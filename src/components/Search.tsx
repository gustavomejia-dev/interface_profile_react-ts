import React from 'react'
type SearchProps = {
  loadUser: (userName: string) =>Promise<void>
}
import { useState,KeyboardEvent } from "react";
import { BsSearch } from "react-icons/bs";
import classes from "./Search.module.css"

function Search({loadUser}:SearchProps) {
  const[userName, setUserName] = useState("")
  const handleKeyDown = (e:KeyboardEvent)=>{//função que ao pressionar enter busca usuario
    if(e.key ==="Enter"){
      loadUser(userName);

    }
  }
  return (
    <div className={classes.search}>
      <h2>Busque por um Usuário</h2>
      <div className={classes.search_container}>
        <input type="text" placeholder="Digite o nome do Usuário" 
          onChange={(e)=>setUserName(e.target.value)}
          onKeyDown={handleKeyDown}/>
        <button  onClick={()=>loadUser(userName)} className="btn-principal"><BsSearch/></button>
      </div>


    </div>
  )
}

export default Search