import {Context, Scenes} from "telegraf";

export interface IBotContext extends Context {
  myContextProp: string
  scene: Scenes.SceneContextScene<IBotContext, Scenes.WizardSessionData>
  wizard: Scenes.WizardContextWizard<IBotContext>
}
