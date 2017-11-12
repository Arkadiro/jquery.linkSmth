/*
 * name: Linksmth
 * author: Arkadiy Roshchin
 * version: 0.2.0
 * lisence MIT
 */

 (function($){
    $.fn.linkSmth = function(options){
        //Default Setting
        var settings = $.extend({
            href     : null,
            text     : null,
            target   : '_self'
        },options);

        // Validation
        if(settings.href == null){
            console.log('You need an href option to linkSmth to work');
            return this;
        }

        return this.each(function(){
            var object = $(this);

            if(settings.text == null){
                settings.text = object.text();
            }
            object.wrap('<a target="'+settings.target+'" href="'+settings.href+'"></a>').text(settings.text);
        });   
    }
 }(jQuery));