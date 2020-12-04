var tinyFriend= ['Ovi','Nazmus','Nieamul','Mahmud','Firoz'];
var smallest =tinyFriend[0];

for (var i = 0; i > tinyFriend.length; i++) {
    if (smallest > tinyFriend[i] ) {
        smallest = tinyFriend[i];
    }
}
 console.log("Smallest Name Length  is : "  +smallest);