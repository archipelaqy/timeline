/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  Beranda */
    $(document).on("click", ".uib_w_3", function(evt)
    {
        /* your code goes here */ 
         return false;
    });
    
        /* button  Button */
    $(document).on("click", ".uib_w_6", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($(".uib_w_1"));  
         return false;
    });
    
        /* button  .uib_w_2 */
    $(document).on("click", ".uib_w_2", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($(".uib_w_3"));  
         return false;
    });
    
        /* button  Beranda */
    $(document).on("click", ".uib_w_5", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#page_48_85"); 
         return false;
    });
    
        /* button  Homepage */
    $(document).on("click", ".uib_w_5", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#homepage"); 
         return false;
    });
    
        /* button  Scan */
    $(document).on("click", ".uib_w_5", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#scanPage"); 
         return false;
    });
    
        /* button  Contact */
    $(document).on("click", ".uib_w_5", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#Contact-page"); 
         return false;
    });
    
        /* button  About */
    $(document).on("click", ".uib_w_5", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#about-Page"); 
         return false;
    });
    
        /* button  Beranda */
    $(document).on("click", ".uib_w_5", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#page_48_85"); 
         return false;
    });
    
        /* button  Homepage */
    $(document).on("click", ".uib_w_5", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#homepage"); 
         return false;
    });
    
        /* button  Scan */
    $(document).on("click", ".uib_w_5", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#scanPage"); 
         return false;
    });
    
        /* button  Contact */
    $(document).on("click", ".uib_w_5", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#Contact-page"); 
         return false;
    });
    
        /* button  About */
    $(document).on("click", ".uib_w_5", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#about-Page"); 
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
