import { Context } from "telegraf";

export interface SessionDate {
  courseLike: boolean;
}

export interface IBotContext extends Context {
  session: SessionDate;
}
