var sandwich = $(".sandwich");
console.log(sandwich);

var ourSandwich = $("#cheesesandwich");
// console.log( ourSandwich.width() );
// console.log( ourSandwich.height() );
// console.log( sandwich.length )
// console.log( sandwich.toggleClass("cheese") );

// ourSandwich.addClass("food delicious");
// ourSandwich.removeClass("delicious");

var lettuce = $(".lettuce");

function lettuceClicked() {
//    console.log(this);
    var newHeight = $(this).height();
    console.log(newHeight);
    newHeight = newHeight + 20;
    $(this).height(newHeight);
}

lettuce.click(lettuceClicked);

lettuce.click(function() {
    $(this).animate(
        {
        height: "+=50"
    },
    1000
    );
    })


// lettuce.click(function {

// })