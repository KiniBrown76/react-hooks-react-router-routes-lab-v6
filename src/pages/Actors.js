import { useEffect, useState } from "react";
import Card from '../components/ReusableCard'
import NavBar  from "../components/NavBar";

const BaseUrl='http://localhost:4000/actors'
function Actors() {
  const [actors, setActors]= useState([])

  useEffect(()=>{
    fetch(BaseUrl)
    .then (res=> res.json())
    .then(data=> setActors(data))
    .catch(error=>console.error(error))
  },[])

  const actorList =actors.map(actor => <Card key={actor.id} name={actor.name} movies={actor.movies}/>)
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        {actorList}
      </main>
    </>
  );
};

export default Actors;