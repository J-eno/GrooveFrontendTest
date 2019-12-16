Welcome to the Groove FrontEnd test
-----------------------------------

You should have completed the instructions from the main `README.txt` file found with the `index.html` file and in the CSS directory.
If you have not, then go back and finish those instructions before continuing.


Javascript Instructions
----------------

Open the `main.js` file in your preferred editor to complete the following instructions.
Some Javascript is already provided in the `main.js` to be updated, however, you will also need to create your own for some of the instructions.
JQuery is included, however, if you are able to demonstrate these instructions using vanilla JavaScript would also be acceptable.

1. Scroll event
  + Create a scroll event listener to add the class `has-scrolled` after scrolling 50px from the top.
  + The same scroll event listener should remove the class `has-scrolled` when under 50px from the top. 
2. Ajax loaded content
  + Create a for loop of the response data
  + Inside the for loop, calls the `createBlock` function a number of times based on the value provided in the `data-ajax-loaded` attribute from the HTML readme instructions.
  + The `createBlock` function has some configuration provided to get started
  + Each created element should have its appropriate data set from the provided response object (note: use a console.log statement to see what is provided in the returned json data)
  + The created element should then be appended to the `data-ajax-loaded` element
  + The end result should have 3 blocks per row, similar to the pre-configured .content-blocks containers you've already worked on. 
3. Button click event
  + Create a click event listener for the button in the `nav-main` element to launch an alert box saying "Button has been clicked"
  + The button click should also call the `createBlock` function
  + You'll need to provide a JSON object with the appropriate data, similar to the response object of the Ajax request for this new block to show up correctly.

Save your file and check your work.
You should now be finished with the HTML, CSS, and JS instructions.

Zip up the `frontend-test` directory with your changes and email it back to Groove.
Your application email should have the email address to send it to.