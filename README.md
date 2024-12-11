# Interactive Adventure Game

This project is an interactive text-based adventure game where the player makes choices to navigate through a series of events. The game includes branching paths, different outcomes based on choices, and various conditions that unlock options depending on the player's actions.

## Features

- **Text-based Adventure**: The player progresses through the game by reading text descriptions and selecting from available options.
- **State Management**: The game tracks certain variables (such as possession of items) that influence the available choices.
- **Multiple Outcomes**: Based on the player's choices, the game has different paths and endings, allowing for replayability.

## How to Play

1. The game starts with the player waking up in a strange place and encountering a jar of blue goo.
2. As the player progresses, they will encounter merchants, monsters, and other challenges where their choices influence the outcome of the game.
3. Certain actions require the player to have specific items (like a sword or shield) or conditions (like having blue goo) to progress.
4. The game will restart if the player encounters an unfavorable outcome (e.g., dying or being imprisoned).

## Game Flow

- **Start**: The player wakes up in an unknown place with a jar of blue goo.
- **Merchant Encounter**: The player can choose to trade the goo for a sword or shield, or ignore the merchant.
- **Castle Exploration**: The player explores a nearby castle, with the option to sleep in the town or a stable for rest.
- **Monster Encounter**: The player faces a monster in the castle and can choose to run, fight, hide, or use the blue goo to defeat it.
- **Multiple Endings**: Depending on the player's choices, there are various endings, including a victory or restart options.

## Tech Stack

- **HTML**: Used for the basic structure and layout of the game interface.
- **CSS**: For styling the game interface, making it visually appealing and responsive.
- **JavaScript**: Handles the game logic, tracks the state of the game, and manages the flow of text nodes and options.
- **DOM Manipulation**: Used to dynamically update the game interface based on the player's actions.

## Files

- **index.html**: The main HTML file containing the structure of the game interface.
- **styles.css**: The CSS file responsible for styling the game, including layout and appearance.
- **script.js**: The JavaScript file that defines the game logic, including handling choices, updating the state, and displaying text nodes.