/* global $, Raphael */
$(function() {
  var editor  = $('#editor')
    , buttons = $('.buttons')
    , manage  = ['clear', 'undo']
    , colors  = ['red', 'green', 'blue']
    , inspired = false
    , inspiration // for sketchpad viewer
    , drawings; // for all drawings


  var sketchpad = Raphael.sketchpad('editor',
    { width: editor.width()
    , height: 600
    , editing: true
  });

  // main thingy, parses html data attributes
  // in order to decide what to do
  buttons.on('click', function(ev) {
    var data = $(ev.target).data().do;

    if (data === 'submit') {
      endExperiment();
    }

    else if (data === 'inspire') {
      inspire();
    }

    else if (contains(colors, data)) {
      color(data);
    }

    else if (contains(manage, data)) {
      change(data);
    }

    else { changeWidth(data); }
  });

  var color = function(color) {
    sketchpad.pen().color(color);
  };

  var change = function(move) {
    sketchpad[move]();
  };

  var changeWidth = function(data) {
    var size = data === 'thicker' ? +2 : -2;
    sketchpad.pen().width(sketchpad.pen().width() + size);
  };

  var contains = function(array, el) {
    return array.indexOf(el) !== -1;
  };

  var inspire = function() {
    // conditional GET
    if (!inspired) {
      $.get('/exp', function(allDrawings) {

        drawings = allDrawings;
        inspired = true;

        inspiration = Raphael.sketchpad('viewer',
          { width: editor.width()
          , height: 600
          , strokes: drawings.shift()
          , editing: false
        });
      });
    }

    else { inspiration.strokes(drawings.shift()); }
  };

  var endExperiment = function() {
    var data = { drawing: sketchpad.json() };
    $.post('/exp', data);
    $.get('/code', function(data) {
      sketchpad.strokes(data.code);
    });
  };
});
