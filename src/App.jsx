import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note';
import notes from './notes';
import CreateArea from './components/CreateArea';
import { useState } from 'react';


function App() {
 const[notes,setnote]=useState([])
  function addnote(note){
  //  console.log(note)
   setnote(prev=>{{
    return[...prev,note];
   }})
  }
  function detele(id){
    setnote((prev)=>{
      return prev.filter((item, index) => {
        return index !== id;
      });

    });
  }
  

  return (
    <div>
      <Header />
      <CreateArea add={addnote} />
      { notes.map((noteitem,index)=>{
        return <Note
        key={index}
        id={index}
        ondelete={detele}
        title={noteitem.title}
        content={noteitem.content}
        />
       })
      }
      <Footer />
    </div>
  );
}




export default App;
