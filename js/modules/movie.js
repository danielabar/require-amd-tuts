// Here we're aliasing backbone as 'B'
define(['use!backbone'], function(B) {

  var Model = B.Model.extend({
    defaults: {
      release: 2012
    }
  });

  // $el is root element, in this case the 'li' tag
  var View = B.View.extend({
    tagName: 'li',
    template: _.template('<%= title %> (<strong><%= release %></strong>)'),
    initialize: function() { this.render(); },
    render: function() {
      var html = this.template( this.model.toJSON() );
      this.$el.append(html);
    }
  });

  // Whatever we return here will be available to the caller who required this module
  return {
    Model: Model,
    View: View
  };

});