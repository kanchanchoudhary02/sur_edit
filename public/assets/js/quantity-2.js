 /**=====================
     Quantity 2 js
==========================**/
 $(".addcart-button").click(function () {
     $(this).next().addClass("open");
     $(".add-to-cart-box .qty-input").val('1');
 });

 $('.add-to-cart-box').on('click', function () {
     var $qty = $(this).siblings(".qty-input");
     var currentVal = parseInt($qty.val());
     if (!isNaN(currentVal)) {
         $qty.val(currentVal + 1);
     }
 });

 $('.qty-left-minus').on('click', function () {
     var $qty = $(this).siblings(".qty-input");
     var _val = $($qty).val();
     if (_val == '1') {
         var _removeCls = $(this).parents('.cart_qty');
         $(_removeCls).removeClass("open");
     }
     var currentVal = parseInt($qty.val());
     if (!isNaN(currentVal) && currentVal > 0) {
         $qty.val(currentVal - 1);  
		var newval = currentVal - 1; 
		var rowid = $(this).data("field");	 
		$.get("home/updateItemQty/", {rowid:rowid, qty:newval}, function(resp)
		{
			if(resp == 'ok')
			{
				location.reload();
			}
			else
			{
				// alert('Cart update failed, please try again.');
				location.reload();
			}
		});
     }
 });

 $('.qty-right-plus').click(function () {
     if ($(this).prev().val() < 9) {
		
        var oldval =  parseInt($(this).prev().val());
		var incr = 1;
		var newval = oldval + incr;
		$(this).prev().val(newval);
		var rowid = $(this).data("field");	 
		$.get("home/updateItemQty/", {rowid:rowid, qty:newval}, function(resp)
		{
			if(resp == 'ok')
			{
				location.reload();
			}
			else
			{
				// alert('Cart update failed, please try again.');
				location.reload();
			}
		});
	  
     }
 });