
define(['jquery', 'util_resize'], function($){

  var formId   = 'new_ore_aggregation';
  var formSave = null;

  function addValidationError($el, msg){

    var defMsg = 'Error';

    if(!msg){
      if($el.attr('type') == 'date'){
        msg = window.I18n ? window.I18n.translate('global.forms.validation-errors.date-past') : defMsg;
      }
      else if($el.attr('type') == 'email'){
        msg = window.I18n ? window.I18n.translate('global.forms.validation-errors.email') : defMsg;
      }
      else if($el.attr('required') == 'required'){
        msg = window.I18n ? window.I18n.translate('global.forms.validation-errors.blank') : defMsg;
      }
    }

    removeValidationError($el);

    if(msg){
      if($el.next('.hint').length > 0){
        $el = $el.next('.hint');
      }
      $el.after('<span class="error">' + msg + '</span>');
    }
  }

  function removeValidationError($el){

    $el.removeClass('invalid');

    if($el.next('.hint').length > 0){
      $el = $el.next('.hint');
    }
    $el.next('.error').remove();
  }

  function initClientSideValidation(){
    $(document).on('blur', 'input,textarea,select', function(){
      var $el = $(this);
      $el.addClass('had-focus');
      if($el.is(':valid')){
        removeValidationError($el);
      }
      else{
        addValidationError($el);
      }
    });
  }

  function bindDynamicFieldset(){

    var reindex = function(){
      $('.nested_ore_aggregation_edm_hasViews:visible .sequenced_object_fieldset').each(function(i){
        $(this).find('legend').attr('index', i + 2);
      });
    };

    $(document).on('fields_added.nested_form_fields', function(){
      reindex();
      if(formSave){
        formSave.trackHidden();
      }
      initAutoCompletes();
    });

    $(document).on('fields_removed.nested_form_fields', function(e, param){

      if(formSave){
        var selOb = '[name="' + param['delete_association_field_name'] + '"]';
        var ob    = $(selOb);
        formSave.clearFieldset($(ob).next('.nested_fields'));
      }

      reindex();
    });

    reindex();
  }

  function initHiddenFieldActivators(){

    $('[data-requires]').each(function(){
      $(this).closest('.input').addClass('requires-other-field');
    });

    var activateFields = function(f){

      var fs = $('[data-requires="' + f.attr('id') + '"]');

      if(f.val() && f.val().length > 0){
        fs.closest('.requires-other-field').addClass('enabled');
      }
      else{
        fs.closest('.requires-other-field').removeClass('enabled');
      }
    };

    $(':input').each(function(){
      activateFields($(this));
    });

    $(document).on('change', ':input', function(){
      activateFields($(this));
    });
  }


  function initCopyField(){

    var copyFromId = 'ore_aggregation_edm_aggregatedCHO_attributes_dc_contributor_attributes_foaf_name';
    var copyToId   = 'ore_aggregation_edm_aggregatedCHO_attributes_dc_contributor_attributes_skos_prefLabel';
    var copyFrom   = $('#' + copyFromId);
    var copyTo     = $('#' + copyToId);

    copyTo.before('<a class="btn-copy-name">' + (window.I18n ? window.I18n.translate('site.ugc.actions.copy-name') : 'Use Name') + '</a>');

    $('.btn-copy-name').on('click', function(){
      copyTo.val(copyFrom.val());
      copyTo.blur();
      copyTo.trigger('change');
    });

    copyFrom.on('keyup', function(){

      if($(this).val().length > 0){
        $('.btn-copy-name').addClass('enabled');
      }
      else{
        $('.btn-copy-name').removeClass('enabled');
      }
    });

    if(copyFrom.val().length > 0){
      $('.btn-copy-name').addClass('enabled');
    }

  }

  function getAutocompleteConfig($el){

    return {
      fnOnSelect : function($el, $input){
        $input.change();
        $('#' + $input.data('for')).val($el.data('value'));
      },
      fnOnEnter : function(selectionMade){
        if(selectionMade){
          $('form[data-local-storage-id]').submit();
        }
      },
      fnPreProcess     : function(term, data, ops){
        var escapeRegExp = function(str){
          return str.replace(/[\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
        };
        var re = new RegExp('\\b' + escapeRegExp(term), 'i');
        for(var i=0; i<data.length; i++){
          var val        = data[i].text;
          var match      = val.match(re);
          var matchIndex = val.indexOf(match);

          if(val.toLowerCase() == term.toLowerCase()){
            $('#' + ops.selInput.data('for')).val(data[i].value);
          }

          if(matchIndex > -1){
            data[i].textPreMatch  = val.substr(0, matchIndex);
            data[i].textPostMatch = val.substr(matchIndex + (match+'').length);
            data[i].textMatch     = match;
          }
          else{
            data[i].textPreMatch  = val;
          }
        }

        return data;
      },
      fnOnDeselect: function($input){
        $('#' + $input.data('for')).val('');
      },
      itemTemplateText : '<li data-term="[[text]]" data-value="[[value]]" data-hidden-id="' + name + '"><span>[[textPreMatch]]<span class="match"><b>[[textMatch]]</b></span>[[textPostMatch]]</span></li>',
      minTermLength    : 2,
      paramName        : $el.data('param'),
      selInput         : $el,
      threshold        : 150,
      url              : $el.data('url'),
      hideOnSelect     : true,
      disableArrowsLR  : true
    };
  }

  function initAutoComplete($el){

    $el.wrap('<div class="relative">');
    $el.addClass('autocomplete-inititlised');

    require(['eu_autocomplete', 'util_resize'], function(Autocomplete){
      Autocomplete.init(getAutocompleteConfig($el));
    });
  }

  function initAutoCompletes(){

    var autocompletes = $('[data-url]:not(.autocomplete-inititlised)');

    if(autocompletes.length > 0){
      autocompletes.each(function(){
        initAutoComplete($(this));
      });
    }
  }

  function initFormSave(){

    $(document).on('external_js_loaded', function(){

      require(['eu_form_save'], function(FormSave){

        var $form = $('form[data-local-storage-id]');
        formSave  = FormSave.create($form, window.pageName == 'migration/create');

      });
    });
  }



  function validateForm(){

    /*
    var invalids = $('input:invalid').add('textarea:invalid').add('select:invalid');
    var valid    = invalids.length == 0;

    invalids.addClass('invalid');
    invalids.each(function(){addValidationError($(this));});

    return valid;
    */
    return true;
  }

  function initDateFields(){
    var maxDate = new Date().toISOString().substring(0,10);
    $('input[type=date]:not([max])').attr('max', maxDate);
    console.log('set max date of ' + maxDate + ' on ' + $('input[type=date]').length + ' fields');
  }

  function initFileFields(){

    $(document).on('change', '[type="file"][accept]', function(){

      removeValidationError($(this));

      var val     = $(this).val();
      var allowed = $(this).attr('accept').split(',');

      if(val && val.length > 0){

        var ext       = val.slice(val.lastIndexOf('.'));
        var isAllowed = false;

        if(ext && ext.length > 0){
          $.each(allowed, function(){
            if(ext.toUpperCase() == this.trim().toUpperCase()){
              isAllowed = true;
            }
          });
        }
        if(!isAllowed){
          var msg = window.I18n ? window.I18n.translate('global.forms.validation-errors.file-type', {allowed_types: allowed.join(', ')}) : 'Invalid file type';
          addValidationError($(this), msg);
        }
      }
    });
  }

  function initPage(){

    var $form = $('#' + formId);
    var key   = $form.attr('recaptcha-site-key');

    var onSubmit = function(){

      if(validateForm()){

        if(typeof window.grecaptcha != 'undefined'){

          var captchaResponse = window.grecaptcha.getResponse();

          console.log('in submit: response = ' + captchaResponse + ' (' + (typeof captchaResponse) + ')');

          if(!captchaResponse || captchaResponse == '' || captchaResponse == 'false'){
            window.grecaptcha.execute();
            return false;
          }
          else{
            console.log('proceed with submission...');
            if(formSave){
              formSave.save();
            }
            $form.off('submit');
            $form.submit();
          }
        }
        else{
          if(formSave){
            formSave.save();
          }
          $form.off('submit');
          $form.submit();
        }
      }
      else{
        console.log('validation fails');
        return false;
      }
    };

    $form.on('submit', onSubmit);

    window.onloadCallback = function(){

      window.grecaptcha.render('g-recaptcha', {
        'sitekey': key,
        'callback': onSubmit,
        'size': 'invisible'
      });
      window.grecaptcha.reset();
    };

    if(key && location.href.indexOf('no-verify') == -1){
      $form.append('<div id="g-recaptcha"></div>');
      $('body').append('<script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit" async defer></script>');
    }

    $(document).on('eu-form-save-initialised', initHiddenFieldActivators);

    initFormSave();
    initAutoCompletes();
    initDateFields();
    initFileFields();
    bindDynamicFieldset();
    initCopyField();

    //initClientSideValidation();
  }

  return {
    initPage : initPage
  };

});
