function openGift(){

    document.getElementById("home").style.display = "none";

    document.getElementById("letter").style.display = "block";


    document.getElementById("message").innerText = 
`There are many teachers,
but only a few become Gurus -
the ones who truly change lives.

You are one of them for me.

On this Guru Purnima,
I just want to say thank you
for everything you have done for us.

I will always be grateful.

Ma'am, your words, values, and
guidance have stayed with me
long after the class ended.

We may have arrived late,
or acted silly at times,
but we never stopped valuing
your presence and your teachings.

You've not only taught us lessons from books,
but also life lessons we'll carry forever.

Happiest Guru Purnima dear Ma'am ❤️🥰😇✨`;



    setTimeout(function(){

        document.getElementById("gallery").style.display="block";

    },1500);

}




function openImage(image){

    document.getElementById("popup").style.display="flex";

    document.getElementById("bigImage").src=image;

}




function closeImage(){

    document.getElementById("popup").style.display="none";

}




function playMusic(){

    let music = document.getElementById("music");

    music.play();

}