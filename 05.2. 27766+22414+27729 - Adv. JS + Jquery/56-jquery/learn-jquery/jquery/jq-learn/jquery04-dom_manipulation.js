const log = console.log;

// function func() {
//     throw Error("Not implemented yet!!!!");
// }

// get :   .attr(attributename)
// set:    .attr(attributename , value)
// remove: .removeAttr(attributename)
// function func() {
//     // get
//     let dirval =$("#p1").attr("dir");
//     console.log("get attrib: " , dirval);
    
//     // set
//     $("#p2").attr("dir" , "rtl");
//     console.log("set attrib: watch the yellow line!!!!");

//     // remove
//     $("#a1").removeAttr("href");
// }

// text : .text() ===> innerText
// function func() {
//     // get
//     var p1val = $("#p1").text();
//     log("single element: " , p1val);

//     var pval = $("p").text();
//     log("many elements: " , pval);

//     // set 
//     $("p").text("<u><i>total new content</i></u>")
// }

// html : .html() ===> innerHTML
// function func() {
//     // get
//     var p1val = $("#p1").html();
//     log("single element: " , p1val);

//     var pval = $("p").html();
//     log("many elements: " , pval);

//     // set 
//     $("p").html("<u><i>total new content</i></u>")
// }

// // val : for input elements
// function func() {
//     // get
//     let inputval = $("input").val();
//     log("prev value: " , inputval);
//     // set
//     $("input").val("New Value from JQuery!!!")
// }

// add/remove : .addClass .removeClass
// function func() {
//     $("#p1").addClass("c1");
//     $("#p2").removeClass("c1");
// }

// toggle
// function func() {
//     $("#p1").toggleClass("c1");
//     const classState = $("#p1").hasClass("c1");
//     $("#res").html(classState);
// }

// get .css(sttribute) -> value
// function func() {
//     const val = $("#p2").css("backgroundColor");
//     const objVal = $("#p2").css(["width","height","backgroundColor"]);

//     const str = '$("#p2").css("backgroundColor"): ' + val + "<br>" +
//                 '$("#p2").css(["width","height","backgroundColor"]): ' +
//                 objVal.width + " " + objVal.height + " " + objVal.backgroundColor;

//     $("#res").html(str);
// }

// set : .css(attribute , value)
function func() {
    // single
    $("#p1").css("backgroundColor" , "orange");
    
    // many
    $("#p2").css(
        {
            backgroundColor: "red",
            color: "blue"
        }
    );
}


