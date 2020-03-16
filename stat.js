(function(){

    function reduce(array, combine, start){
        var current = start;
        for (var element of array) {
            current = combine(current, element);;
        }
        return current;
    }

    var max = function(date){
        return reduce(
            date,
            //a>b-->a
            function(a, b){
                return a > b.credit ? a : b.credit;
            },
            0)
    }
    //封装
    window.my = {"max": max};

})()

