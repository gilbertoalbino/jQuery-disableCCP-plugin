(function($){
    $.fn.disableCCP = function() {
        return this.each( function() {
            var $this = $(this);
            $this.bind("cut copy paste",function(e) {
                e.preventDefault();
            })
            
        });
    }
})(jQuery);