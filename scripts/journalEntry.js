export const journalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            <div> ${entry.date} </div>
            <div> ${entry.entry} </div>
        </section>
    `
}