import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "../../styles/ModemLockBInfo.css";

const ModemLockBInfo = ({ info, FontAwesomeIcon, handleCardBackButton }) => {
    return (
        <div className="modem-lock-b-info">
            <div className="b-info-card">
                <ul className="b-info-list">
                    {
                        info.map((data, i) => {
                            return (
                                <li 
                                    className="b-info-list-item"
                                    key={i}
                                >{data}</li>
                            )
                            
                        })
                    }
                </ul>
                <button
                    className="back-btn"
                    onClick={() => handleCardBackButton()}
                ><FontAwesomeIcon icon={faArrowLeft} /></button>
            </div>
        </div>
    );
}

export default ModemLockBInfo;