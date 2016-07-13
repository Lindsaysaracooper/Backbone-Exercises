import $ from 'jquery';
import Backbone from 'backbone';
import save from './blogPostSave';
import router from './router';
import Person from '../models/person';

// b) Create a form for a person. It should have a first name, last name, address, and phone number. It should save the person to tiny-za-server.

function form() {
let $form = $(`<form class="form" action="index.html" method="post">
    <input class="firstName" type="text" name="name" value="First Name">
    <input class="lastName" type="text" name="name" value="Last Name">
    <input class="address" type="text" name="name" value="Address">
    <input class="number" type="text" name="name" value="number">
    <input type="button" name="name" value="logIn"></form>`);


    $('.container').empty().append($form);


$form.find('input[type="button"]').on('click', function(evt) {
    evt.preventDefault();
    let form = new Person({
      firstName: $('.firstName').val(),
      lastName: $('.lastName').val(),
      address: $('.address').val(),
      number: $('.number').val()
    });
    form.save(null,{
      success:
      function(response){
        // person needs to be a landing page for the click event
        router.navigate('person', {trigger:true});
      }
    });
  });
  }


export default form;
