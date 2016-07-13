import $ from 'jquery';
import Backbone from 'backbone';


const Person = Backbone.Model.extend({
    urlRoot: 'http://tiny-za-server.herokuapp.com/collections/CoopDay-23-form',
    defaults: {
        firstName: '',
        lastName: '',
        address:'',
        number:''
    }
});






export default Person;
