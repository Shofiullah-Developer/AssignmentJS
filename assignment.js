
//The solution to the first problem is below
function kilometerToMeter(distanceInKilometer) {
    if (distanceInKilometer <= -1) {
        return "Please enter a positive number of Distances.";
    }
    else {
        return distanceInKilometer * 1000;
    }
}
var meter = kilometerToMeter(10);
console.log(meter);

//The solution to the second problem is below

function budgetCalculator(watchAmount, mobileAmount, laptopAmount) {
    if ((watchAmount && mobileAmount && laptopAmount) <= -1) {
        return "Please enter your budget product in a positive number.";
    }
    else {
        var watch = watchAmount * 50;
        var mobile = mobileAmount * 100;
        var laptop = laptopAmount * 500;
        var totalPrice = watch + mobile + laptop;
        return totalPrice;
    }

}
var result = budgetCalculator(6, 2, 5);
console.log(result);

//The solution to the third problem is below

function hotelCost(hotelStayTime) {
    var rent = 0;
    if (hotelStayTime <= 10) {
        rent = hotelStayTime * 100;
    }
    else if (hotelStayTime <= 20) {
        var firstTenDay = 10 * 100;
        var remainingDay = hotelStayTime - 10;
        var secondTenDay = remainingDay * 80;
        rent = firstTenDay + secondTenDay;
    }
    else {
        var firstTenDay = 10 * 100;
        var secondTenDay = 10 * 80;
        var remainingDay = hotelStayTime - 20;
        var thirdAllDay = remainingDay * 50;
        rent = firstTenDay + secondTenDay + thirdAllDay;
    }
    return rent;
}
var roomRent = hotelCost(9);
console.log(roomRent);

//The solution to the fourth problem is below

function megaFriend(array) {

    var breadth = 0;
    var longestName;

    for (var i = 0; i < array.length; i++) {
        if (array[i].length > breadth) {
            breadth = array[i].length;
            longestName = array[i];
        }
    }
    return longestName;
}
var FriendsName = ['Hridoy', 'Sazon', 'Mamun', 'shofiullah', 'juyel', 'Meherul'];
var result = megaFriend(FriendsName);
console.log(result);


