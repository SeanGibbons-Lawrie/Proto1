import { changeLocation, changeEnemy } from '../../shared/helpers'

export default function Dojo({
  currentLocation,
  setCurrentLocation,
  setEnemyStatus,
}) {
  if (currentLocation === 'dojo') {
  }

  return (
    <div className="location">
      <div className="padding">
        <label className="label">Location: Dojo</label>
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
          {'<'}=Outside
        </button>
      </div>
      <div className="padding">
        <button
          id="woodenDummy"
          onClick={
            (e) => changeEnemy(e.target.id, setEnemyStatus)
            // fight(initialPlayerStatus, woodenDummy)
          }
          className="label"
        >
          Train
        </button>
      </div>
      <div className="padding">
        <button className="label">Button 3</button>
      </div>
    </div>
  )
}
