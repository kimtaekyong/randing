let linkTest = "연결확인";

console.log(linkTest);

document.addEventListener("DOMContentLoaded", function () {
  // tablet_contents 요소를 선택
  var tabletContents = document.getElementsByClassName("tablet_contents")[0];
  var contents = tabletContents.getElementsByClassName("content");

  for (var i = 0; i < contents.length; i++) {
    var content = contents[i];

    // "content" 클래스의 요소 개수를 확인
    if (contents.length <= 2) {
      // 요소 개수가 2개 이하일 때 #content-standard의 border-right 스타일을 none으로 설정
      content.style.borderRight = "none";
    } else {
      // 요소 개수가 3개 이상일 때 #content-standard의 border-right 스타일을 block으로 설정
      content.style.borderRight = "block";
    }
  }

  console.log(contents);
});
