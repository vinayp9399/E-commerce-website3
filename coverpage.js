count = 0;
function muimagegalary(){
    imageContentarray =['Welcome','Ok go there','Its different']
    imageArray=['https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/home-landing-web/Homepage_Banners_1920x655_38aEuqC.jpg?format=webp&w=1300&dpr=1.5',
'https://blog.elverys.ie/app/uploads/2018/06/NIKE-BANNERS-1920X696-2-1.jpg',
'https://storage.sg.content-cdn.io/in-resources/7f703506-689d-4b4e-b482-c32d60769d33/Images/ProductImages/Source/Home%20Page%20Banner%20images/Home%20Banner%203-Earpods.jpeg']
    document.getElementById('imagegalary').src=imageArray[count];
    //document.getElementById('imagecontent').innerHTML = imageContentarray[count];
    if(count>=2){
        count = 0;
    }else{
    count++;
    }
}
muimagegalary();
setInterval(muimagegalary,3000);

