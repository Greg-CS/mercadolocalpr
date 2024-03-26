export default class ProfileNotFoundError extends Error {
    constructor() {
        super(`La publicacion no fue encontrada.`)
    }
}