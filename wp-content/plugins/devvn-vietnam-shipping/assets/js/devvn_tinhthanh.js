!function(o){o(document).ready(function(){var e={formatNoMatches:devvn_array.formatNoMatches},t=loading_shipping=!1,s=o("#billing_city_field"),d=o("#billing_address_2_field"),c=o("#shipping_city_field"),l=o("#shipping_address_2_field");o("#billing_state").select2(e),o("#billing_city").select2(e),o("#billing_address_2").select2(e),o("body #billing_state").on("change select2:select select2-selecting",function(n){o("#billing_city option").val("");var a=n.val;a||(a=o("#billing_state option:selected").val()),a&&!t&&(t=!0,o.ajax({type:"post",dataType:"json",url:devvn_array.admin_ajax,data:{action:"load_diagioihanhchinh",matp:a},context:this,beforeSend:function(){s.addClass("devvn_loading"),d.addClass("devvn_loading")},success:function(n){if(t=!1,o("#billing_city,#billing_address_2").html("").select2(),n.success){var a=n.data,i=new Option("","");o("#billing_city").append(i),o.each(a,function(n,a){var i=new Option(a.name,a.maqh);o("#billing_city").append(i)})}s.removeClass("devvn_loading"),d.removeClass("devvn_loading")}}))}),0<o("#billing_address_2").length&&o("#billing_city").on("change select2-selecting",function(n){var a=n.val;a||(a=o("#billing_city option:selected").val()),a&&o.ajax({type:"post",dataType:"json",url:devvn_array.admin_ajax,data:{action:"load_diagioihanhchinh",maqh:a},context:this,beforeSend:function(){d.addClass("devvn_loading")},success:function(n){if(o("#billing_address_2").html("").select2(e),n.success){var a=n.data,i=new Option("","");o("#billing_address_2").append(i),o.each(a,function(n,a){var i=new Option(a.name,a.xaid);o("#billing_address_2").append(i)})}d.removeClass("devvn_loading")}})}),o("#shipping_state").select2(e),o("#shipping_city").select2(e),o("#shipping_address_2").select2(e),o("body #shipping_state").on("change select2:select select2-selecting",function(n){o("#shipping_city option").val("");var a=n.val;a||(a=o("#shipping_state option:selected").val()),a&&!loading_shipping&&(loading_shipping=!0,o.ajax({type:"post",dataType:"json",url:devvn_array.admin_ajax,data:{action:"load_diagioihanhchinh",matp:a},context:this,beforeSend:function(){c.addClass("devvn_loading"),l.addClass("devvn_loading")},success:function(n){if(loading_shipping=!1,o("#shipping_city,#shipping_address_2").html("").select2(),n.success){var a=n.data,i=new Option("","");o("#shipping_city").append(i),o.each(a,function(n,a){var i=new Option(a.name,a.maqh);o("#shipping_city").append(i)})}c.removeClass("devvn_loading"),l.removeClass("devvn_loading")}}))}),0<o("#shipping_address_2").length&&o("#shipping_city").on("change select2-selecting",function(n){var a=n.val;a||(a=o("#shipping_city option:selected").val()),a&&o.ajax({type:"post",dataType:"json",url:devvn_array.admin_ajax,data:{action:"load_diagioihanhchinh",maqh:a},context:this,beforeSend:function(){l.addClass("devvn_loading")},success:function(n){if(o("#shipping_address_2").html("").select2(e),n.success){var a=n.data,i=new Option("","");o("#shipping_address_2").append(i),o.each(a,function(n,a){var i=new Option(a.name,a.xaid);o("#shipping_address_2").append(i)})}l.removeClass("devvn_loading")}})}),0<o("#calc_shipping_city_field").length&&o(document.body).bind("country_to_state_changed updated_wc_div",function(){var e=o("#calc_shipping_city_field #calc_shipping_city");e.val(),o("#calc_shipping_state").val();e.select2();var t=!1,n=function(n){n&&!t&&o.ajax({type:"post",dataType:"json",url:devvn_array.admin_ajax,data:{action:"load_diagioihanhchinh",matp:n},context:this,beforeSend:function(){t=!0},success:function(n){if(t=!1,n.success){var a=n.data,i=[];o.each(a,function(n,a){i.push({id:a.maqh,text:a.name})}),e.html("").select2({placeholder:"Chọn quận/huyện",data:i})}}})};o("body select.state_select:visible").each(function(){n(o(this).val()),o(this,"body").on("change select2:select",function(){n(o(this).val())})})}),o("body").on("change","input[name=payment_method]",function(){o("form.checkout").trigger("update_checkout")})})}(jQuery);