import DomainEventHandler from "../../../shared/application/DomainEventHandler";
import { AddModeratedEvent } from "../../domain/Events";
import AddReadModelAdmins from "../../domain/AddReadModelAdmins";


export default class AddModeratedHandler extends DomainEventHandler {
    /**
     * Creates an instance of the PostModeratedHandler class.
     * @param {AddReadModelAdmins} addReadModelAdmins - The store for the post read model.
     */
    constructor(private addReadModelAdmins: AddReadModelAdmins) {
        super();
    }

    /**
     * Handles the PostCreatedEvent by creating a new post read model and adding it to the store.
     * @param {PostCreatedEvent} evt - The PostCreatedEvent to be handled.
     */
    public async handle(evt: AddModeratedEvent): Promise<void> {
        let model = await this.addReadModelAdmins.get(evt.addId);

        if(model) {
            model.isModerated = true;
            model.title = evt.moderatedTitle;
            model.description = evt.moderatedDescription;
    
            await this.addReadModelAdmins.update(model);        
        }
        
    }
}