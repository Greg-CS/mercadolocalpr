import Command from "../shared/application/Command";
import CommandHandler from "../shared/application/CommandHandler";
import DomainEventHandler from "./application/DomainEventHandler";
import MessageBus from "./application/MessageBus";
import AbstractUnitOfWork from "./application/UnitOfWork";
import DomainEvent from "./domain/DomainEvent";

/**
 * Module class represents a modularized component in the application.
 * It provides a message bus for executing commands and dispatching domain events.
 */
export default class Module {
    private messageBus: MessageBus;

    /**
     * Creates an instance of the Module class.
     * @param {AbstractUnitOfWork} unitOfWork - The abstract unit of work for managing transactions.
     */
    constructor(protected unitOfWork: AbstractUnitOfWork) {
        this.messageBus = new MessageBus();
    }

    /**
     * Executes a command and processes any resulting domain events.
     * @param {Command} cmd - The command to be executed.
     */
    public async execute(cmd: Command): Promise<void> {
        await this.messageBus.execute(cmd);

        let events = this.unitOfWork.getEventsToProcess();

        while (events.length > 0) {
            let evt = events.at(0);
            events = events.slice(1);

            if (evt) await this.messageBus.dispatch(evt);
            events = events.concat(this.unitOfWork.getEventsToProcess());
        }
    }

    /**
     * Dispatches a domain event and processes any resulting domain events.
     * @param {DomainEvent} evt - The domain event to be dispatched.
     */
    public async dispatch(evt: DomainEvent): Promise<void> {
        await this.messageBus.dispatch(evt);

        let events = this.unitOfWork.getEventsToProcess();

        while (events.length > 0) {
            let newEvent = events.at(0);

            if (newEvent) await this.messageBus.dispatch(newEvent);
            events = events.concat(this.unitOfWork.getEventsToProcess());
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
}