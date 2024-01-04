import './styles.css'
import { useState } from 'react'
import Home from './Home'
import Outside from './Outside'
import Status from '../Status'

export default function App() {
  const [currentLocation, setCurrentLocation] = useState('home')
  const locations = {
    home: (
      <Home
        currentLocation={currentLocation}
        setCurrentLocation={setCurrentLocation}
      />
    ),
    outside: (
      <Outside
        currentLocation={currentLocation}
        setCurrentLocation={setCurrentLocation}
      />
    ),
  }
  const initialPlayerStatus = {
    name: 'You',
    lv: 1,
    hp: 50,
    maxHp: 50,
    exp: 0,
    maxExp: 50,
    str: 2,
  }

  const [playerStatus, setPlayerStatus] = useState(initialPlayerStatus)

  return (
    <div className="game">
      <Status playerStatus={playerStatus} setPlayerStatus={setPlayerStatus} />
      <div>{locations[currentLocation]}</div>
    </div>
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
