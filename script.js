//Challange 1: Your agein days.

function ageInDays(){
 var birthYear = prompt("What Year You Are Born... ?");
 var presentYear =  prompt("What Is Present Year.... ?")
 var ageInDayss = (presentYear - birthYear) * 365;
 var h1 = document.createElement('h1');
 var result = document.createTextNode('You are '+ageInDayss+" days old.");
 h1.setAttribute('id', 'ageInDays');
 h1.appendChild(result);
 document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
    document.getElementById('ageInDays').remove();
}