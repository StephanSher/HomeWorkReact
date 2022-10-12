import React, {useState, useEffect} from 'react';
import './Games.css'
import AddGames from "../AddGames/AddGames";
import * as API from "../../Api/game-service";

const Games = () => {
    const [editGameId, setEditGameId] = useState('')
    const [value, setValue] = useState('')
    const [games, setGames] = useState([])

    useEffect(() => {
        refreshGames()
    }, [])

    const refreshGames = async () => {
        setGames(await API.getGames())
    }

    const deleteGameAndRefresh = async function (id) {
        await API.deleteGame(id)
        await refreshGames()
    }
    const editGame = function (id, name) {
        setEditGameId(id)
        setValue(name)

    }

    const save = async function (id) {
        await API.saveGame(id, value)
        await refreshGames()
        setEditGameId('')
    }

    return (
        <div>
            <AddGames refreshGames={refreshGames}/>
            <div className='allCards'>
                {games.map(item => (
                    <div className='cards' key={item.id}>
                        {
                            editGameId === item.id ?
                                <div>
                                    <input className='input' value={value}
                                           onChange={(el) => setValue(el.target.value)}/>
                                    <button className='save' onClick={() => save(item.id)}>Save</button>
                                </div> :

                                <div>
                                    <div className='item'>{item.name}</div>
                                    <span>
                                    <button className='buttonEd' onClick={() => editGame(item.id, item.name)}>Edit
                                    </button>
                                    <button className='buttonDel' onClick={() => deleteGameAndRefresh(item.id)}>Delete</button>
                                </span>

                                </div>
                        }
                    </div>
                ))}

            </div>
        </div>
    );
};
export default Games;
