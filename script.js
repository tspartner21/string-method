console.log("test");
const h1 = document.querySelector("h1");
h1.innerText = "Test";

const h2 = document.querySelector("h2");
const linkURL = "https://wwww.naver.com";
h2.innerHTML = `<a href=${linkURL}>naver</a>`;

const h3 = document.querySelector("h3");
const h3_text = h3.innerText;
//h3 문자열을 0위치에서부터 50번재 위치까지 짜른뒤
//짜른 문자열을 다시 h3.innerText 프로퍼티에 대입해서 적용


//미션 - 조건문을 활용해서 h3에 들어가는 문자값이 50글자가 안되면
//해당 문자를 그대로 출력하고 50글자가 넘어가면
//50글자까지 자른뒤 그뒤에 ... 말줄임표를 붙이기

// console.log(h3.innerText.length);


// if (h3_text.length > 50) {
//   h3_Textcheck = h3_text.substring(0, 50);
//   h3.innerText = `${h3_Textcheck} ...`;
// }
// else {
//   h3.innerText = h3_text;
// }

// if (h3_text.length > 30) h3.innerText = h3_text.substring(0, 30) + "...";
// else h3.innerText = h3_text;
//삼항연산자로 변경
// h3.innerText = h3_text.length > 30 ? h3_text.substring(0, 30) + "..." : h3_text;

//미션 - 위의 기능을 재사용하기 편하도록 함수로 패키징
//shortenText('h3' , 30);

function shortenText(querySelector, maxlength) {
  //첫 번째 인수로 받은 문자값으로 DOM요소 선택
  const element = document.querySelector(querySelector);
  //해당 요소의 문자값 변수에 할당
  const elment_text = element.innerText;

  //해당 돔요소의 innerText 프로퍼티에 대입되는 우항을 삼항연수로 변경
  element.innerText = elment_text.length > maxlength ? elment_text.substring(0, maxlength) + "..." : elment_text;
}

shortenText('h1', 2);
shortenText('h2', 2);
shortenText('h3', 20);
