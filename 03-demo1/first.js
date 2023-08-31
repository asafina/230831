const $title = document.querySelector('title');
console.log($title.innerHTML);
console.log($title.textContent);

$title.innerHTML = 'hoge';

//getElementById: addEventListener が使える
//querySelector: 使えない
const $text1 = document.querySelector('text1');
const $text2 = document.getElementById('text2');

$text1.addEventListener('click', () =>{
    console.log($text2);
    $text2.style.display= "block";
});