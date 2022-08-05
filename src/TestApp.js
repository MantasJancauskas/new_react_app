import mc from './mc.svg';
import './Test.css';

function Test() {
    return (
        <div className='testas'>
            <header className='mc-header'>
                <img src={mc} className='mc-logo' alt='mc-logo' />
                <p>Testas naujo komponento</p>
            </header>
        </div>
    )
}

export default Test;