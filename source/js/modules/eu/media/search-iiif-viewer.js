define([], function() {
  'use strict';

  /*
    Example 1

    http://localhost:3000/portal/en/record/07931/diglit_zygulski2009.html?q=edm_datasetName%3A07931*&debug=json

    webResource / svcsHasService = http://diglit.ub.uni-heidelberg.de/image/zygulski2009/000a.jpg

    manifestUrl:
      svcsHasService  +  /info.json
    =
      http://diglit.ub.uni-heidelberg.de/image/zygulski2009/000a.jpg/info.json

    > http://styleguide.europeana.eu/patterns/molecules-components-iiif/molecules-components-iiif.html?manifestUrl=http://diglit.ub.uni-heidelberg.de/image/zygulski2009/000a.jpg/info.json


    Example 2

    http://iiif.europeana.eu/AZ_1927_01_04_0001

    manifestUrl:
      svcsHasService  +  /info.json
    =
      http://iiif.europeana.eu/AZ_1927_01_04_0001/info.json

    > http://styleguide.europeana.eu/patterns/molecules-components-iiif/molecules-components-iiif.html?manifestUrl=http://iiif.europeana.eu/AZ_1927_01_04_0001/info.json
  */


  $('head').append('<link rel="stylesheet" href="' + require.toUrl('../../lib/map/css/application-map-all.css') + '" type="text/css"/>');
  $('head').append('<link rel="stylesheet" href="' + require.toUrl('../../lib/iiif/iiif.css')           + '" type="text/css"/>');

  var iiif;
  var layerCtrl;
  var currentImg = 0;
  var totalImages;

  var labelledData = {}; // JSON (entire manifest): data.label: data
  var iiifLayers   = {}; // Map layers (loaded): label: layer
  var allCanvases  = [];

  function log(msg) {
    console.log(msg);
  }

  /**
   * @centreIndex
   *
   * Called on init and after navigation operations
   * */

  var load = function(centreIndexIn, singleImageInfo){

    if(singleImageInfo){

        var layer = L.tileLayer.iiif(singleImageInfo);
        iiifLayers['single'] = layer;
        layer.addTo(iiif);
        updateCtrls();
        return;
    }
    var noToLoad    = 5;
    var noLoaded    = 0;
    var centreIndex = centreIndexIn ? centreIndexIn : currentImg;
    var index = Math.max(centreIndex - parseInt(noToLoad/2), 0);
    var done = false;

    while(!done){
      if(noLoaded == noToLoad){
        done = true;
      }
      else if(index >= allCanvases.length){
        done = true;
      }
      else{
        var data = allCanvases[index];

        if(! iiifLayers[index + ''] ){
          var layer = L.tileLayer.iiif( data.images[0].resource.service['@id'] + '/info.json' );
          iiifLayers[index + ''] = layer;
          noLoaded += 1;
        }
        index += 1;
      }
    }
  }

  var switchLayer = function(destLayer) {
    for(var base in iiifLayers) {
      if (iiif.hasLayer(iiifLayers[base]) && iiifLayers[base] != destLayer) {
        iiif.removeLayer(iiifLayers[base]);
      }
    }
    iiif.addLayer(destLayer);
  };

  var updateCtrls = function(){
    $('#iiif-ctrl .title').html(Object.keys(labelledData)[currentImg]);
    $('#iiif-ctrl .jump-to-img').val(currentImg+1);
    $('#iiif-ctrl .first').attr('disabled', currentImg == 0);
    $('#iiif-ctrl .prev').attr('disabled', currentImg == 0);
    $('#iiif-ctrl .next').attr('disabled', currentImg == totalImages-1);
    $('#iiif-ctrl .last').attr('disabled', currentImg == totalImages-1);
    $('#iiif-ctrl .jump-to-img').attr('disabled', totalImages == 1);
  }

  var nav = function($el, index){
    if($el.attr('disabled')){
      return;
    }

    var layer = iiifLayers[index + ''];

    if(!layer){
      $('#iiif').addClass('loading');
      load(index);
      layer = iiifLayers[index + ''];
      $('#iiif').removeClass('loading');
    }

    switchLayer(layer);
    currentImg = index;
    updateCtrls();
  }

  var initUI = function(fullScreenAvailable){

    $('#iiif').addClass('loading');

    iiif = L.map('iiif', {
      center: [0, 0],
      crs: L.CRS.Simple,
      zoom: 0,
      maxZoom: 10,
      zoomsliderControl: true
    });

    if(fullScreenAvailable){
      L.control.fullscreen({
        position: 'topright',
        forceSeparateButton: true,
        forcePseudoFullscreen: false
      }).addTo(iiif);
    }

    iiif.on('enterFullscreen', function(){
      $('.leaflet-container').css('background-color', '#000');
    });

    iiif.on('exitFullscreen', function(){
      $('.leaflet-container').removeAttr('style');
    });

    $('#iiif-ctrl .first').off('click').on('click', function(e){
      e.preventDefault();
      nav($(this), 0);
    });

    $('#iiif-ctrl .prev').off('click').on('click', function(e){
      e.preventDefault();
      nav($(this), currentImg-1);
    });

    $('#iiif-ctrl .next').off('click').on('click', function(e){
      e.preventDefault();
      nav($(this), currentImg+1);
    });

    $('#iiif-ctrl .last').off('click').on('click', function(e){
      e.preventDefault();
      nav($(this), totalImages-1);
    });

    $(iiif._container).off('keydown').on('keydown', function(e) {
        var key = window.event ? e.keyCode : e.which;
        e = e || window.event;
        if(e.shiftKey || e.ctrlKey){
            e.stopPropagation();
            e.preventDefault();
            if(key == 37){
                $('#iiif-ctrl .prev').click();
            }
            if(key == 38){
                $('#iiif-ctrl .first').click();
            }
            if(key == 39){
                $('#iiif-ctrl .next').click();
            }
            if(key == 40){
                $('#iiif-ctrl .last').click();
            }
        }
    });

    $('#iiif-ctrl .jump-to-img').off('keydown').on('keydown', function(e) {
      var key = window.event ? e.keyCode : e.which;
      if(key == 13){
        var val = parseInt($(this).val());
        if(!isNaN(val) && val > 0 && val < totalImages+1){
          nav($(this), val-1);
        }
        else{
          $(this).val(currentImg+1);
        }
      }
    });
  }

  var setTotalImages = function(total){
      totalImages = total;
      $('#iiif-ctrl .total-images').html('/ ' + totalImages);
  }

  function initViewer(manifestUrl, $thumbnail, fullScreenAvailable) {
    initUI(fullScreenAvailable);

    if(manifestUrl.indexOf('info.json') == manifestUrl.length - ('info.json').length ){
      setTotalImages(1);
      load(1, manifestUrl);
      $('#iiif').removeClass('loading');
      $('.media-viewer').trigger("object-media-open", {hide_thumb:true});
      updateCtrls();
    }
    else{
      // Grab a IIIF manifest
      $.getJSON(manifestUrl, function(data) {

        $.each(data.sequences[0].canvases, function(_, val) {
          labelledData[val.label] = val;
          allCanvases.push(val);
        });

        setTotalImages(allCanvases.length)
        load();

        $('#iiif').removeClass('loading');

        iiifLayers['0'].addTo(iiif);

        $('.media-viewer').trigger("object-media-open", {hide_thumb:true});
        updateCtrls();
      }).fail(function(jqxhr) {
        log('error loading manifest (' + manifestUrl +  '): ' + JSON.stringify(jqxhr, null, 4));
        $('.media-viewer').trigger({"type": "remove-playability", "$thumb": $thumbnail, "player": "iiif"});
      });
    }

    if($('#iiif').hasClass('transcription')){
      initTranscription();
    }
  }

  function initTranscription(){
    var addRectangle = function(pointList){

      // remove previous rectangles - upgrade to leaflet 1.0 to be able to use rect.delete
      $('.leaflet-overlay-pane g').remove();

      var rect = new L.Rectangle(pointList, {
        color:       '#1DA2F5',
        weight:       1,
        opacity:      0.5,
        smoothFactor: 1
      });
      rect.addTo(iiif);
    };

    var getParagraphPointList = function($p){

      var x = parseInt($p.attr('xcoord'));
      var y = parseInt($p.attr('ycoord'));
      var w = parseInt($p.attr('fwidth'));
      var h = parseInt($p.attr('fheight'));

      var l       = currentImg ? iiifLayers[currentImg] : iiifLayers['single'];
      var lData   = l.getData();
      var divider = lData.tiles[0].scaleFactors[lData.tiles[0].scaleFactors.length-1];

      return [
        [0 - y / divider, x / divider],
        [0 - y / divider, (x + w) / divider],
        [0 - (y + h) / divider, x / divider],
        [0 - (y + h) / divider, (x + w) / divider]
      ];
    }

    $('#full-text-panel p').click(function(e){

      var p = $(this);
      $('#full-text-panel p').removeClass('highlight');
      p.addClass('highlight');

      var pointList = getParagraphPointList(p);
      addRectangle(pointList);
      iiif.fitBounds(pointList);
    });

    iiif.on('click', function(e) {

      var l       = currentImg ? iiifLayers[currentImg] : iiifLayers['single'];
      var lData   = l.getData();
      var divider = lData.tiles[0].scaleFactors[lData.tiles[0].scaleFactors.length-1];
      var point   = iiif.options.crs.latLngToPoint(e.latlng, 0);
      var x       = point.x * divider;
      var y       = point.y * divider;

      // Check if the given coordinate belongs to a certain text fragment
      var coordBelogsToRect = function(xClick, yClick, x, y, w, h) {
        return (xClick >= Number(x) &&
                xClick <= Number(x) + Number(w) &&
                yClick >= Number(y) &&
                yClick <= Number(y) + Number(h));
      }


      $('#full-text-panel p[id^="fragment-"]').each(function() {
        var $p      = $(this);
        var xCoord  = $p.attr('xcoord');
        var yCoord  = $p.attr('ycoord');
        var fWidth  = $p.attr('fwidth');
        var fHeight = $p.attr('fheight');

        if(coordBelogsToRect(x, y, xCoord, yCoord, fWidth, fHeight)) {

          var alreadyHighlighted = $p.hasClass('highlight');

          if(alreadyHighlighted){
            $('#full-text-panel word').removeClass('highlight');
          }
          else{
            $('#full-text-panel p').removeClass('highlight');
            $('#full-text-panel word').removeClass('highlight');
            $p.addClass('highlight');
            $('#full-text-panel').scrollTop($p[0].getBoundingClientRect().top);
            addRectangle(getParagraphPointList($p));
          }

          $p.find('word').each(function(i, word){
            word = $(word);
            if(coordBelogsToRect(x, y, $(word).attr('x'), $(word).attr('y'), $(word).attr('w'), $(word).attr('h'))){
              $(word).addClass('highlight');
              return false;
            }
          });
          return false;
        }
      });
    });
  }

  return {
    init: function(manifestUrl, $thumbnail, fullScreenAvailable) {
      require(['leaflet_iiif'], function(){
        initViewer(manifestUrl, $thumbnail, fullScreenAvailable);
      });
    },
    hide: function(){
        iiif.remove();
        currentImg   = 0;
        totalImages  = 0;
        labelledData = {};
        allCanvases  = [];
        iiifLayers   = {};
    }
  };
});
