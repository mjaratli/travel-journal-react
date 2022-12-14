import Header from './Components/Header';
import Location from './Components/Location';
import data from './data';

function App(){
    const locations = data.map(location =>{
        return <Location
            key = {location.id}
            location={location}
            />
    })
    return(
        <div>
            <Header/>
            {locations}
        </div>
    )

}

export default App