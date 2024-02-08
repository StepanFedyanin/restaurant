import { app as settings } from 'src/settings'
import { REST, RESTError } from './rest'

export default class extends REST {
    static get settings () {
        return settings
    }
}
