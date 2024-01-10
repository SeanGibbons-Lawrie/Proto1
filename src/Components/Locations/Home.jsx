import { changeLocation } from '../../shared/helpers'

export default function Home({ setCurrentLocation }) {
  return (
    <div className="location">
      <div className="padding">
        <label className="label">Location: Home</label>
      </div>
      <div className="padding">
        <label className="label">Description of Location</label>
      </div>
      <div className="padding">
        <button
          id="outside"
          onClick={(e) => changeLocation(e.target.id, setCurrentLocation)}
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
