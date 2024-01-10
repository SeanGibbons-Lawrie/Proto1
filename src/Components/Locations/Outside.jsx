import { changeLocation } from '../../shared/helpers'

export default function Outside({ setCurrentLocation }) {
  return (
    <div className="location">
      <div className="padding">
        <label className="label">Location: Outside</label>
      </div>
      <div className="padding">
        <label className="label">Description of Location</label>
      </div>
      <div className="padding">
        <button
          id="home"
          onClick={(e) => changeLocation(e.target.id, setCurrentLocation)}
          className="label"
        >
          {'<'}=Home
        </button>
      </div>
      <div className="padding">
        <button
          id="dojo"
          onClick={(e) => changeLocation(e.target.id, setCurrentLocation)}
          className="label"
        >
          ={'>'}Dojo
        </button>
      </div>
      <div className="padding">
        <button className="label">Button 3</button>
      </div>
    </div>
  )
}
