import './App.css'
import Card from './Cards/Card.jsx'
import Body from './body/Body.jsx'
import useCoffeeData from './hooks/Api.js'

function App() {

    const [data, loading, error] = useCoffeeData()

    if (loading) return (
        <>
        <h1>Loading .... </h1>
        </>
    );
    if ( error ) return <p>{error}</p>;



    return (
        <>


        </>
    );
}

export default App
