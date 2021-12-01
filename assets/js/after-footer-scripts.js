function updateOffsiteLinksToOpenInBlank() {
  var host = document.location.hostname
  var els = $("a:not(:target)").each(function(i,o) {
    if(((o.href+"").trim().length > 0 && (o.href.indexOf('://'+host)<1 || $(o).attr('use-same-tab') == "false"))) {
      if($(o).attr('is-external-link') != "true") {
        $(o).attr('is-external-link','true')
        $(o).attr('target','_blank')
        var span = $('<span class="external-link-icon"></span>')
        span.click(function() { $(o).click() })
        span.insertAfter(o)
      }
    }
  });
}
function updateYoutubeLinksToEmbeds() {
  var element_types = ['p','div']
  var search_fors = ['://youtu.be/','www.youtube.com/watch']
  var selectors = []
  $(element_types).each(function(i1,o1) {
    $(search_fors).each(function(i2,o2) {
      selectors.push(o1+':contains("'+o2+'")')
    });
  });
  var els = []
  $(selectors).each(function(i,o) {
    els = els.concat($(o).toArray())
  });
  var els = $(els).each(function(i,o) {
    var lc_text = $(o).text().trim().replace('[embed]','').replace('[/embed]','')
    if(lc_text.length < 256 && isUrlValid(lc_text)) {
      var path = lc_text.split("/");
      path = path.slice(3,path.length).join("/")
      if(path.indexOf('watch?v=')==0)
        path = path.replace('watch?v=','')
      $(o).before('<iframe width="560" height="315" src="https://www.youtube.com/embed/'+path+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
    }
  });
}
function isUrlValid(url) {
  return /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(url);
}
