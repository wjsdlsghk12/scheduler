function variable() {

    var date = new Date();//현재 날짜
    var dayName = ["일", "월", "화", "수", "목", "금", "토"];//요일배열
    var calendar = document.querySelector('.mid-bottom');//달력 클래스 지정
    var Numclear = function () {//월 변경시 일자 모두 삭제
        for (var w = 7; w < 49; w++) {
            document.querySelector(`.day${w}`).innerHTML = "";
        }
    }

    var midtl = document.querySelector('#mid-top-left');//달력 현재 년월
    var month = document.querySelector('#month');//달력 현재 월
    var mleft = document.querySelector('#month-left');//현재 월의 왼쪽클릭
    var mright = document.querySelector('#month-right');//현재 월의 오른쪽 클릭
    var today = document.querySelector('#today')//'오늘' 클릭

    var startNum = new Date(`${date.getFullYear()}`, `${date.getMonth()}`, 1).getDay();//현재 년월 1일 시작 요일값(0=일,1=월...)
    var endNum = new Date(`${date.getFullYear()}`, `${date.getMonth() + 1}`, 0).getDate();//현재 년월 마지막일(31,30,28,29)
    var endweek = new Date(`${date.getFullYear()}`, `${date.getMonth() + 1}`, 0).getDay();//현재 년월 마지막일 요일값
}

export default variable;