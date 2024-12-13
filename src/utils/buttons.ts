import {Markup} from "telegraf";
import {CMD_TEXT} from "../config/consts";

export const mainMenu =
  Markup.inlineKeyboard([
    Markup.button.callback('Register', 'register_callback'),
    Markup.button.callback('Add new chat', 'add_chat_callback'),
    Markup.button.callback('Get chat list', 'get_chat_list_callback'),
  ])
