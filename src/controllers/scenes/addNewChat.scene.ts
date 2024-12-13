import {Scenes} from "telegraf";
import {IBotContext} from "../../context/context.interface";

export const addNewChatScene = new Scenes.WizardScene<IBotContext>(
  'addNewChat',
  async ctx => {
    await ctx.reply('first step')
  },
)

addNewChatScene.command('/leave', ctx => {
  ctx.scene.leave()
})

addNewChatScene.enter(async (ctx, next) => {
  await ctx.reply('YOU ENTER TO ADD NEW SCENE')
  await next()
})
