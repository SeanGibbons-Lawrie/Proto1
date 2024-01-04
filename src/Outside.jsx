export default function Outside({ currentLocation, setCurrentLocation }) {
  function changeLocation(locationDestination) {
    setCurrentLocation(locationDestination)
    console.log(locationDestination)
  }

  return (
    <div className="outside">
      <div className="padding">
        <label className="label">Location: Outside</label>
      </div>
      <div className="padding">
        <label className="label">Description of Location</label>
      </div>
      <div className="padding">
        <button
          id="home"
          onClick={(e) => changeLocation(e.target.id)}
          className="label"
        >
          {'<'}=Home
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
