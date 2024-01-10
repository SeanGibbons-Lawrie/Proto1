import './styles.css'
import { useEffect, useState } from 'react'
import Home from './Components/Locations/Home'
import Outside from './Components/Locations/Outside'
import Dojo from './Components/Locations/Dojo'
import Status from './Components/Status'
import * as enemies from './shared/characters'
import EnemyStatus from './Components/EnemyStatus'

export default function App() {
  const [mode, setMode] = useState('exploring')
  const [currentLocation, setCurrentLocation] = useState('home')
  const [playerStatus, setPlayerStatus] = useState(enemies.initialPlayerStatus)
  const [enemyStatus, setEnemyStatus] = useState(enemies.initialEnemyStatus)

  const locations = {
    home: <Home setCurrentLocation={setCurrentLocation} />,
    outside: <Outside setCurrentLocation={setCurrentLocation} />,
    dojo: (
      <Dojo
        currentLocation={currentLocation}
        setCurrentLocation={setCurrentLocation}
        setEnemyStatus={setEnemyStatus}
      />
    ),
  }

  const enemy = {
    initialEnemyStatus: (
      <EnemyStatus enemyStatus={enemyStatus} setEnemyStatus={setEnemyStatus} />
    ),
    woodenDummy: (
      <EnemyStatus enemyStatus={enemyStatus} setEnemyStatus={setEnemyStatus} />
    ),
  }

  return (
    <>
      <div className="flexRow">
        <Status playerStatus={playerStatus} setPlayerStatus={setPlayerStatus} />
        <div>{locations[currentLocation]}</div>
      </div>
      <div className="flexRow">
        <div>{enemy[enemyStatus]}</div>
      </div>
    </>
  )
}

// Function to generate location components dynamically
// const generateLocationComponents = () => {
//   const locationComponents = {};
//   locationNames.forEach((locationName) => {
//     locationComponents[locationName] = (
//       // Use a dynamic import or some other mechanism to get the component
//       React.createElement(LocationComponent, {
//         key: locationName,
//         currentLocation,
//         setCurrentLocation,
//       })
//     );
//   });
//   return locationComponents;
// };

// const locations = generateLocationComponents();
