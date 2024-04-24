import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import ModemLockA from './components/ModemLockA.js';
import ModemLockB from './components/ModemLockB/ModemLockB.js';
import ModemLockBInfo from './components/ModemLockB/ModemLockBInfo.js';

import './styles/App.css';

const data = [
  ["If it's incorrect, have tech re-enter modem key, re-point and peak dish"],
  ["Confirm it's not plugged into a power strip or a surge protector", "Plug directly into a different outlet", "Plug directly into a different outlet on a different circuit"],
  ["If any are incorrect, have tech correct them, re-point and peak dish"],
  ["If there are any issues with the LOS, tech will need to work on getting it cleared", "Have the tech upload a picture of the LOS to confirm if its acceptable"],
  ["If mast is not plumb (straight up and down), have the tech straighten the mast on the mount"],
  ["Swap the TRIA and re-point and peak the dish"],
  ["If there are any visible damages or the reflector looks warped, swap with a new reflector"],
  ["Swap the modem"],
  ["Confirm the address if correct and escalate to Tier II to check if location is within the assigned beam", "If there is a better beam found, provide tech with modem key and have them re-point and peak dish", "If the tech is able to achieve modem lock and get it online, Tier II will request a beam reassignment before tech activates modem", "Only check if its a new install or if the account has been active for less than a year"]
];

function App() {

  const [pageView, setPageView] = useState(false);
  const [modemLock, setModemLock] = useState([false, false]);
  const [version, setVersion] = useState('');
  const [infoView, setInfoView] = useState(false);
  const [info, setInfo] = useState([]);

  function modemButtonSelect(e) {
    const val = undefined ? '' : e.target.value;
    if (val === 'a') {
      setModemLock([true, false]);
    } else if (val === 'b') {
      setModemLock([false, true]);
    }
    setPageView(true);
    setVersion(val.toUpperCase());
    return;
  }

  function homeButtonSelect(e) {
    setModemLock([false, false]);
    setPageView(false);
    setVersion('home');
    setInfoView(false);
    return;
  }

  function handleCardOnClick (x) {
    setInfoView(true);
    setInfo(data[x]);
    return;
  }

  function handleCardBackButton() {
    setInfoView(false);
    setInfo([]);
  }

  return (
    <div className="ts-demo">
      {
        pageView ?
          <div className='demo-view'>
            <div className='demo-header'>
              <h1 className='demo-title'>Modem Lock {version}</h1>
              <button
                className='home-btn'
                onClick={(e) => homeButtonSelect(e)}
              ><FontAwesomeIcon
                  icon={faHome} /></button>
            </div>
            {
              modemLock[0] ?
                <ModemLockA />
                :
                infoView ?
                  <ModemLockBInfo 
                    info={info}
                    FontAwesomeIcon={FontAwesomeIcon}
                    handleCardBackButton={handleCardBackButton}
                  />
                  :
                  <ModemLockB 
                    handleCardOnClick={handleCardOnClick}
                  />
            }
          </div>
          :
          <div className='btn-cont'>
            <button
              className='modem-lock'
              value='a'
              onClick={(e) => modemButtonSelect(e)}
            >Modem Lock A</button>
            <button
              className='modem-lock'
              value='b'
              onClick={(e) => modemButtonSelect(e)}
            >Modem Lock B</button>
          </div>
      }
    </div>
  );
}

export default App;
