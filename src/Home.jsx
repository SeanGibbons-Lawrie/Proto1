export default function Home({ currentLocation, setCurrentLocation }) {
  function changeLocation(locationDestination) {
    setCurrentLocation(locationDestination)
    console.log(locationDestination)
  }
  return (
    <div className="home">
      <div className="padding">
        <label className="label">Location: Home</label>
      </div>
      <div className="padding">
        <label className="label">Description of Location</label>
      </div>
      <div className="padding">
        <button
          id="outside"
          onClick={(e) => changeLocation(e.target.id)}
          className="label"
        >
          ={'>'}Outside
        </button>
      </div>
      <div className="padding">
        <button className="label">Button 2</button>
      </div>
      <div className="padding">
        <button className="label">Button 3</button>
      </div>
    </div>
  )
}
