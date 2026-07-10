const yearElement = document.getElementById("year");

try {
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
} catch (error) {
  console.error("연도 정보를 갱신하는 데 실패했습니다.", error);
}
