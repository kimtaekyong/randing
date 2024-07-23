/*서비스 탭 메뉴 리스트 */

document.addEventListener("DOMContentLoaded", () => {
  // 모든 탭 버튼과 컨텐츠 요소를 선택합니다.
  const tabs = document.querySelectorAll(".tab-button");
  const contents = document.querySelectorAll(".content");

  // 모든 탭 버튼과 컨텐츠에서 'active' 클래스를 제거하는 함수
  const deactivateAllTabsAndContents = () => {
    tabs.forEach((tab) => tab.classList.remove("active")); // 모든 탭 버튼의 'active' 클래스 제거
    contents.forEach((content) => content.classList.remove("active")); // 모든 컨텐츠의 'active' 클래스 제거
  };

  // 클릭된 탭 버튼과 해당하는 컨텐츠에 'active' 클래스를 추가하는 함수
  const activateTabAndContent = (tab) => {
    tab.classList.add("active"); // 클릭된 탭 버튼에 'active' 클래스 추가
    document.querySelector(`#content-${tab.id.split("-")[1]}`).classList.add("active"); // 클릭된 탭 버튼의 ID에서 해당 컨텐츠를 찾아 'active' 클래스 추가
  };

  // 탭 버튼이 클릭되었을 때 실행되는 이벤트 핸들러 함수
  const handleTabClick = (event) => {
    deactivateAllTabsAndContents(); // 모든 탭과 컨텐츠를 비활성화
    activateTabAndContent(event.target); // 클릭된 탭과 해당하는 컨텐츠를 활성화
  };

  // 각 탭 버튼에 클릭 이벤트 리스너를 추가
  tabs.forEach((tab) => tab.addEventListener("click", handleTabClick));
});

/*장례식장리스트 탭 메뉴 리스트 */
document.addEventListener("DOMContentLoaded", function () {
  const tabLinks = document.querySelectorAll(".list_tab_btn");
  const tabContents = document.querySelectorAll(".item");

  tabLinks.forEach((link) => {
    link.addEventListener("click", function () {
      const tabId = this.getAttribute("data-tab");

      tabLinks.forEach((link) => link.classList.remove("active"));
      tabContents.forEach((content) => content.classList.remove("active"));

      this.classList.add("active");
      document.getElementById(`tab-${tabId}`).classList.add("active");
    });
  });

  // Activate the first tab by default
  tabLinks[0].click();
});
