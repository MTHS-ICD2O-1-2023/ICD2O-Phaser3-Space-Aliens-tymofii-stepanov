/* global Phaser */

// Created by: Tymofii
// Created on: Apr 2024
// THis is the Title Scene.

/**
 * This method is the construtor.
 */
class MenuScene extends Phaser.Scene {
  constructor() {
    super({ key: "menuScene"})
  }

  /**
   * Can be defined on your own Scenes.
   * This methodis called by the Scene Manager when the scene starts,
   *   before preload() and create()
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
   */
  init(data) {
    this.cameras.main.setBackgroundColor("ffffff")
  }

  preload() {
    console.log("Menu Scene")
  }

 /**
  * Can be defined on your own Scenes.
  * Use it to create your game objects.
  * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
  */
  create(data) {
    // pass
}

  /**
   * Should be overridden by your own Scenes.
   * This method is called once per game step while the scene is running.
   * @param {number} time - The current time.
   * @param {number} delta - The delta time is ms since the last frame.
   */
  update(time, delta) {
    //pass
  }
}

export default MenuScene