// References to HTML elements
const storyTextElement = document.getElementById('story-text');
const optionsContainerElement = document.getElementById('options-container');

// The game structure, with "pages" and their options
const game = {
    start: {
        text: 'You are at the beginning of a trail. The forest stretches out before you. Which path do you choose?',
        options: [
            { text: 'Go down the main trail.', next: 'main_trail' },
            { text: 'Explore a secondary path.', next: 'secondary_path' }
        ]
    },
    main_trail: {
        text: 'You follow the main trail and find a river. It looks calm. Do you decide to cross or find another way?',
        options: [
            { text: 'Cross the river.', next: 'cross_river' },
            { text: 'Look for another way.', next: 'look_for_way' }
        ]
    },
    cross_river: {
        text: 'You cross the river and find a clearing with a treasure. Congratulations, you won the game!',
        options: [
            { text: 'Restart', next: 'start' }
        ]
    },
    look_for_way: {
        text: 'You try to go around the river, but you get lost in the forest. Game over.',
        options: [
            { text: 'Restart', next: 'start' }
        ]
    },
    secondary_path: {
        text: 'You enter the secondary path and find a dark cave. Do you decide to enter?',
        options: [
            { text: 'Enter the cave.', next: 'enter_cave' },
            { text: 'Go back to the main trail.', next: 'main_trail' }
        ]
    },
    enter_cave: {
        text: 'As you enter the cave, you slip and fall into a deep hole. Game over.',
        options: [
            { text: 'Restart', next: 'start' }
        ]
    }
};

// Function to start or update the game
function showPage(page) {
    const pageData = game[page];
    if (!pageData) {
        // This is a safeguard in case the page doesn't exist
        console.error('Game page not found:', page);
        return;
    }

    // Update the story text
    storyTextElement.innerText = pageData.text;

    // Clear previous buttons
    while (optionsContainerElement.firstChild) {
        optionsContainerElement.removeChild(optionsContainerElement.firstChild);
    }

    // Create the new buttons with options
    pageData.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option.text;
        button.addEventListener('click', () => {
            showPage(option.next);
        });
        optionsContainerElement.appendChild(button);
    });
}

// Start the game
showPage('start');