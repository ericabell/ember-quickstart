import Ember from 'ember';

export default Ember.Route.extend({
  // in the model method, we return any data we want to make
  // available in the template. If there are async calls, the
  // model() supports any libraries using Promises.
  model() {
    return['Marie Curie', 'Mae Jemison', 'Albert Hofmann' ]
  }
});
