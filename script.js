let cardtext = document.querySelector('.back')
var card = document.querySelector(".card");

function getRandomInt(min, max) {
     min = Math.ceil(min);
     max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
}

let cards_unsplited = 'Все загаданные желания и намеченные планы осуществятся;Не стоит пренебрегать чужим мнением. Рядом с Вами находятся люди, которые искренне хотят помочь;Пришло время заявить о себе, даже если это кому-то не понравится;Сейчас в Вашей жизни наступает переломный момент, от которого зависит будущее;Пришло время показать, кем же Вы являетесь на самом деле;На протяжении многих лет Вам будут сопутствовать счастье, здоровье, удача и благополучие;Впереди Вас ждет неожиданное получение денег, которое поправит Ваше пошатнувшееся материальное положение;Не огорчайтесь, если дела идут не так, как Вам бы этого хотелось, удача уже на пороге;Пора собирать чемоданы: Вас ждет путешествие в приятной компании;Ваши отношения с любимым человеком продлятся долго, если Вы не будете рассказывать о них незнакомым людям'
let cards = cards_unsplited.split(';')
//let eliminated = [] maybe

// где то тут splt и в список/ запушить проклятия

class Card{
    constructor() {
      
        this.cardid = getRandomInt(1,cards.length)

        this.text = cards[this.cardid]
  
    }
    
    display() {
          cardtext.innerHTML = this.text
          
          // eliminated.push(cards[this.cardid]) maybe
          delete cards[this.cardid]
          }                    
}


card.addEventListener('click',function() {

  anime({
    targets: card,
    scale: [{value: 1}, {value: 1.4}, {value: 1, delay: 250}],
    rotateY: {value: '+=180', delay: 200},
    easing: 'easeInOutSine',
    duration: 600,
    }
  )}) 
