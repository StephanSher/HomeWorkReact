const apiUrl = 'http://localhost:3000';

export async function getGames() {
    const resp = await fetch(`${apiUrl}/game`);
    return await resp.json();
}

export async function deleteGame(gameId) {
    const resp = await fetch(`${apiUrl}/game/${gameId}`, {method: 'DELETE'});
    return await resp.json();
}

export async function saveGame(gameId, name) {
    const resp = await fetch(`${apiUrl}/game/${gameId}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name})
    });
    return await resp.json();
}

export async function addGame(name) {
    if (!name) {
        throw new Error('Name can not be empty');
    }

    const resp = await fetch(`${apiUrl}/game`, {
        method: 'POST',
        body: JSON.stringify({name}),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
    return await resp.json();
}