import "../styles/ModemLockA.css";

const ModemLockA = () => {
    return (
        <section className="modem-lock-a">
            <div className="modem-lock-a-card">
                <ul className="modem-lock-list">
                    <li className="modem-lock-list-item">Check if modem key is correct</li>
                    <ul className="modem-lock-desc-list">
                        <li className="modem-lock-desc-list-item">
                            If it's incorrect, have tech re-enter modem key, re-point and peak dish
                        </li>
                    </ul>

                    <li className="modem-lock-list-item"> Check the power source</li>
                    <ul className="modem-lock-desc-list">
                        <li className="modem-lock-desc-list-item">
                            Confirm it's not plugged into a power strip or a surge protector
                        </li>
                        <li className="modem-lock-desc-list-item">
                            Plug directly into a different outlet
                        </li>
                        <li className="modem-lock-desc-list-item">
                            Plug directly into a different outlet on a different circuit
                        </li>
                    </ul>

                    <li className="modem-lock-list-item">Check if Azimuth(Az), Elevation(El), and skew is correct</li>
                    <ul className="modem-lock-desc-list">
                        <li className="modem-lock-desc-list-item">
                            If any are incorrect, have tech correct them, re-point and peak dish
                        </li>
                    </ul>

                    <li className="modem-lock-list-item">Check the Line of Sight (LOS) for any obstructions</li>
                    <ul className="modem-lock-desc-list">
                        <li className="modem-lock-desc-list-item">
                            If there are any issues with the LOS, tech will need to work on getting it cleared
                        </li>
                        <li className="modem-lock-desc-list-item">
                            Have the tech upload a picture of the LOS to confirm if its acceptable
                        </li>
                    </ul>

                    <li className="modem-lock-list-item">Check for a plumb mast</li>
                    <ul className="modem-lock-desc-list">
                        <li className="modem-lock-desc-list-item">
                            If mast is not plumb (straight up and down), have the tech straighten the mast on the mount
                        </li>
                    </ul>

                    <li className="modem-lock-list-item">Swap the TRIA</li>
                    <ul className="modem-lock-desc-list">
                        <li className="modem-lock-desc-list-item">
                            Swap the TRIA and re-point and peak the dish
                        </li>
                    </ul>

                    <li className="modem-lock-list-item">Check the reflector</li>
                    <ul className="modem-lock-desc-list">
                        <li className="modem-lock-desc-list-item">
                            If there are any visible damages or the reflector looks warped, swap with a new reflector
                        </li>
                    </ul>

                    <li className="modem-lock-list-item modem-lock-desc-list">Swap the modem</li>
                    
                    <li className="modem-lock-list-item">Escalate to Tier II to check for GEODE issue</li>
                    <ul className="modem-lock-desc-list">
                        <li className="modem-lock-desc-list-item">
                            Confirm the address if correct and escalate to Tier II to check if location is within the assigned beam
                        </li>
                        <li className="modem-lock-desc-list-item">
                            If there is a better beam found, provide tech with modem key and have them re-point and peak dish
                        </li>
                        <li className="modem-lock-desc-list-item">
                            If the tech is able to achieve modem lock and get it online, Tier II will request a beam reassignment before tech activates modem. 
                        </li>
                        <li className="modem-lock-desc-list-item">
                            Only check if its a new install or if the account has been active for less than a year
                        </li>
                    </ul>
                </ul>
            </div>
        </section>
    );
}

export default ModemLockA;