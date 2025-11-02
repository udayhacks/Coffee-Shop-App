
import './App.css'
import Card from './Cards/Card.jsx';
import Body from  './body/Body.jsx'
function App() {

    const  data = {
        "id": 1,
        "name": "Cappuccino",
        "image": "./src/assets/bg-cafe.jpg",
        "price": "$5.20",
        "rating": 4.7,
        "votes": 65,
        "popular": true,
        "available": false
    }

  return (
    <>

        <div className="card">
            <Card {...data}/>
        </div>
    </>
  )
}

export default App
