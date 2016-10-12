define(function(require) {

  var grid_width = 134,
      grid_height = 90;

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

  placeDiv = function(divId,x,y) {
    elem = $('#'+divId)
    elem.css({
      'position':'absolute'
      ,'top': y*14
      ,'left': x*7
    });
  }

  placeVerbatimDiv = function(divId,x,y) {
    elem = $('#'+divId).first();
    elem.html(verbatimText(elem.html()));
    placeDiv(divId,x,y);
  }

  createArtDiv = function(text,artId,targetId,x=0,y=0) {
    var div = document.createElement("div"),
        text = text.join('\n');
    $(div).attr('id',artId);
    $(div).attr('class','clickableArt');
    $(div).html(text);
    $('#'+targetId).append(div);
    placeVerbatimDiv(artId,x,y);
  }

  updateArtDiv = function(text,artId,x=0,y=0) {
    var verbText = verbatimText(text.join('\n')),
        elem = $('#'+artId);
    if(verbText != elem.html()) {
      elem.html(verbText);
    }
    placeDiv(artId,x,y);
  }

  createGrid = function() {
    var elem, grid_ones, grid_tens, max_grid_size;
    elem = $('div#grid')[0];
    grid_ones = Array();
    grid_tens = Array();
    max_grid_size = Math.max(grid_width,grid_height);
    for(i=2; i<max_grid_size; i++) {
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

    for(i=0; i<grid_height; i++) {
      if(grid_tens[i]<10) {
        elem.innerHTML += ' ';
      }
      elem.innerHTML += grid_tens[i].toString().replace('X','  ')+grid_ones[i]+'\n';
    }
    placeVerbatimDiv('grid',0,0);
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
    grid_size: {'width':grid_width,'height':grid_height}
    ,setGridVisible: setGridVisible
    ,verbatimText: verbatimText
    ,createArtDiv: createArtDiv
    ,updateArtDiv: updateArtDiv
    ,placeDiv: placeDiv
    ,placeVerbatimDiv: placeVerbatimDiv
  }
});
