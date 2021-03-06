
import { useJournalEntries, getEntries } from "./journalDataProvider.js"
import { journalEntryComponent } from "./journalEntryHTMLConverter.js"
import { useMoods } from "./moodDataProvider.js"


const contentTarget = document.querySelector(".entry__area")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("showEntriesClicked", customEvent => {
    entryList()
})


    const render = (entryArray) => {
        const moods = useMoods()
        contentTarget.innerHTML = entryArray.reverse().map(
            (currentEntry) => {
                const foundMood = moods.find(
                    (moodObject) => {
                        return moodObject.id === currentEntry.moodId
                    }
                )
                return journalEntryComponent(currentEntry, foundMood)
            }
        ).join("")
    }    

    export const entryList = () => {
        getEntries()    
        .then(useJournalEntries)
        .then(render)
    }
    
    
    eventHub.addEventListener("showEntriesClicked", entryList)
    eventHub.addEventListener("entryStateChanged", () => {
        const newEntries = useJournalEntries()
        render(newEntries)
    })