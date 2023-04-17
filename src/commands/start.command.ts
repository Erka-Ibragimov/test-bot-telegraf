import { IBotContext } from "../context/context.interface";
import { Command } from "./command.class";
import { Telegraf, Markup } from "telegraf";

export class StartCommand extends Command {
  constructor(bot: Telegraf<IBotContext>) {
    super(bot);
  }
  handler(): void {
    this.bot.start((ctx) => {
      ctx.reply(
        "Вам?",
        Markup.inlineKeyboard([
          Markup.button.callback("Yes", "course_like"),
          Markup.button.callback("No", "course_dislike"),
        ])
      );
    });
    this.bot.action("course_like", (ctx) => {
      ctx.editMessageText("Good");
    });
    this.bot.action("course_dislike", (ctx) => {
      ctx.editMessageText("Bad");
    });
  }
}
