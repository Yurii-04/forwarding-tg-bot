import {mainMenu} from "../utils/buttons";
import {IBotContext} from "../context/context.interface";

export async function start(ctx: IBotContext) {
  await ctx.reply(
    `Hi, ${
      ctx.from && 'first_name' in ctx.from? ctx.from.first_name : ''
    } ❤️\nTo use the bot you need to register 🤖\nYou can register by writing the /register command or by clicking the button below
   `,
    {
      parse_mode: 'HTML',
      ...mainMenu,
    },
  );
}

export async function backMenu(ctx: IBotContext) {
  await ctx.reply(`✅ Main menu`, {
    ...mainMenu
  })
}

export const addNewChat = (ctx: IBotContext) => ctx.scene.enter('addNewChat');
