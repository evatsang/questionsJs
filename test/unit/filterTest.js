'use strict';

var questionList=[{
 wholeMsg: newTodo,
 head: title,
 headLastChar: title.slice(-1),
 desc: 0,
 linkedDesc: Autolinker.link(newTodo, {newWindow: false, stripPrefix: false}),
 completed: false,
 timestamp: new Date().getTime(),
 tags: "...",
 echo: 0,
 dislike: 0,
 order: 0,
 latest: true
}];

describe('TodoCtrl', function() {
  beforeEach(module('todomvc'));

  describe('questionFilter Testing', function() {
    beforeEach(module(function($provide) {
      $provide.value('version', 'TEST_VER'); //TODO: what is this provide?
      console.log("provide.value: " + $provide.value);
    }));

    it('has a question filter', inject(function($filter) {
      expect($filter('questionFilter')).not.toBeNull();
    }));

    it('Filter order test', inject(function(questionFilterFilter) { // need to put Filter suffix
      var filteredList = questionFilterFilter(questionList, 100);
      for (var i in filteredList) {
        expect(""+filteredList[i].order).toEqual(i);
      }
    }));

    it('Filter max test', inject(function(questionFilterFilter) { // need to put Filter suffix
      var filteredList = questionFilterFilter(questionList, 1);
      expect(filteredList.length).toEqual(5);

      for (var i in filteredList) {
        expect(""+filteredList[i].order).toEqual(i);
      }
    }));
  });
});
