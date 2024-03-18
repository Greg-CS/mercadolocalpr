import Command from "../../../shared/application/Command";
import CommandHandler from "../../../shared/application/CommandHandler";
import Result from "../../../shared/application/Result";
export default class CreatePostHandler extends CommandHandler {
    public handle(cmd: Command): Promise<Result> {
        throw new Error("Method not implemented.");
    }
}