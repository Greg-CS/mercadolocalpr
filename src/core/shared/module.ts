import Command from "../shared/application/Command";
import CommandHandler from "../shared/application/CommandHandler";
import DomainEventHandler from "./application/DomainEventHandler";
import MessageBus from "./infrastructure/MessageBus";
import DomainEvent from "./domain/DomainEvent";
import AbstractMessageBus from "./application/AbstractMessageBus";

/**
 * Module class represents a modularized component in the application.
 * It provides a message bus for executing commands and dispatching domain events.
 */
export default abstract class Module {
    /**
     * The id of the moderated post.
     * @type {AbstractMessageBus}
     * @readonly
     */
    protected messageBus: AbstractMessageBus;

    /**
     * Creates an instance of the Module class.
     */
    constructor() {
        this.messageBus = new MessageBus();
    }

    /**
     * Executes a command and processes any resulting domain events.
     * @param {Command} cmd - The command to be executed.
     * @returns {Promise<void>} - A promise indicating the completion of the execution.
     */
    public async execute(cmd: Command): Promise<void> {
        await this.messageBus.execute(cmd);

        let events = this.getNewEvents();

        while (events.length > 0) {
            let evt = events.at(0);
            events = events.slice(1);

            if (evt) await this.messageBus.dispatch(evt);
            events = events.concat(this.getNewEvents());
        }
    }

    /**
     * Dispatches a domain event and processes any resulting domain events.
     * @param {DomainEvent} evt - The domain event to be dispatched.
     * @returns {Promise<void>} - A promise indicating the completion of the dispatch.
     */
    public async dispatch(evt: DomainEvent): Promise<void> {
        await this.messageBus.dispatch(evt);

        let events = this.getNewEvents();

        while (events.length > 0) {
            let newEvent = events.at(0);

            if (newEvent) await this.messageBus.dispatch(newEvent);
            events = events.concat(this.getNewEvents());
        }
    }

    /**
     * Registers a command with its corresponding handler in the message bus.
     * @param {string} name - The name of the command.
     * @param {CommandHandler} handler - The handler for the command.
     */
    protected registerCommand(name: string, handler: CommandHandler): void {
        this.messageBus.registerCommand(name, handler);
    }

    /**
     * Registers an event with its corresponding handler in the message bus.
     * @param {string} name - The name of the event.
     * @param {DomainEventHandler} handler - The handler for the event.
     */
    protected registerEvent(name: string, handler: DomainEventHandler): void {
        this.messageBus.registerEvent(name, handler);
    }

    /**
     * Retrieves new domain events that need to be processed.
     * Must be implemented by subclasses.
     * @returns {DomainEvent[]} - An array of new domain events.
     */
    protected abstract getNewEvents(): DomainEvent[];
}
