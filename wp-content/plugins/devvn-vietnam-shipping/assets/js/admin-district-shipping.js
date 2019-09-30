!function(a,e,t,o){var n=t.template("district-rate-box-row-template"),i=a("#flat_rate_boxes"),s=i.find("tbody.flat_rate_boxes"),c={init:function(){i.on("click","a.add-box",this.onAddRate).on("click","a.remove",this.onRemoveRate);var e=s.data("boxes");a(e).each(function(t){var i=s.find(".flat_rate_box").length;s.append(n({box:e[t],index:i}))}),s.sortable({items:"tr",cursor:"move",axis:"y",handle:"td.sort_dwas_td",scrollSensitivity:40,helper:function(t,i){return i.children().each(function(){a(this).width(a(this).width())}),i.css("left","0"),i},start:function(t,i){i.item.css("background-color","#f6f6f6")},stop:function(t,i){i.item.removeAttr("style"),c.reindexRows()}})},onAddRate:function(t){t.preventDefault();var i=s,e=i.find(".flat_rate_box").length;i.append(n({box:{box_id:"",box_district:"",box_cost:"",box_title:""},index:e})),a(".chosen_select").select2()},onRemoveRate:function(t){if(t.preventDefault(),confirm(e.i18n.delete_rates)){var n=[];s.find("tr td.check-column input:checked").each(function(t,i){var e=a(i).closest("tr.flat_rate_box").find(".box_id").val();n.push(e),a(i).closest("tr.flat_rate_box").addClass("deleting")});var i={action:"woocommerce_district_rate_box_delete",box_id:n,security:e.delete_box_nonce};a.post(o,i,function(t){a("tr.deleting").fadeOut("300",function(){a(this).remove()})})}},reindexRows:function(){var n=0;s.find("tr").each(function(t,i){a("input.text, input.checkbox, select.select",i).each(function(t,i){var e=a(i);e.attr("name",e.attr("name").replace(/\[([^[]*)\]/,"["+n+"]"))}),a("input.input_district_condition",i).each(function(t,i){var e=a(i);e.attr("name",e.attr("name").replace(/\[([^[]*)\]/,"["+n+"]"))}),n++})}};c.init(),a(document).ready(function(){a(".shipping_advance").on("change",function(){var t=a(this).parents(".district_shipping_advance").find(".dwas_price_list");t.hasClass("dwas_hidden")&&a(this).is(":checked")?t.removeClass("dwas_hidden").addClass("dwas_show"):t.addClass("dwas_hidden").removeClass("dwas_show")}),a(".shipping_advance_w").on("change",function(){var t=a(this).parents(".district_shipping_advance_weight").find(".dwas_price_list");t.hasClass("dwas_hidden")&&a(this).is(":checked")?t.removeClass("dwas_hidden").addClass("dwas_show"):t.addClass("dwas_hidden").removeClass("dwas_show")}),a(".dwas_add_condition").on("click",function(){var t=a(this).parents(".district_shipping_advance"),i=t.find(".dwas_price_list_tr").eq(1).clone();i.find("input").val("").attr("value",""),a(".dwas_price_list_box",t).append(i);var n=-1;return a(".dwas_price_list_box .dwas_price_list_tr",t).each(function(t,i){a("input.input_district_condition",i).each(function(t,i){var e=a(i);e.attr("name",e.attr("name").replace(/\[dk_([^[]*)\]/,"[dk_"+n+"]"))}),n++}),!1}),a(".dwas_delete_condition").on("click",function(){var t=a(this).parents(".dwas_price_list_tr"),i=a(this).parents(".dwas_price_list_box");return 2<a(".dwas_price_list_tr",i).length&&t.fadeOut(400,function(){a(this).remove();var n=-1;a(".dwas_price_list_tr",i).each(function(t,i){a("input.input_district_condition",i).each(function(t,i){var e=a(i);e.attr("name",e.attr("name").replace(/\[dk_([^[]*)\]/,"[dk_"+n+"]"))}),n++})}),!1}),0<a("#woocommerce_devvn_district_zone_shipping_all_price_condition").length&&(a("#woocommerce_devvn_district_zone_shipping_all_price_condition").closest("tr").css("display","none"),a("body").on("click",".dwas_save_condition, .all_condition_district > label",function(){var i=!1,t=a("#mainform").serialize();i||a.ajax({type:"post",dataType:"json",url:o,data:{action:"woocommerce_district_rate_array_to_serialize",data_form:t},context:this,beforeSend:function(){i=!0,a(".district_shipping_advance.all_condition_district").addClass("loading")},success:function(t){t.success&&a("#woocommerce_devvn_district_zone_shipping_all_price_condition").val(t.data),a(".district_shipping_advance.all_condition_district").removeClass("loading"),i=!1}})})),0<a("#woocommerce_devvn_district_zone_shipping_all_price_condition_w").length&&(a("#woocommerce_devvn_district_zone_shipping_all_price_condition_w").closest("tr").css("display","none"),a("body").on("click",".dwas_save_condition_w, .all_condition_district_w > label",function(){var i=!1,t=a("#mainform").serialize();i||a.ajax({type:"post",dataType:"json",url:o,data:{action:"woocommerce_district_rate_array_to_serialize_weight",data_form:t},context:this,beforeSend:function(){i=!0,a(".district_shipping_advance.all_condition_district_w").addClass("loading")},success:function(t){t.success&&a("#woocommerce_devvn_district_zone_shipping_all_price_condition_w").val(t.data),a(".district_shipping_advance.all_condition_district_w").removeClass("loading"),i=!1}})}))})}(jQuery,woocommerce_district_shipping_rate_rows,wp,ajaxurl);