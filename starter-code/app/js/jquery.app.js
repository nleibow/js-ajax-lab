

var allCats = $.ajax({
  method: "GET",
  url: "https://ga-cat-rescue.herokuapp.com/api/cats",
}).done(function(cats){
	var catArr = jQuery.parseJSON(allCats.responseText);
	console.log(catArr);
	for (var i =0; i < catArr.length; i++) {
		var catList = document.getElementById("cats");
		console.log(catArr[i]);
		var catItem=document.createElement('li');
		console.log(catItem);
		catItem.innerHTML = catArr[i].name+" - "+catArr[i].note;
		catList.appendChild(catItem);

}
	return catArr;	
});


// var catName = $('#cat-name').val();
// var catNote = $('#cat-note').val();


// var updateCats = $.ajax({
//   method: "POST",
//   url: "https://ga-cat-rescue.herokuapp.com/api/cats",
//   data: '{"name": "catName","note":"catNote" }',
// })

$("form").submit(function() {
    var $catName = $("#cat-name").val();
    var $catNote = $("#cat-note").val();
    $.ajax({
            type: "POST",
            url: "https://ga-cat-rescue.herokuapp.com/api/cats",
            data: JSON.stringify({ 'name': $catName, 'note': $catNote }),
            dataType: "json"
        }).done(function(cats) {
            console.log(cats);
        });
})