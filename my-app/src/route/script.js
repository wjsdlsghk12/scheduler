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




function Sss() {

    for (var day = 0; day < 49; day++) {    //49칸 만들기 및 요일 맨위에 놓기
        if (day < 7) {
            calendar.insertAdjacentHTML('beforeend', `<div class="day${day}">${dayName[day]}</div>`)
        }
        else {
            calendar.insertAdjacentHTML('beforeend', `<div class="day${day}"></day>`);
        }
    }

    midtl.setAttribute('class', `${date.getFullYear()}`);//달력 현재 년월의 클래스 년도로 지정
    midtl.insertAdjacentHTML('beforeend', `${date.getFullYear()}년${date.getMonth() + 1}월`);//선택한 년월
    month.insertAdjacentHTML('beforeend', `${date.getMonth() + 1}`);//선택한 월

    for (var i = 0; i < 49; i++) {//현재시점 달력 숫자 구현    

        if (i < startNum) {//현재시점 전월 일자 구현
            var bmonth = document.querySelector(`.day${i + 7}`)
            bmonth.insertAdjacentHTML('beforeend',
                `${new Date(`${date.getFullYear()}`, `${date.getMonth()}`, -i).getDate()}`
            );
            bmonth.classList.add('bmonth');
        }

        else if (i < endNum + startNum) {//현재시점 현월 숫자구현
            var dayNum = document.querySelector(`.day${i + 7}`);
            dayNum.insertAdjacentHTML('beforeend', `${i - startNum + 1}`);

        }

        else if (i < 42) {//현재시점 다음월 일자 구현

            var amonth = document.querySelector(`.day${i + 7}`);
            amonth.insertAdjacentHTML('beforeend',
                `${new Date(`${date.getFullYear()}`, `${date.getMonth()}`, i).getDate()}`
            )
            amonth.classList.add('amonth');
        }

    }

    document.querySelector(`.day${date.getDate() + startNum + 6}`).classList.add("target");//홈페이지 진입시 오늘 설정


}


export default Sss;


