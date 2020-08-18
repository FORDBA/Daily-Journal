let entries = []


const eventHub = document.querySelector(".container")
const dispatchStateChangedEvent = () => {
    const entryStateChangedEvent = new CustomEvent("entryStateChanged")
    eventHub.dispatchEvent(entryStateChangedEvent)
}

export const useJournalEntries = () => {
    return entries.slice()
}

export const getEntries = () => {
    return fetch('http://localhost:3000/entries')
        .then(response => response.json())
        .then(parsedEntries => {
            entries = parsedEntries
        })
}

export const saveEntry = (entry) => {
    const jsonEntry = JSON.stringify(entry)
    
    return fetch ('http://localhost:3000/entries', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: jsonEntry
    })
    .then(getEntries)
    .then(dispatchStateChangedEvent)
}

export const deleteEntry = (entryID) => {
    return fetch(`http://localhost:3000/entries/${ entryID }`, {
        method: "DELETE"
    })
    .then(getEntries)
    .then(dispatchStateChangedEvent)
    .catch(
        (error) => {
            console.log(error)
        }
    )
}