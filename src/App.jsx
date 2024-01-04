import './styles.css'
import { useState } from 'react'
import Home from './Home'
import Outside from './Outside'

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

  return (
    <div className="game">
      <div className="status">
        <div className="label">
          <label>
            You {/*{name} */}
            <br />
            Lv: 1 &apos;Nobody&apos;
          </label>
        </div>
        {/*Lv:{level} '{title}' */}
        <div className="padding">
          <label className="label">HP: 50 / 50</label>
        </div>
        <div className="padding">
          <label className="label">EXP: 0 / 50</label>
        </div>
        <div className="padding">
          <label className="label">STR: 2</label>
        </div>
      </div>
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
