import React from 'react';
import './AddGames.css'
import * as API from "../../Api/game-service";

const AddGames = (props) => {
    const [value, setValue] = React.useState('')

    async function addGame() {
        if (!value) {
            alert('Name cannot be empty');
            return false;
        }

        await API.addGame(value)
        setValue('')
        await props.refreshGames()
    }

    return (
        <div className='addGames'>
            <input className='input' placeholder="game name" value={value}
                   onChange={(event) => setValue(event.target.value)}/>
            <button className='buttonNew' onClick={addGame}>Add new Game</button>
        </div>
    );
}

export default AddGames;
