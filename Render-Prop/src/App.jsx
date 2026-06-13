import './App.css'

function DeletBtn({data}){
  return(
    <div>
      {data}<button>Delete Button</button>
    </div>
  )
}

function AddIcon({data}){
  return(
    <div>
      {data}<span>&copy;</span>
    </div>
  )
}
function App() {

  return (
    <>
      <List RowUI={(index)=>{
        return <DeletBtn data={index}></DeletBtn>
      }} data={[1,2,3,4,5]}></List>
      <List data={[1,2,3,4,5]}></List>
      <List Icon={(index)=>{
        return <AddIcon data={index}></AddIcon>
      }} data={[1,2,3,4,5]}></List>
    </>
  )
}

function List({data,RowUI,Icon}){
  return(
      <>
      {data.map((index)=>{
        if(Icon){
          return Icon(index)
        }
        if(RowUI){
          return RowUI(index)
        }
        return <h1 >{index}</h1>
      })}
      </>
  )
}

export default App
