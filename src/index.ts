import {Scenes, Telegraf} from "telegraf";
import {IBotContext} from "./context/context.interface";
import {addNewChat, backMenu, start} from "./controllers/commands";
import {addNewChatScene} from "./controllers/scenes/addNewChat.scene";
import dotenv from 'dotenv'
dotenv.config()

const token = process.env.TOKEN_BOT;
if (!token) {
  throw new Error("TOKEN_BOT is not defined in the environment variables");
}

const bot = new Telegraf<IBotContext>(token)
const stage = new Scenes.Stage<IBotContext>([addNewChatScene])

function setupBot() {
  bot.use(stage.middleware())
  bot.telegram.setMyCommands([
    {command: 'start', description: 'Start the bot'},
    {command: 'add_new_chat', description: 'Add a new chat for tracking'},
    {command: 'back_menu', description: 'Back to main menu'},
  ])
  bot.start(start)
  bot.command('back_menu', backMenu)
  bot.command('add_new_chat', addNewChat)

  return bot
}

setupBot().launch()
