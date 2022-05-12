---
title: Home
menu:
  header:
    weight: 1
---
<div id="words">
</div>
<script src="https://cdn.jsdelivr.net/npm/vara@1.4.0/lib/vara.min.js" type="text/javascript"></script>
<script>
	new Vara("#words","js/a.json",[
{
	text:"Life is a Rougelike!", // String, text to be shown
	fontSize:64, // Number, size of the text
	strokeWidth:3, // Width / Thickness of the stroke
	color:"black", // Color of the text
	id:"", // String or integer, for if animations are called manually or when using the get() method. Default is the index of the object.
	duration:3000, // Number, Duration of the animation in milliseconds
	textAlign:"center", // String, text align, accepted values are left,center,right
	x:0, // Number, x coordinate of the text
	y:5, // Number, y coordinate of the text
	fromCurrentPosition:{ // Whether the x or y coordinate should be from its calculated position, ie the position if x or y coordinates were not applied
		x:true, // Boolean
		y:true, // Boolean
	},
	autoAnimation:true, // Boolean, Whether to animate the text automatically
	queued:true, // Boolean, Whether the animation should be in a queue
    delay:200,     // Delay before the animation starts in milliseconds
    /* Letter spacing can be a number or an object, if number, the spacing will be applied to every character.
    If object, each letter can be assigned a different spacing as follows,
    letterSpacing: {
        a: 4,
        j: -6,
        global: -1
    }
    The global property is used to set spacing of all other characters
    */
	letterSpacing:0
}],{
	// The options given below will be applicable to every text created,
	// however they will not override the options set above.
	// They will work as secondary options.
	fontSize:24, // Number, size of the text
	strokeWidth:.5, // Width / Thickness of the stroke
	color:"black", // Color of the text
	duration:2000, // Number, Duration of the animation in milliseconds
	textAlign:"left", // String, text align, accepted values are left,center,right
	autoAnimation:true, // Boolean, Whether to animate the text automatically
	queued:true, // Boolean, Whether the animation should be in a queue
	letterSpacing:0
})
</script>