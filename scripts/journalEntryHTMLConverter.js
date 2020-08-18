export const journalEntryComponent = (entry, mood) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            <div class="entry--date">Date: ${ entry.date } </div>
            <div class="entry--concept">Concept: ${ entry.concept }</div>
            <div class="entry--content">${ entry.entry }</div>
            <div class="entry--mood">Mood: ${ mood.label }</div>
        </section>
    `
}