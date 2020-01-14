//links isYes.js file
import isYes from './isYes.js';
//sets value quizButton from the element from index.html
const quizButton = document.getElementById('quizButton');
//sets value total from the element from index.html
const total = document.getElementById('total');
const results = document.getElementById('results');

//runs event listener function when quizButton is clicked
quizButton.addEventListener('click', () => {
    //prints out that this button works in the console
    console.log('this button works yo');
    //asks user what their name is and puts it in the name variable/container
    const name = prompt('What is your name?');
    //gives a confirmation box where the user can continue with the quiz or cancel and go back to the website... also puts the name they just entered in to the pop up box
    const confirmation = confirm(`${name}, are you sure you want to do this?`);
    if (confirmation === false) return;
    //asks the user the first question and stores the result in ans1
    const ans1 = prompt('Are hamburgers a favorite food of mine?');
    //asks the user the first question and stores the result in ans2
    const ans2 = prompt('Do I like Science?');
    //asks the user the first question and stores the result in ans3
    const ans3 = prompt('Was I born in Oregon?');
    //declares a variable of count and sets the value to 0 
    let count = 0;
    //if the answer to the first question is false (by using ! means not) adds 1 to the count variable
    if (!isYes(ans1)) count += 1;
    //if the answer to the first question is true adds 1 to the count variable
    if (isYes(ans2)) count += 1;
    //if the answer to the first question is false (by using ! means not) adds 1 to the count variable
    if (!isYes(ans3)) count += 1;
    //prints out the total number right with after their name
    total.textContent = `${name}, You got ${count} correct!`;
    results.classList.remove('hidden');
});
