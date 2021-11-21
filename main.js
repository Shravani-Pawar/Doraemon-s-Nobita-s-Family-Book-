var images = ["https://i.postimg.cc/MKdhy06Z/family.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy_r7cy03pkjDKAa_GAciajJssLdjGVt-6jA&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6EwaVbAY_JBJkfBW67jyzJCbL-phBGg3WXw&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStYr9t4RWhbalgJHgVMbCKOnuFQZsknXGKxoBti1cUPmauH8ETPQ4dpsfcCm9AIyAID8k&usqp=CAU",
"https://drawiteazy.files.wordpress.com/2016/06/tamako.jpg?w=320",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0v33gQmYJOJHfjc7PMsWMF_fSwtsfxSNImegzK4ADyS05D3OYXXSijnEL7UwdEjCG120&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG75dsRBtnBpf1Di99RixPffaYo6zTRTJAsa2GTFDB0TJyKkxQr7zRnZ2vD0H0x_FyRgs&usqp=CAU",];
var names = ["Family Book","Nobita", "Doraemon", "Dad", "Mom", "Nobita's Freinds","The Happy World of Nobita"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 6
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i];
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
