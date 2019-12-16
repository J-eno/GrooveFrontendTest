"use strict";

jQuery(document).ready(function($) {
  console.log('ready!');

  // Create scroll event listener
  document.addEventListener("scroll",scrollFunction)

  function scrollFunction()
  {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById('nav-main').className = "has-scrolled"
    } else {
      document.className = "";
    }
  }

  // Dynamically created blocks
  let blocksContainer = $('[data-ajax-loaded]');


  function createBlock(data) {
    let newBlock = $('<figure>', { class: 'content-blocks--item' });
    let newBlockBody = $('<figcaption>', { class: 'content-blocks--body' });
    let img = $('<img>', { src: data.thumbnailUrl });
    let header = $('<h3>', { text: data.title });
    let copy = $('<p>', { html: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum ad dolores recusandae amet eos inventore debitis repellat temporibus maiores natus.' })
    let button = $('<button>', {html: 'Button'});
    newBlockBody.append(header);
    newBlockBody.append(copy);
    newBlockBody.append(button);
    newBlock.append(img);
    newBlock.append(newBlockBody);
    blocksContainer.append(newBlock)
  }

  // Ajax request to JSONplaceholder for photos
  $.ajax('https://jsonplaceholder.typicode.com/photos')
    .done(function(response) {
      for(var i = 0; i < blocksContainer.data("ajaxLoaded"); i++)
      {
        console.log(response[i])
        createBlock(response[i])
      }
      });

  // Create Button click event listener
  document.getElementById('alert-button').addEventListener('click', buttonClick)
  function buttonClick() 
  {
    alert("Nav button has been clicked!");
    var newResponse = { thumbnailUrl: 'https://via.placeholder.com/150/56a8c2', title: 'New New'};
    createBlock(newResponse);
  }

});