import {defineMigration, at, setIfMissing, unset} from 'sanity/migrate'

const from = 'WorkedOnProjects'
const to = 'projectsWorkedOn'

export default defineMigration({
  title: 'change field name from WorkedOnProjects to projectsWorkedOn',
  documentTypes: ["experience"],

  migrate: {
    document(doc, context) {
      return [
        at(to, setIfMissing(doc[from])),
        at(from, unset())
      ]
    }
  }
})
