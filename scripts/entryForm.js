import { saveEntry } from "./journalDataProvider.js";
import {useMoods, getMoods} from "./moodDataProvider.js"


const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".formContainer")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "recordEntry") {

        const entryContent = document.querySelector("#entry--content")
        const entryDate = document.querySelector("#entry--date")
        const entryConcept = document.querySelector("#entry--concept")
        const entryMood = document.querySelector("#entry--mood")


        const newEntry = {
            date: entryDate.value,
            concept: entryConcept.value,
            entry: entryContent.value,
            moodId: parseInt(entryMood.value)

        }
        saveEntry(newEntry)
    }
    
})

const render = (moods) => {
    contentTarget.innerHTML = `
    <fieldset class="fieldset">
    <label for="journalDate">Date of Entry</label>

    <input type="date" name="journalDate" id="entry--date">
</fieldset>
<fieldset class="fieldset">

    <label for="concepts">Concepts Covered</label>
    <input type="text" placeholder="Concepts Covered" id="entry--concept">
</fieldset>
<fieldset class="fieldset">

    <label for="journalEntry">Journal Entry</label>
    <textarea placeholder="Your Entry Here" id="entry--content" cols="30" rows="10"></textarea>
</fieldset>
<fieldset class="fieldset">

    <label for="mood">Mood for the Day</label>
    <select name="mood" id="entry--mood">
        <option value="0">Select Mood</option>
        ${
            moods.map(
                (moodObject) => {
                    return `<option value="${moodObject.id}">
                        ${moodObject.label}
                        </option>`
                }
            )

        }
    </select>
</fieldset>
<button id="recordEntry">Record Entry</button>

`
}

export const entryForm = () => {
    getMoods()
    .then(() => {
        const moods = useMoods()
        render(moods)
    })
}