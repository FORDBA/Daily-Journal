import { deleteEntry } from "./journalDataProvider.js";

const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id.startsWith("deleteEntry--")) {
        const [ prompt, entryIdString ] = clickEvent.target.id.split("--") 

        deleteEntry(entryIdString)
    }
})

export const journalEntryComponent = (entry, mood) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            <div class="entry--date">Date: ${ entry.date } </div>
            <div class="entry--concept">Concept: ${ entry.concept }</div>
            <div class="entry--content">${ entry.entry }</div>
            <div class="entry--mood">Mood: ${ mood.label }</div>
            <button id="deleteEntry--${entry.id}">Delete</button>
        </section>
    `
}