buttons = [document.getElementById("plus"), document.getElementById("minus"), document.getElementById("heart"), document.getElementById("submit")]
//counter
let counter = 0;
let counterElement = document.getElementById("counter");

function incrementSeconds() {
  counter += 1;
  counterElement.innerText = `${counter}`;
}

let timer = setInterval(incrementSeconds, 1000);

// Minus
document.getElementById("minus").addEventListener("click", function(event) {
  counterElement.innerText = `${counter -= 1}`;
  event.preventDefault();
});
//Plus
document.getElementById("plus").addEventListener("click", function(event) {
  counterElement.innerText = `${counter += 1}`;
  event.preventDefault();
});
//Comments
document.getElementById("comment-form").addEventListener('submit', function(event) {
  let value = document.getElementById('comment-input').value;
  p_tag = document.createElement('p');
  p_tag.innerText = value;
  document.getElementById("list").appendChild(p_tag);
  document.getElementById('comment-input').value = '';
  event.preventDefault();
});
//like
document.getElementById("heart").addEventListener('click', function(event) {
  let likes = document.querySelector('.likes');
  if (document.getElementById(counter) === null) {
    let new_li_tag = document.createElement('li');
    new_li_tag.setAttribute("id", `${counter}`);
    likes.appendChild(new_li_tag);
    document.getElementById(counter).innerHTML = counter + ' has been liked ';
    let new_span_tag = document.createElement('span');
    new_li_tag.appendChild(new_span_tag);
    new_li_tag.children[0].innerHTML = 1;
    document.getElementById(counter).innerHTML += ' times';
  } else {
    let li_tag = document.getElementById(counter);
    li_tag.children[0].innerHTML ++ ;
  }
  event.preventDefault();
});
//pause

document.getElementById('pause').addEventListener('click', function (event) {
  for(let i = 0; i < buttons.length; i++) {
    if (buttons[i].disabled === false) {
      buttons[i].disabled = true;
      pauseCounter()
    } else {
      buttons[i].disabled = false;
    }
  }
  if (document.getElementById("plus").disabled === false) {
    resumeCounter()
  }
  event.preventDefault();
});


function pauseCounter() {
  document.getElementById('pause').innerHTML = 'resume'
  clearInterval(timer);
}

function resumeCounter() {
  document.getElementById('pause').innerHTML = 'pause'
  timer = setInterval(incrementSeconds, 1000);
}
