/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Crystal extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("crystal-a", "./Crystal/costumes/crystal-a.svg", {
        x: 15,
        y: 15,
      }),
      new Costume("crystal-b", "./Crystal/costumes/crystal-b.svg", {
        x: 12,
        y: 24,
      }),
    ];

    this.sounds = [
      new Sound("Magic Spell", "./Crystal/sounds/Magic Spell.wav"),
      new Sound("collect", "./Crystal/sounds/collect.wav"),
    ];

    this.triggers = [];
  }
}
