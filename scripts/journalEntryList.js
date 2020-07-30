
import { useJournalEntries, getEntries } from "./journalDataProvider.js"
import { journalEntryComponent } from "./journalEntryHTMLConverter.js"


const contentTarget = document.querySelector(".entry__area")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("showEntriesClicked", customEvent => {
    entryList()
})

export const entryList = () => {
    getEntries()
    .then(() => {
        const allEntries = useJournalEntries()
        render(allEntries)    
    })
}
    const render = (entryArray) => {
        const allEntriesConvertedtoStrings = entryArray.map(
            (currentEntry) => {
                return journalEntryComponent(currentEntry)
            }
        ).join("")
        contentTarget.innerHTML = allEntriesConvertedtoStrings
    }    
