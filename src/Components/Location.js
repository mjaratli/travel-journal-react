import '../style.css';

function Location(props){
    return(
        <div className={"flex-container"}>
            <div className={"box"}>
            <img className={"image"} src={props.location.imageUrl} alt={"Location"}/>
            </div>
            <div className={"box"}>
                <h3>{props.location.location}</h3>
                <a href={props.location.googleMapsUrl}>View on Google Maps</a>
                <h2>{props.location.title}</h2>
                <h4>{props.location.startDate} - {props.location.endDate}</h4>
                <p>{props.location.description}</p>
            </div>
        </div>
    )
}

export default Location