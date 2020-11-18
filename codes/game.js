$(document).ready(function () {
  var sound = document.getElementById('myAudio');
  var sound2 = document.getElementById('myAudio2');

  var total = 0;
  var main = $('#main');
  var distination = $('#destination');
  var source = $('#source');
  var res = $('#resultat');
  res.html('<label class="result"   id="resultat"  >Score :0</label>');

  var db = openDatabase('game', '1.0', 'Test DB', 2 * 1024 * 1024);

  $('#source').droppable({
    accept: function (ui) {
      return true;
    },
    addClasses: false,
    hoverClass: 'hover',

    drop: function (event, ui) {
      var obj = $(this);
      var piece = ui.draggable;
      var lastLocation = $.data(piece[0], 'lastLocation');
      piece.appendTo($(this));

      piece.css({
        left: lastLocation.position().left + 'px',
        top: lastLocation.position().top + piece.position().top + 'px',
      });
    },
  });

  //elements
  var elmt1 = $('#elmt1');
  var elmt2 = $('#elmt2');
  var elmt3 = $('#elmt3');
  var elmt4 = $('#elmt4');
  var elmt5 = $('#elmt5');

  var dest1 = $('#dest1');
  var dest2 = $('#dest2');
  var dest3 = $('#dest3');
  var dest4 = $('#dest4');
  var dest5 = $('#dest5');

  $('#elmt1')
    .draggable({
      addClasses: false,
      appendTo: 'body',
      zIndex: 10000,
      start: function (event, ui) {
        if ($.data(this, 'ok')) {
          return false;
        }
      },

      revert: 'invalid',
      containment: main,
    })
    .appendTo(main);

  elmt2
    .draggable({
      addClasses: false,
      appendTo: 'body',
      zIndex: 10000,
      start: function (event, ui) {
        if ($.data(this, 'ok')) {
          return false;
        }
      },
      revert: 'invalid',
      containment: main,
    })
    .appendTo(main);

  dest1
    .droppable({
      accept: function (ui) {
        return $(this).is(':empty');
      },
      addClasses: false,
      hoverClass: 'hover',
      drop: function (event, ui) {
        var obj = $(this);
        ui.draggable.appendTo(obj);
        $.data(ui.draggable[0], 'lastLocation', obj);
        ui.draggable.css({
          left: '0px',
          top: '0px',
        });

        if (obj.attr('data-num') == ui.draggable.attr('data-num')) {
          $.data(ui.draggable[0], 'ok', true);

          obj.css('background-image', 'none');
          ui.draggable.css('cursor', 'default');
          $('<span></span>')
            .css({
              position: 'absolute',
              left: '0px',
              top: '0px',
              display: 'block',
              width: '100%',
              height: '100%',
              'background-color': '#fff',
            })
            .appendTo(ui.draggable)
            .fadeOut(2000, function () {
              $(this).remove();
            });
          // total++;
          total = total + 5;
          sound.play();
          res.html(
            '<label class="result"   id="resultat"  >Score :' +
              total +
              '</label>'
          );
          if (total == 25) {
            score = total;
            db.transaction(function (tx) {
              tx.executeSql('CREATE TABLE IF NOT EXISTS SCORETABLE (score)');
              tx.executeSql(
                'INSERT INTO LOGS (score) VALUES ("' + score + '")'
              );
            });
            $('#dialog')
              .dialog({
                autoOpen: false,
                show: 'blind',
                hide: 'explode',
              })
              .dialog('open');
          }
        } else {
          sound2.play();
        }
      },
    })
    .appendTo(destination);

  dest2
    .droppable({
      accept: function (ui) {
        return $(this).is(':empty');
      },
      addClasses: false,
      hoverClass: 'hover',
      drop: function (event, ui) {
        obj = $(this);

        ui.draggable.appendTo(obj);

        obj.attr('data-check', 't');

        $.data(ui.draggable[0], 'lastLocation', obj);

        ui.draggable.css({
          left: '0px',
          top: '0px',
        });

        if (obj.attr('data-num') == ui.draggable.attr('data-num')) {
          $.data(ui.draggable[0], 'ok', true);

          obj.css('background-image', 'none');

          ui.draggable.css('cursor', 'default');
          $('<span></span>')
            .css({
              position: 'absolute',
              left: '0px',
              top: '0px',
              display: 'block',
              width: '100%',
              height: '100%',
              'background-color': '#fff',
            })
            .appendTo(ui.draggable)
            .fadeOut(2000, function () {
              $(this).remove();
            });
          // total++;
          total = total + 5;
          sound.play();
          res.html(
            '<label class="result"   id="resultat"  >Score :' +
              total +
              '</label>'
          );

          if (total == 25) {
            score = total;
            db.transaction(function (tx) {
              tx.executeSql('CREATE TABLE IF NOT EXISTS SCORETABLE (score)');
              tx.executeSql(
                'INSERT INTO LOGS (score) VALUES ("' + score + '")'
              );
            });
            $('#dialog')
              .dialog({
                autoOpen: false,
                show: 'blind',
                hide: 'explode',
              })
              .dialog('open');
          }
        } else {
          sound2.play();
        }
      },
    })
    .appendTo(destination);

  //elmt3
  elmt3
    .draggable({
      addClasses: false,
      appendTo: 'body',
      zIndex: 10000,
      start: function (event, ui) {
        if ($.data(this, 'ok')) {
          return false;
        }
      },

      revert: 'invalid',
      containment: main,
    })
    .appendTo(main);

  //elmt4
  elmt4
    .draggable({
      addClasses: false,
      appendTo: 'body',
      zIndex: 10000,
      start: function (event, ui) {
        if ($.data(this, 'ok')) {
          return false;
        }
      },

      revert: 'invalid',
      containment: main,
    })
    .appendTo(main);

  //elmt4
  elmt5
    .draggable({
      addClasses: false,
      appendTo: 'body',
      zIndex: 10000,
      start: function (event, ui) {
        if ($.data(this, 'ok')) {
          return false;
        }
      },

      revert: 'invalid',
      containment: main,
    })
    .appendTo(main);

  //dest3
  dest3
    .droppable({
      accept: function (ui) {
        return $(this).is(':empty');
      },
      addClasses: false,
      hoverClass: 'hover',
      drop: function (event, ui) {
        obj = $(this);

        ui.draggable.appendTo(obj);

        obj.attr('data-check', 't');

        $.data(ui.draggable[0], 'lastLocation', obj);

        ui.draggable.css({
          left: '0px',
          top: '0px',
        });

        if (obj.attr('data-num') == ui.draggable.attr('data-num')) {
          $.data(ui.draggable[0], 'ok', true);

          obj.css('background-image', 'none');

          ui.draggable.css('cursor', 'default');
          $('<span></span>')
            .css({
              position: 'absolute',
              left: '0px',
              top: '0px',
              display: 'block',
              width: '100%',
              height: '100%',
              'background-color': '#fff',
            })
            .appendTo(ui.draggable)
            .fadeOut(2000, function () {
              $(this).remove();
            });
          // total++;
          total = total + 5;
          sound.play();
          res.html(
            '<label class="result"   id="resultat"  >Score :' +
              total +
              '</label>'
          );

          if (total == 25) {
            score = total;
            db.transaction(function (tx) {
              tx.executeSql('CREATE TABLE IF NOT EXISTS SCORETABLE (score)');
              tx.executeSql(
                'INSERT INTO LOGS (score) VALUES ("' + score + '")'
              );
            });
            $('#dialog')
              .dialog({
                autoOpen: false,
                show: 'blind',
                hide: 'explode',
              })
              .dialog('open');
          }
        } else {
          sound2.play();
        }
      },
    })
    .appendTo(destination);

  //dest4
  dest4
    .droppable({
      accept: function (ui) {
        return $(this).is(':empty');
      },
      addClasses: false,
      hoverClass: 'hover',
      drop: function (event, ui) {
        obj = $(this);

        ui.draggable.appendTo(obj);

        obj.attr('data-check', 't');

        $.data(ui.draggable[0], 'lastLocation', obj);

        ui.draggable.css({
          left: '0px',
          top: '0px',
        });

        if (obj.attr('data-num') == ui.draggable.attr('data-num')) {
          $.data(ui.draggable[0], 'ok', true);

          obj.css('background-image', 'none');

          ui.draggable.css('cursor', 'default');
          $('<span></span>')
            .css({
              position: 'absolute',
              left: '0px',
              top: '0px',
              display: 'block',
              width: '100%',
              height: '100%',
              'background-color': '#fff',
            })
            .appendTo(ui.draggable)
            .fadeOut(2000, function () {
              $(this).remove();
            });
          // total++;
          total = total + 5;
          sound.play();
          res.html(
            '<label class="result"   id="resultat"  >Score :' +
              total +
              '</label>'
          );

          if (total == 25) {
            score = total;
            db.transaction(function (tx) {
              tx.executeSql('CREATE TABLE IF NOT EXISTS SCORETABLE (score)');
              tx.executeSql(
                'INSERT INTO LOGS (score) VALUES ("' + score + '")'
              );
            });
            $('#dialog')
              .dialog({
                autoOpen: false,
                show: 'blind',
                hide: 'explode',
              })
              .dialog('open');
          }
        } else {
          sound2.play();
        }
      },
    })
    .appendTo(destination);

  //dest5
  dest5
    .droppable({
      accept: function (ui) {
        return $(this).is(':empty');
      },
      addClasses: false,
      hoverClass: 'hover',
      drop: function (event, ui) {
        obj = $(this);

        ui.draggable.appendTo(obj);

        obj.attr('data-check', 't');

        $.data(ui.draggable[0], 'lastLocation', obj);

        ui.draggable.css({
          left: '0px',
          top: '0px',
        });

        if (obj.attr('data-num') == ui.draggable.attr('data-num')) {
          $.data(ui.draggable[0], 'ok', true);

          obj.css('background-image', 'none');

          ui.draggable.css('cursor', 'default');
          $('<span></span>')
            .css({
              position: 'absolute',
              left: '0px',
              top: '0px',
              display: 'block',
              width: '100%',
              height: '100%',
              'background-color': '#fff',
            })
            .appendTo(ui.draggable)
            .fadeOut(2000, function () {
              $(this).remove();
            });
          // total++;
          total = total + 5;
          sound.play();
          res.html(
            '<label class="result"   id="resultat"  >Score :' +
              total +
              '</label>'
          );

          if (total == 25) {
            score = total;
            db.transaction(function (tx) {
              tx.executeSql('CREATE TABLE IF NOT EXISTS SCORETABLE (score)');
              tx.executeSql(
                'INSERT INTO LOGS (score) VALUES ("' + score + '")'
              );
            });
            $('#dialog')
              .dialog({
                autoOpen: false,
                show: 'blind',
                hide: 'explode',
              })
              .dialog('open');
          }
        } else {
          sound2.play();
        }
      },
    })
    .appendTo(destination);
});
