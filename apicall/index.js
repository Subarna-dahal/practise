

 async function fetchdata(){
    try{
   const response= await fetch('https://jsonplaceholder.typicode.com/todos/4')
   if(!response.ok){
     throw new Error(`failed to fetch the data:${response.status}`)
   }
    return response.json();
      
    }

    catch (e){
    console.log(e);
    }
}

const display= async()=>{
    const value=await fetchdata();
    if(value){
        const datacontainer=document.getElementById('subarna');
        datacontainer.innerHTML=`
        <p>UserID:${value.userId}</p>
        <h1>ID:${value.id}</h1>
        <h2>TITLE:${value.title}</h2>
        <p>data:${value.completed}</p>`
        ;
    }
}

display(); 