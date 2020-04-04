import React from 'react';
import pin from '../../dist/assets/pin.png';
import locationsExit from '../../dist/assets/locations-exit.png';

export default function Locations({ display, handleClick }){

    var countries = {
        "Africa": [["Egypt", "English"], ["Morocco", "English"], ["Maroc", "Français"], ["South Africa", "English"]],
        "Americas": [["Argentina", "Español"], ["Brasil", "Português"], ["Canada", "English"], ["Canada", "Français"], ["Chile","Español"], ["México", "Español"], ["United States", "English"], ["Uruguay", "Español"], ["América Latina", "Español"]],
        "AsiaPacific": [["Australia", "English"], ["中国大陆", "简体中文"], ["Hong Kong", "English"], ["香港", "繁體中文"], ["India", "English"], ["Indonesia", "English"], 
                        ["日本", "日本語"], ["Malaysia", "English"], ["New Zealand", "English"], ["Philippines", "English"], ["대한민국", "한국어"], ["Singapore", "English"], ["台灣", "繁體中文"],
                        ["ไทย", "ภาษาไทย"], ["Vietnam", "English"]],
        "Europe":   [ [ 'Österreich', 'Deutsch' ],
        [ 'Austria', 'English' ],
        [ 'Belgien', 'Deutsch' ],
        [ 'Belgium', 'English' ],
        [ 'Belgique', 'Français' ],
        [ 'België', 'Nederlands' ],
        [ 'Bulgaria', 'English' ],
        [ 'Croatia', 'English' ],
        [ 'Česká republika', 'Čeština' ],
        [ 'Czech Republic', 'English' ],
        [ 'Danmark', 'Dansk' ],
        [ 'Denmark', 'English' ],
        [ 'Finland', 'English' ],
        [ 'France', 'Français' ],
        [ 'Deutschland', 'Deutsch' ],
        [ 'Ελλάδα', 'ελληνικά' ],
        [ 'Hungary', 'English' ],
        [ 'Magyarország', 'Magyar' ],
        [ 'Ireland', 'English' ],
        [ 'Israel', 'English' ],
        [ 'Italia', 'Italiano' ],
        [ 'Luxemburg', 'Deutsch' ],
        [ 'Luxembourg', 'English' ],
        [ 'Luxembourg', 'Français' ],
        [ 'Netherlands', 'English' ],
        [ 'Nederland', 'Nederlands' ],
        [ 'Norway', 'English' ],
        [ 'Norge', 'Bokmål' ],
        [ 'Polska', 'Polski' ],
        [ 'Portugal', 'English' ],
        [ 'Portugal', 'Português' ],
        [ 'Romania', 'English' ],
        [ 'Россия', 'Русский' ],
        [ 'Slovakia', 'English' ],
        [ 'Slovenia', 'English' ],
        [ 'Espanya', 'Català' ],
        [ 'España', 'Español' ],
        [ 'Sweden', 'English' ],
        [ 'Sverige', 'Svenska' ],
        [ 'Schweiz', 'Deutsch' ],
        [ 'Switzerland', 'English' ],
        [ 'Suisse', 'Français' ],
        [ 'Svizzera', 'Italiano' ],
        [ 'Türkiye', 'Türkçe' ],
        [ 'United Kingdom', 'English' ]],
        "MiddleEast": [["Saudi Arabia", "English"], ["United Arab Emirates", "English"]]
    }    

    var handleExit = (e) => {
        // document.getElementsByClassName("location-modal")[0].classList.replace("location-modal", "location-modal-hidden");
        handleClick('');
    }



    return(
        <div className={display === 'locations' ? 'location-modal' : 'location-modal hidden'}>
            <img className='exit-locations' height="25px" src={locationsExit} onClick={handleExit}></img>
            <h1>Select your Location</h1><br></br>
            <div className='country-title'><h3>Africa</h3></div>
            <div className='country-container'>
                {countries.Africa.map((pair) => (
                    <div className='pair'>
                    <img height="20px" src={pin} className='pin-img'></img>
                    <div className='country-text'>
                        <div className='country-name'>{pair[0]}</div>
                        <div className='country-language'>{pair[1]}</div>
                    </div>
                </div>
                ))}
            </div>
            <div className='country-title'><h3>Americas</h3></div>
            <div className='country-container'>
                {countries.Americas.map((pair) => (
                    <div className='pair'>
                    <img height="20px" src={pin} className='pin-img'></img>
                    <div className='country-text'>
                        <div className='country-name'>{pair[0]}</div>
                        <div className='country-language'>{pair[1]}</div>
                    </div>
                </div>
                ))}
            </div>
            <div className='country-title'><h3>Asia Pacific</h3></div>
            <div className='country-container'>
                {countries.AsiaPacific.map((pair) => (
                    <div className='pair'>
                        <img height="20px" src={pin} className='pin-img'></img>
                        <div className='country-text'>
                            <div className='country-name'>{pair[0]}</div>
                            <div className='country-language'>{pair[1]}</div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='country-title'><h3>Europe</h3></div>
            <div className='country-container'>
                {countries.Europe.map((pair) => (
                    <div className='pair'>
                        <img height="20px" src={pin} className='pin-img'></img>
                        <div className='country-text'>
                            <div className='country-name'>{pair[0]}</div>
                            <div className='country-language'>{pair[1]}</div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='country-title'><h3>Middle East</h3></div>
            <div className='country-container'>
                {countries.MiddleEast.map((pair) => (
                    <div className='pair'>
                        <img height="20px" src={pin} className='pin-img'></img>
                        <div className='country-text'>
                            <div className='country-name'>{pair[0]}</div>
                            <div className='country-language'>{pair[1]}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

