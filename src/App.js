import React, {useState} from "react";
const initialDictionary=
  
[

  { word: "React", meaning: "A JavaScript library for building user interfaces." },

  { word: "Component", meaning: "A reusable building block in React." },

  { word: "State", meaning: "An object that stores data for a component." }

];
 const App=()=>{
  const [dictionary]=useState(initialDictionary);
  const[searchTerm,setSearchTerm]=useState("");
  const [result,setResult]=useState(null);
  const handleSearch=()=>{
    if(!searchTerm.trim()){
      setResult("Please enter a search term.");
      return;
    }
    const foundWord=dictionary.find(
      (entry)=>entry.word.toLowerCase()===searchTerm.toLowerCase()
    );
    if(foundWord){
      setResult(foundWord.meaning);
    } else {
      setResult("Word not found in the dictionary.");
    }
  };
  return(
    <div style={{padding:"20px",fontFamily:"Arial,sans-serif"}}>
      <h1>Dictionary App</h1>
      <div style={{marginBottom:"20px"}}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e)=>setSearchTerm(e.target.value)}
          placeholder="Enter a word"
          style={{padding:"10px",width:"200px",marginRight:"10px"}}
        />
        <button
          onClick={handleSearch}
          style={{padding:"10px 20px",cursor:"pointer"}}
        >
          Search
        </button>
      </div>
      <h2>Definition:</h2>
      {result && (
        <div 
          style={{
            marginTop:"10px",
            padding:"10px",
            border:"1px solid #ccc",
            maxWidth:"400px",
            borderRadius:"5px",
          }}
        >
          {result}
        </div>
      )}
    </div>
  );
 };

 export default App;


