import "../../styles/ModemLockB.css";

const ModemLockB = ({ handleCardOnClick }) => {
    return (
        <section className="modem-lock-b">
            <div className="modem-lock-b-card-cont">
                <div 
                    className="modem-lock-b-card"
                    onClick={() => handleCardOnClick(0)}
                >
                    <h3 className="modem-lock-list-title">Check if modem key is correct</h3>
                </div>

                <div 
                    className="modem-lock-b-card"
                    onClick={() => handleCardOnClick(1)}
                >
                    <h3 className="modem-lock-list-title"> Check the power source</h3>
                </div>

                <div 
                    className="modem-lock-b-card"
                    onClick={() => handleCardOnClick(2)}
                >
                    <h3 className="modem-lock-list-title">Check if Azimuth(Az), Elevation(El), and skew is correct</h3>
                </div>

                <div 
                    className="modem-lock-b-card"
                    onClick={() => handleCardOnClick(3)}
                >
                    <h3 className="modem-lock-list-title">Check the Line of Sight (LOS) for any obstructions</h3>
                </div>

                <div 
                    className="modem-lock-b-card"
                    onClick={() => handleCardOnClick(4)}
                >
                    <h3 className="modem-lock-list-title">Check for a plumb mast</h3>
                </div>

                <div 
                    className="modem-lock-b-card"
                    onClick={() => handleCardOnClick(5)}
                >
                    <h3 className="modem-lock-list-title">Swap the TRIA</h3>
                </div>

                <div 
                    className="modem-lock-b-card"
                    onClick={() => handleCardOnClick(6)}
                >
                    <h3 className="modem-lock-list-title">Check the reflector</h3>
                </div>

                <div 
                    className="modem-lock-b-card"
                    onClick={() => handleCardOnClick(7)}
                >
                    <h3 className="modem-lock-list-title">Swap the modem</h3>
                </div>

                <div 
                    className="modem-lock-b-card"
                    onClick={() => handleCardOnClick(8)}
                >
                    <h3 className="modem-lock-list-title">Escalate to Tier II to check for GEODE issue</h3>
                </div>

            </div>
        </section>
    );
}

export default ModemLockB;