/* eslint-disable require-yield, eqeqeq */

import { Sprite, Trigger, Watcher, Costume, Color, Sound } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Dove extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("dove-a", "./Dove/costumes/dove-a.svg", {
        x: 59.555845000000005,
        y: 52.34710172799984
      }),
      new Costume("dove-b", "./Dove/costumes/dove-b.svg", { x: 88, y: 57 })
    ];

    this.sounds = [new Sound("bird", "./Dove/sounds/bird.wav")];

    // Shrink the dove to 50 % of its original size so it appears smaller on stage.
    // (Scratch/Leopard sprites use a 100‑based percentage for size.)
    this.size = 50;

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.followMouse) // Keeps dove glued to the mouse pointer
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (this.touching(this.sprites["Sprite1"].andClones())) {
        yield* this.sayAndWait("you lose", 2);
      }
      if (this.touching(this.sprites["Sprite2"].andClones())) {
        yield* this.sayAndWait(" you lose", 2);
      }
      if (this.touching(this.sprites["Crystal2"].andClones())) {
        yield* this.sayAndWait("you won ", 2);
      }
      if (this.touching(this.sprites["Crystal"].andClones())) {
        yield* this.sayAndWait("you won", 2);
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.touching(this.sprites["Crystal"].andClones())) {
        this.stage.vars.points++;
      }
      if (this.touching(this.sprites["Crystal2"].andClones())) {
        this.stage.vars.points++;
      }
      yield;
    }
  }

  *followMouse() {
    while (true) {
      this.goto(this.mouse.x, this.mouse.y);
      yield; // let the engine breathe before the next frame
    }
  }
}
