# Typing Game Application

This is a typing game application where users can test their typing skills by typing random paragraphs within a specified time limit.

## Usage

1. Open the index.html file in a web browser.
2. Select a time limit by clicking on the desired time option.
3. A random paragraph will be displayed for the user to type.
4. Start typing in the input field.
5. The application will track the number of mistakes, accuracy, and remaining time.
6. Complete typing the paragraph within the given time limit.
7. The application will highlight correct and incorrect characters as you type.
8. After completing the typing session, the application will display statistics such as the number of mistakes and accuracy.
9. The application will also show a list of mistaken words.
10. Click the restart button to start a new typing session.
11. Click the keyboard button to enable keyboard input and start typing.
12. The timer will count down the remaining time.
13. The application will switch to the test page after the time runs out.

## Code Explanation

The code consists of the following files and functions:

1. `index.html`: The HTML structure of the application.
2. `styles.css`: The CSS styles for the application.
3. `app.js`: The JavaScript code that controls the functionality of the application.
4. `buttons.js`: All the dom objects are in this file.
5. `content.js`: It will have all the menu navigation functionality like changing paragraph to words to time bound test.
6. `footerLinks.js`: It have all the footer links.
7. `paragraph.js`: It have all the test paragraphs.

### JavaScript Code

#### Variables

- `LeftTime` and `timeLeft`: Variables for the timer.
- `sTime`: Stores the selected time.
- `charInd`: Index for tracking the current character being typed.
- `mistakes`: Count for tracking the number of mistakes made by the user.
- `isTyping`: Flag for tracking the typing state.
- `newText`: Represents the HTML element that displays the new text for typing.
- `inpField`: Represents the input field where the user types the text.
- `nextText`: Represents the HTML element for the "Next Text" button.
- `text`: Represents the HTML element that displays the content text to be typed.
- `hText`: Represents the hidden text element.
- `restart`: Represents the HTML element for the "Restart" button.
- `timer`: Represents the HTML element that displays the time interval.
- `showTimer`: Represents the HTML element that displays the remaining time.
- `mistake`: Represents the HTML element that displays the number of mistakes.
- `wrongWords`: Represents the HTML element that displays the list of mistaken words.
- `t15`, `t25`, `t40`, `t60`: Represents the HTML elements for different time options.
- `timeEle`: Represents the HTML collection of time elements.
- `correct`: Represents the HTML element that displays the number of correct words.
- `accuracy`: Represents the HTML element that displays the accuracy percentage.
- `wpm`: Represents the HTML element that displays the typing speed.

- `mistakenWords`: An array to store mistaken words.
- `m`: Index variable for tracking mistakenWords array.
- `totalCorrectWords`: Count of total correct words typed by the user.
- `totalWords`: Count of total words typed by the user.
- `typedChar`: The currently typed character.
- `flag`: A flag variable to track if the time limit has been clicked.



#### `window.onload` Event

- Executes the `randomParagraph()` function when the page finishes loading.

#### `getClickedTime()` Function

- Clears the previous timer interval (`LeftTime`).
- Sets the selected time (`timeClicked`) when a time option is clicked.
- Parses the clicked value as an integer and assigns it to `sTime`.
- Assigns the selected time to `timeLeft`.
- Calls the `randomParagraph()` function to load a random paragraph after time selection.

#### `randomParagraph()` Function

- Clears the previous timer interval (`LeftTime`).
- Hides the timer element.
- Resets variables such as `charInd`, `mistakes`, and the input field (`inpField`).
- Clears the text element.
- Generates a random index to select a paragraph from the available options.
- Wraps each character in the selected paragraph with a `<span>` tag.
- Appends the span tags to the text element.
- Adds event listeners to focus on the input field when interacting with the document or the text element.

#### `initTyping()` Function

- Removes the 'hide' class from the timer element to display it.
- Retrieves all the characters in the text to be typed.
- Gets the currently typed character.
- Starts the timer if it's not already running.
- Compares the typed character with the expected character.
- Updates the styling of the character based on the correctness.
- Tracks the number of mistakes, total words, and total correct words.
- Highlights the currently active character.
- Calculates the total wrong words and user accuracy.
- Updates the displayed statistics such as mistakes, remaining time, correct words, and accuracy.
- Appends the mistaken words to the DOM.




#### Variables


#### `endTypingSession()` Function

- Clears the interval for calculating WPM.
- Calls the `calculateWpm()` function.

#### `showSpeed(speed)` Function

- Updates the displayed typing speed with the given `speed`.

#### Restarting the Typing Session

- Adds an event listener to the restart button that resets the character index, time limit, and calls the `randomParagraph()` function to generate a new paragraph.

#### `initTimer()` Function

- Updates the timer display based on the remaining time.
- Clears the interval when the time runs out.
- Checks if the time has reached zero and performs necessary actions, such as disabling keyboard input and showing the test page.
- Resets the `flag` to enable selecting a new time limit.
- Updates the DOM elements based on the remaining time, statistics, and mistaken words.

#### Disabling and Enabling Keyboard Input

- Adds an event listener to the keyboard button that enables keyboard input and hides the test page.
- Calls the `enableKeyboardInput()` function to enable typing.

#### Helper Functions

- `preventDefault(event)`: Prevents the default behavior of keydown events.

## Contributing

Contributions to the Typing Game Application are welcome! If you find any issues or would like to suggest improvements, please submit a pull request or open an issue.
