import $ from 'jquery';
import Backbone from 'backbone';
import save from './blogPostSave';
import form from './form';
// import read from './blogread';

const Router = Backbone.Router.extend({
    routes: {
        blogPost: 'save',
        formPerson: 'form',
        readPost: 'read'
    },
    save: function() {
      save();
    },
    form: function(){
      form();
    }
});

const router = new Router();


export default router;
