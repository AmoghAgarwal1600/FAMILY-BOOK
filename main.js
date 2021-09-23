var images = ["https://clipartstation.com/wp-content/uploads/2017/11/joint-family-clipart-4.jpg",
"https://tse3.explicit.bing.net/th?id=OIP.ITYNjgC2KEa05NFeaPrZxAHaLD&pid=Api&P=0&w=300&h=300",
"https://i.pinimg.com/originals/7e/cf/16/7ecf1629515f7cbf656b6d9508d3f0a3.jpg",
"http://cdn.shopify.com/s/files/1/2068/3659/files/FatherTimeBread_FelixBust.png?v=1510449596",
"https://www.nicepng.com/png/detail/89-892939_mom-cartoon-clipart-mom-animated.png",
"https://webstockreview.net/images/uncle-clipart-15.jpg","https://tse4.mm.bing.net/th?id=OIP.RBWx_WtE29ndbLLNpAFZtQHaHa&pid=Api&P=0&w=300&h=300",
"https://webstockreview.net/images/man-clipart-gujarati-2.png","https://tse2.mm.bing.net/th?id=OIP.m8E_MJQtR76tKBJAC64TzwHaK-&pid=Api&P=0&w=300&h=300",
"https://www.clipartkey.com/mpngs/m/63-636927_sister-clip-art-curly-haired-girl-animated.png","https://tse1.mm.bing.net/th?id=OIP.IOvDVCsKYp-25UjmWrhQ-QHaFq&pid=Api&P=0&w=214&h=164",
"https://tse3.mm.bing.net/th?id=OIP.TCFvkSkFbF6VU3r9KKUUDgHaLI&pid=Api&P=0&w=300&h=300"];



var names = ["family book","DEEPAK AGARWAL","ANJU AGARWAL","SACHIN AGARWAL","PRIYANKA AGARWAL","NAVEEN AGARWAL","TANVI AGARWAL","SHUBHAM AGARWAL","RUCHI AGARWAL","AAROHI AGARWAL","SAHERSH AGARWAL","AMOGH AGARWAL"];
var i=0;
function update(){
    i++;
    var family_members_number=11;
    if(i>family_members_number){
        i=0;
    }
    var updateimage=images[i];
    var updatename=names[i];
    document.getElementById("family_member_image").src=updateimage;
    document.getElementById("family_member_name").innerHTML=updatename;
}