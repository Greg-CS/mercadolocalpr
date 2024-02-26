import DomainEvent from "../domain/DomainEvent";
import Command from "./Command";
import CommandHandler from "./CommandHandler";
import DomainEventHandler from "./DomainEventHandler";

/**
 * Interface representing a mapping of command names to their corresponding handlers.
 */
interface CommandHandlerMap {
    [index: string]: CommandHandler;
}

/**
 * Interface representing a mapping of event names to arrays of event handlers.
 */
interface EventHandlerMap {
    [index: string]: DomainEventHandler[];
}

/**
 * MessageBus class acts as a central communication hub for executing commands and dispatching domain events.
 * It manages the registration of command and event handlers.
 */
export default class MessageBus {
    private commandHandlers: CommandHandlerMap;
    private eventHandlers: EventHandlerMap;

    /**
     * Creates an instance of the MessageBus class.
     */
    constructor() {
        this.commandHandlers = {};
        this.eventHandlers = {};
    }

    /**
     * Executes a command by locating its handler and invoking the handler's handle method.
     * @param {Command} cmd - The command to be executed.
     * @throws {Error} - Throws an error if no handler is found for the command.
     */
    public async execute(cmd: Command): Promise<void> {
        let handler = this.getCommandHandler(cmd.constructor.name);

        if (!handler) {
            throw new Error("No handler found");
        }

        await handler.handle(cmd);
    }

    /**
     * Dispatches a domain event by invoking the handle method on all registered event handlers for the event type.
     * @param {DomainEvent} evt - The domain event to be dispatched.
     */
    public async dispatch(evt: DomainEvent): Promise<void> {
        this.eventHandlers[evt.constructor.name]?.forEach((handler) => {
            handler.handle(evt);
        });
    }

    /**
     * Gets the command handler for a given command name.
     * @param {string} name - The name of the command.
     * @returns {CommandHandler | undefined} - The command handler, or undefined if not found.
     */
    private getCommandHandler(name: string): CommandHandler | undefined {
        return this.commandHandlers[name];
    }

    /**
     * Registers a command handler with the specified name.
     * @param {string} name - The name of the command.
     * @param {CommandHandler} handler - The handler for the command.
     */
    public registerCommand(name: string, handler: CommandHandler): void {
        this.commandHandlers[name] = handler;
    }

    /**
     * Registers an event handler with the specified name.
     * If no handlers are registered for the event, it initializes an empty array for the event type.
     * @param {string} name - The name of the event.
     * @param {DomainEventHandler} handler - The handler for the event.
     */
    public registerEvent(name: string, handler: DomainEventHandler): void {
        if (!this.eventHandlers[name]) {
            this.eventHandlers[name] = [];
        }

        this.eventHandlers[name].push(handler);
    }
}
