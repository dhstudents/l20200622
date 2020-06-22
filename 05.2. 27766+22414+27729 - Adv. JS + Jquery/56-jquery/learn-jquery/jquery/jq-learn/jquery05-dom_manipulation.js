// use div: in index.html
//  <div id="jq02-selectors" >

$("ul").text()
$("ul").html()

$($("li")[0]).text()
$($("li")[1]).text()
$($("li")[2]).text()

$("li").text("big change")


// inputs
/*
<input type="text" value="First text box">
<br>
<input type="text" value="Second text box">
*/
$($("input")[0]).val()
$($("input")[1]).val()

$("input").val("111")

$("input").attr("type")
$("input").attr("type", "password")


// add elements
$("h1").before("<p>lala</p>")
$("h1").after("<p>lala</p>")
$(`<p>lala</p>`).prependTo("#listId")
$("li").wrapAll(`<p>lala</p>`)