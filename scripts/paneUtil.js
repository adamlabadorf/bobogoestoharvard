define(function(require) {

  String.prototype.replaceAll = function(search, replace) {
    if (replace === undefined) {
        return this.toString();
    }
    return this.split(search).join(replace);
  }

  verbatimText = function(text) {
    var verbText, replaces;
    verbText = text;
    replaces = [['\n','<br/>'],[' ','&nbsp']];
    for(i in replaces) {
      verbText = verbText.replaceAll(replaces[i][0],replaces[i][1])
    }
    return verbText;
  }

  placeDiv = function(x,y,divId) {
    elem = $('#'+divId)
    elem.css({
      'position':'absolute'
      ,'top': y*14
      ,'left': x*7
    });
  }

  placeVerbatimDiv = function(x,y,divId) {
    elem = $('#'+divId);
    console.log(divId);
    console.log(elem);
    elem.html(verbatimText(elem[0].innerHTML));
    placeDiv(x,y,divId);
  }

  createArtDiv = function(text,artId,targetId,x=0,y=0) {
    var div = document.createElement("div"),
        text = text.join('\n');
    $(div).attr('id',artId);
    $(div).attr('class','clickableArt');
    $(div).html(text);
    $('#'+targetId).append(div);
    placeVerbatimDiv(x,y,artId);
  }

  createGrid = function() {
    var elem, grid_ones, grid_tens, max_grid_size;
    elem = $('#grid')[0];
    grid_ones = Array();
    grid_tens = Array();
    max_grid_size = 134;
    for(i=0; i<max_grid_size; i++) {
      if(i%10 == 0) {
        grid_tens.push(Math.round(i/10));
      } else if(i%10 == 1 && i>100) {
        // the top grid needs one fewer space for i>100
        grid_tens.push('X');
      }
      else {
        grid_tens.push(' ');
      }
      grid_ones.push(i%10);
    }
    elem.innerHTML = '   '+grid_tens.filter(function(x) { return x!='X'}).join('')+'\n';
    elem.innerHTML += '   '+grid_ones.join('')+'\n';

    for(i=0; i<grid_tens.length; i++) {
      if(grid_tens[i]<10) {
        elem.innerHTML += ' ';
      }
      elem.innerHTML += grid_tens[i].toString().replace('X','  ')+grid_ones[i]+'\n';
    }
    placeVerbatimDiv(0,0,'grid');
  }
  createGrid();
  setGridVisible = function(set_visible=true) {
    if(set_visible) {
      $('#grid').show();
    } else {
      $('#grid').hide();
    }
  }

  setGridVisible();

  return {
    setGridVisible: setGridVisible
    ,verbatimText: verbatimText
    ,createArtDiv: createArtDiv
    ,placeDiv: placeDiv
    ,placeVerbatimDiv: placeVerbatimDiv
  }
});
