/*
 * jQuery Disable Cut Copy Paste Plugin 1.0.0
 * http://github.com/gilbertoalbino/jquery-disableCCP-plugin
 * Requires jQuery 1.3
 *
 * Copyright 2012, Liuitt.
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
 
 /**
  * This is a very basic plugin but very functional
  * Use it if you want to disable cut, copy and past events
  * to prevent users from bypassing email or password confirmation
  */
(function($){
    $.fn.disableCCP = function() {
        return this.each( function() {
            var $this = $(this);
            $this.live("cut copy paste",function(e) {
                e.preventDefault();
            })
            
        });
    }
})(jQuery);