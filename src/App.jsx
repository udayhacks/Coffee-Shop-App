import './App.css'
import Card from './Cards/Card.jsx'
import Body from './body/Body.jsx'
import useCoffeeData from './hooks/Api.js'

function App() {

    const [coffee, loading, error] = useCoffeeData()
    console.log(coffee);

    if (loading) return (
        <>
        <h1>Loading .... </h1>
        </>
    );
    if ( error ) return <p>{error}</p>;



    return (
        <>
            <div className="Title">
                <h1>Coffe shop </h1>
            </div>
            <div className="item">
                {coffee.map((item) => (
                    <Card key={item.id} {...item} />
                ))}
            </div>


        </>
    );
}

export default App
