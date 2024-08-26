
// document.querySelectorAll('.card_inner').forEach(function(item) {
//     if(item.querySelector('.not_work') === null){
//         item.addEventListener('click', function() {
//             document.querySelector('.not_work').classList.remove('not_work');
//             item.classList.add('transform-rotate');
//         });
//     }
// })

var card1 = document.getElementById('card1');
card1.classList.add('cardHover');

card1.addEventListener('click', function(){
    card1.classList.add('transform-rotate');
    card1.classList.remove('cardHover');

    var btn1 = document.getElementById('btn1');
    btn1.addEventListener('click', function(){
        var card2 = document.getElementById('card2');
        card2.classList.add('cardHover');
        card2.addEventListener('click', function(){
            card2.classList.add('transform-rotate');
            card2.classList.remove('cardHover');

            var btn2 = document.getElementById('btn2');
            btn2.addEventListener('click', function(){
                var card3 = document.getElementById('card3');
                card3.classList.add('cardHover');
                card3.addEventListener('click', function(){
                    card3.classList.add('transform-rotate');
                    card3.classList.remove('cardHover');

                    var btn3 = document.getElementById('btn3');
                    btn3.addEventListener('click', function(){
                        var card4 = document.getElementById('card4');
                        card4.classList.add('cardHover');
                        card4.addEventListener('click', function(){
                            card4.classList.add('transform-rotate');
                            card4.classList.remove('cardHover');

                            var btn4 = document.getElementById('btn4');
                            btn4.addEventListener('click', function(){
                                var card5 = document.getElementById('card5');
                                card5.classList.add('cardHover');
                                card5.addEventListener('click', function(){
                                    card5.classList.add('transform-rotate');
                                    card5.classList.remove('cardHover');

                                    var btn5 = document.getElementById('btn5');
                                    btn5.addEventListener('click', function(){
                                        var card6 = document.getElementById('card6');
                                        card6.classList.add('cardHover');
                                        card6.addEventListener('click', function(){
                                            card6.classList.add('transform-rotate');
                                            card6.classList.remove('cardHover');
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})


for(let i = 0; i < 6; i++){
    var span = document.getElementsByClassName('close')[i];
    span.onclick = function(){
        modal1.style.display = "none";
        modal2.style.display = "none";
        modal3.style.display = "none";
        modal4.style.display = "none";
        modal5.style.display = "none";
        modal6.style.display = "none";
    }
    
}
window.onclick = function(event){
    if(event.target ==  modal1 || event.target ==  modal2 || event.target ==  modal3 || event.target ==  modal4 || event.target ==  modal5 || event.target ==  modal6){
        modal1.style.display = "none";
        modal2.style.display = "none";
        modal3.style.display = "none";
        modal4.style.display = "none";
        modal5.style.display = "none";
        modal6.style.display = "none";
    }
}

var modal1 = document.getElementById('myModal1');
var openModel1 = document.getElementById('openModal1');
openModel1.onclick = function(){
    modal1.style.display = "block";
}


var modal2 = document.getElementById('myModal2');
var openModel2 = document.getElementById('openModal2');
openModel2.onclick = function(){
    modal2.style.display = "block";
}


var modal3 = document.getElementById('myModal3');
var openModel3 = document.getElementById('openModal3');
openModel3.onclick = function(){
    modal3.style.display = "block";
}


var modal4 = document.getElementById('myModal4');
var openModel4 = document.getElementById('openModal4');
openModel4.onclick = function(){
    modal4.style.display = "block";
}

var modal5 = document.getElementById('myModal5');
var openModel5 = document.getElementById('openModal5');
openModel5.onclick = function(){
    modal5.style.display = "block";
}


var modal6 = document.getElementById('myModal6');
var openModel6 = document.getElementById('openModal6');
openModel6.onclick = function(){
    modal6.style.display = "block";
}