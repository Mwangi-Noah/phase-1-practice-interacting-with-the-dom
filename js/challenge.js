let init = document.getElementById("counter");
zero = parseInt(init.innerText, 10);
timer = setInterval(callBack, 1000);
let likeCounter = 1;
let i = 0;
function callBack(){
    init.innerText = ++zero;
}
let minus = document.getElementById("minus");
let plus = document.getElementById("plus");
let heart = document.getElementById("heart");
let pause = document.getElementById("pause");
let submit = document.getElementById('submit');
let list = document.getElementById('list');
let form = document.getElementById('comment-form');
let commentInput = document.getElementById('comment-input')

callBack();

minus.addEventListener("click", 
function(){
    let init = document.getElementById("counter");
    zero = parseInt(init.innerText, 10);
    init.innerText = zero - 1
}
)

plus.addEventListener("click", 
function(){
    let init = document.getElementById("counter");
    zero = parseInt(init.innerText, 10);
    init.innerText = zero + 1
}
)

heart.addEventListener("click", 
function(){
    i = init.textContent;
     
    likes=document.querySelector(".likes");
    var likedItem = document.getElementById(`${i}`)
        if (likedItem) {
            likeCounter++
            likedItem.innerText = `${i} was liked ${likeCounter} times.`
        } else {
            let li = document.createElement('li');
            li.setAttribute('id', `${i}`);
            let text = document.createTextNode(`${i} was liked 1 time`)
            li.appendChild(text);
            likes.appendChild(li);
        }
    })
    form.addEventListener("submit", function(event){
        event.preventdefault();
        let comment = commentInput.value;
        addComment = function(){
            let p = document.createElement('p');
            let input = document.createTextNode(comment)
            p.appendChild(input);
            list.appendChild(p);
           
        }
        addComment;
        commentInput.value = "";
    })
pause.addEventListener("click", function(){
    if (pause.innerText == "pause"){
        clearInterval(timer);
        pause.innerText = "resume";
        plus.disabled = true;
        minus.disabled = true;
        heart.disabled = true;
        submit.disabled = true;
    } else {
        timer = setInterval(callBack, 1000);
        let i = init;
        pause.innerText = "pause";
        plus.disabled = false;
        minus.disabled = false;
        heart.disabled = false;
        submit.disabled = false;

    }
})
form.addEventListener("submit", function(event){
    event.preventdefault();
    let comment = commentInput.value;
    addComment = function(){
        let p = document.createElement('p');
        let input = document.createTextNode(comment)
        p.appendChild(input);
        list.appendChild(p);
       
    }
    addComment();
    commentInput.value = "";
})