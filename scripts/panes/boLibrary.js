define(function(require) {

  var paneManager;
  var bobo = require('bobo');
  var charmToMineForFunReading = 10;
  var timeSpentInLibrary = 0;

  function init() {
  }

  function setPaneManager(paneManager) {
    this.paneManager = paneManager;
    var mePanes = this.paneManager;
    $("#boLibrary_exit").click(function() { mePanes.activatePane('map'); });
    $("#boLibrary_study").click(_study);
    $("#boLibrary_readForFun").click(_readForFun);
  }

  function hide() {
    $('div#boLibrary').hide();
  }

  function draw() {
    $('div#boLibrary').show();
  }

  function tick() {
    timeSpentInLibrary += 1;
    if(timeSpentInLibrary % 3 == 0) {
      bobo.changeStat('boCharm', -1);
      bobo.changeStat('boKnowledge', 1);
    }
  }

  function _study() {
      boQuestions = [
        {
            'subject': "BoHistory"
          , 'msg': [ "Botucky was established in 1820 by bodacious bosettlers of"
                , "the Bo'dowlands.  Many of these brave bosettlers were orignally"
                , "Bo'diers in the grand BoArmy.  Many of their sons and "
                , "daughters were inspired by their parents bravery and went on "
                , "to become soldiers in the war of Bo'thern agression."]
          , 'question':  "When was Botucky established?"
          , 'options': ["1820", "1720", "1950"]
          , 'answer':  0
        },
        {
            'subject': "BoArt"
          , 'msg': [ "Pablo Bocasso was a BoPressionist painter.  Unfortunatly due to some"
                    , "weird funky bullshit Bocasso cut off his ear to impress some random"
                    , "BoBette.  He thought it would impress the BoBette, it BoDidn't, such"
                    , "is BoLife.  Nevertheless one of BoCasso's most famous paintings"
                    , "is BoStarry night"
                ]
          , 'question':  "When was the art style of Pablo Bocasso?"
          , 'options': ["BoSurrealist", "BoPressionist", "BoModernist"]
          , 'answer':  1
        }
      ]

      questionNum = Math.floor(Math.random() * boQuestions.length);
      subject = boQuestions[questionNum]['subject'];
      msg = boQuestions[questionNum]['msg'];
      question = boQuestions[questionNum]['question'];
      options = boQuestions[questionNum]['options'];
      answer = boQuestions[questionNum]['answer'];

      // Pop the question out
      //boQuestions = boQuestions.filter(function(idx) { console.log(idx); return questionNum != idx; });
      //console.log("IDX = ", questionNum);
      //console.log(boQuestions);

      text = "BoBo opens a book to read a passage";
      text = '<h2>' + subject + '</h2><br>';
      text += msg.join('<br>');
      text += '<br><br>';
      text += '<button id="boLibrary_checkComprehension">Check reading comprehension</button>'

      $('#boLibrary_text').html(text);

      $('#boLibrary_checkComprehension').click(function() {
          text =  "Did BoBo read it right?<br>";
          text += "QUESTION: " + question + "<br>";
          for(var i in options) {
            text += '<button id="boLibrary_rc_' + i + '">' + options[i] + '</button>';
          }
          $('#boLibrary_text').html(text);
          for(var i in options) {
            if(i == answer) {
              $('#boLibrary_rc_' + i).click(function() {
                  $('#boLibrary_text').html('<h2>BoCORRECT!!!!</h2>');
                  bobo.changeStat('boKnowledge', 5);
                  bobo.changeStat('boMoves', 1);
              });
            } else {
              $('#boLibrary_rc_' + i).click(function() {
                  $('#boLibrary_text').html('<h2>BoWRONG!!!!</h2>');
                  bobo.changeStat('boMoves', 1);
              });
            }
          }
      });
  }

  function _readForFun() {
    if(charmToMineForFunReading > 0) {
      bobo.changeStat('boCharm', 1);
      charmToMineForFunReading -= 1;
    }
    bobo.changeStat('boMoves', 1);
  }

  init()

  return {
    draw: draw,
    hide: hide,
    setPaneManager: setPaneManager,
    tick: tick
  };
});
