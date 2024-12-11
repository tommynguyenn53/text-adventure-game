// Get the text and buttons elements for displaying game text and options
const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

// State object that will hold the player's choices and progress in the game
let state = {}

// Start the game by resetting the state and showing the first text node
function startGame() {
  state = {}
  showTextNode(1)
}

// Show a specific text node based on its ID
function showTextNode(textNodeIndex) {
  // Find the text node by its ID
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)

  // Display the text of the current node
  textElement.innerText = textNode.text

  // Remove any previous option buttons
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  // Add the available options as buttons, if applicable
  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

// Check if an option is available based on the current state
function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

// Handle the player's selection of an option and proceed to the next text node
function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame() // Restart the game if the next text node ID is <= 0
  }
  // Update the game state based on the player's selection
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId) // Show the next text node
}

// Array of text nodes representing different story points and choices
const textNodes = [
  {
    id: 1,
    text: 'You wake up in a strange place and you see a jar of blue goo near you.',
    options: [
      {
        text: 'Take the goo',
        setState: { blueGoo: true },
        nextText: 2
      },
      {
        text: 'Leave the goo',
        nextText: 2
      }
    ]
  },
  {
    id: 2,
    text: 'You venture forth in search of answers to where you are when you come across a merchant.',
    options: [
      {
        text: 'Trade the goo for a sword',
        requiredState: (currentState) => currentState.blueGoo,
        setState: { blueGoo: false, sword: true },
        nextText: 3
      },
      {
        text: 'Trade the goo for a shield',
        requiredState: (currentState) => currentState.blueGoo,
        setState: { blueGoo: false, shield: true },
        nextText: 3
      },
      {
        text: 'Ignore the merchant',
        nextText: 3
      }
    ]
  },
  {
    id: 3,
    text: 'After leaving the merchant you start to feel tired and stumble upon a small town next to a dangerous looking castle.',
    options: [
      {
        text: 'Explore the castle',
        nextText: 4
      },
      {
        text: 'Find a room to sleep at in the town',
        nextText: 5
      },
      {
        text: 'Find some hay in a stable to sleep in',
        nextText: 6
      },
      {
        text: 'Ask the merchant for directions',
        nextText: 7
      }
    ]
  },
  {
    id: 4,
    text: 'You are so tired that you fall asleep while exploring the castle and are killed by some terrible monster in your sleep.',
    options: [
      {
        text: 'Restart', // Restart the game
        nextText: -1
      }
    ]
  },
  {
    id: 5,
    text: 'Without any money to buy a room you break into the nearest inn and fall asleep. After a few hours of sleep the owner of the inn finds you and has the town guard lock you in a cell.',
    options: [
      {
        text: 'Restart', // Restart the game
        nextText: -1
      }
    ]
  },
  {
    id: 6,
    text: 'You wake up well rested and full of energy ready to explore the nearby castle.',
    options: [
      {
        text: 'Explore the castle', // Continue to explore the castle
        nextText: 7
      }
    ]
  },
  {
    id: 7,
    text: 'While exploring the castle you come across a horrible monster in your path.',
    options: [
      {
        text: 'Try to run',
        nextText: 8
      },
      {
        text: 'Attack it with your sword',
        requiredState: (currentState) => currentState.sword,
        nextText: 9
      },
      {
        text: 'Hide behind your shield',
        requiredState: (currentState) => currentState.shield,
        nextText: 10
      },
      {
        text: 'Throw the blue goo at it',
        requiredState: (currentState) => currentState.blueGoo,
        nextText: 11
      },
      {
        text: 'Use magic to fight it', // New option to use magic
        nextText: 12
      }
    ]
  },
  {
    id: 8,
    text: 'Your attempts to run are in vain and the monster easily catches you.',
    options: [
      {
        text: 'Restart', // Restart the game
        nextText: -1
      }
    ]
  },
  {
    id: 9,
    text: 'You foolishly thought this monster could be slain with a single sword.',
    options: [
      {
        text: 'Restart', // Restart the game
        nextText: -1
      }
    ]
  },
  {
    id: 10,
    text: 'The monster laughed as you hid behind your shield and ate you.',
    options: [
      {
        text: 'Restart', // Restart the game
        nextText: -1
      }
    ]
  },
  {
    id: 11,
    text: 'You threw your jar of goo at the monster and it exploded. After the dust settled you saw the monster was destroyed. Seeing your victory you decide to claim this castle as your own and live out the rest of your days there.',
    options: [
      {
        text: 'Congratulations. Play Again.', // End of game
        nextText: -1
      }
    ]
  },
  {
    id: 12,
    text: 'You cast a powerful spell and the monster is engulfed in flames. With the beast defeated, you explore deeper into the castle and find a hidden treasure chest.',
    options: [
      {
        text: 'Open the chest',
        nextText: 13
      },
      {
        text: 'Leave the chest alone and keep exploring',
        nextText: 14
      }
    ]
  },
  {
    id: 13,
    text: 'The chest is full of gold and magical items. You take some of it and become incredibly powerful, ruling the land as the new king.',
    options: [
      {
        text: 'Congratulations. Play Again.', // End of game
        nextText: -1
      }
    ]
  },
  {
    id: 14,
    text: 'You leave the chest and keep exploring, finding more dangerous monsters and thrilling adventures ahead.',
    options: [
      {
        text: 'Continue exploring', // Continue the adventure
        nextText: 15
      }
    ]
  },
  {
    id: 15,
    text: 'You encounter a dragon guarding a passage to another kingdom. Do you dare face it?',
    options: [
      {
        text: 'Fight the dragon',
        nextText: 16
      },
      {
        text: 'Attempt to sneak past the dragon',
        nextText: 17
      }
    ]
  },
  {
    id: 16,
    text: 'You slay the dragon in an epic battle, gaining a reputation as a hero. You are celebrated by the people.',
    options: [
      {
        text: 'Celebrate and live happily ever after', // End of game
        nextText: -1
      }
    ]
  },
  {
    id: 17,
    text: 'You attempt to sneak past the dragon, but it notices you and attacks. You are defeated.',
    options: [
      {
        text: 'Restart', // Restart the game
        nextText: -1
      }
    ]
  }
]

// Start the game by calling the startGame function
startGame()
