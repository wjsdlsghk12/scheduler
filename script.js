var date = new Date();//현재 날짜
var dayName = ["일", "월", "화", "수", "목", "금", "토"];//요일배열
var calendar = document.querySelector('.mid-bottom');//달력 클래스 지정
var Numclear = function () {//월 변경시 일자 모두 삭제
    for (w = 7; w < 49; w++) {
        document.querySelector(`.day${w}`).innerHTML = "";
    }
}


for (day = 0; day < 49; day++) {    //49칸 만들기 및 요일 맨위에 놓기
    if (day < 7) {
        calendar.insertAdjacentHTML('beforeend', `<div class="day${day}">${dayName[day]}</div>`)
    }
    else {
        calendar.insertAdjacentHTML('beforeend', `<div class="day${day}"></day>`);
    }
}

var midtl = document.querySelector('#mid-top-left');//달력 현재 년월
var midtc = document.querySelector('#mid-top-center');//달력 현재 월


midtl.setAttribute('class', `${date.getFullYear()}`);//달력 현재 년월의 클래스 년도로 지정
midtl.insertAdjacentHTML('beforeend', `${date.getFullYear()}년${date.getMonth() + 1}월`);//선택한 년월
midtc.insertAdjacentHTML('beforeend', `${date.getMonth() + 1}`);//선택한 월

var startNum = new Date(`${date.getFullYear()}`, `${date.getMonth()}`, 1).getDay();//현재 년월 1일 시작 요일값(0=일,1=월...)
var endNum = new Date(`${date.getFullYear()}`, `${date.getMonth() + 1}`, 0).getDate();//현재 년월 마지막일(31,30,28,29)
var endweek = new Date(`${date.getFullYear()}`, `${date.getMonth() + 1}`, 0).getDay();//현재 년월 마지막일 요일값

for (i = 0; i < 49; i++) {//현재시점 달력 숫자 구현    

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

mleft = document.querySelector('#month-left');//현재 월의 왼쪽클릭
mright = document.querySelector('#month-right');//현재 월의 오른쪽 클릭

mleft.addEventListener('click', event => {//현재 월의 왼쪽 클릭시 이벤트

    document.querySelectorAll('.mid-bottom div').forEach(a => { a.classList.remove("target") });//클릭효과 지우기
    document.querySelectorAll('.mid-bottom div').forEach(a => { a.classList.remove("amonth") });//전월효과 지우기
    document.querySelectorAll('.mid-bottom div').forEach(a => { a.classList.remove("bmonth") });//후월효과 지우기

    if (midtc.innerHTML == 1) {//왼쪽 클릭시 1월일경우 년도/월 변경
        midtc.innerHTML = 12;
        midtl.innerHTML = `${midtl.className - 1}년 ${midtc.innerHTML}월`;
        midtl.setAttribute('class', `${midtl.className - 1}`);
    }
    else {//현재월의 왼쪽 클릭시 년도 변경 외에 월변경
        midtc.innerHTML = midtc.innerHTML - 1;
        midtl.innerHTML = `${document.querySelector('#mid-top-left').className}년${midtc.innerHTML}월`
    }
    var startNum = new Date(`${midtl.className}`, `${midtc.innerHTML - 1}`, 1).getDay();//왼쪽클릭 기준월 첫날 요일
    var endNum = new Date(`${document.querySelector('#mid-top-left').className}`, `${midtc.innerHTML}`, 0).getDate();//왼쪽클릭 기준월 막날
    var endweek = new Date(`${document.querySelector('#mid-top-left').className}`, `${midtc.innerHTML}`, 0).getDay();//왼/기/막 요일
    Numclear();

    for (i = 0; i < 49; i++) {//왼쪽 클릭시 공통 이벤트            

        if (i < startNum) {//왼쪽 클릭시 전월 일자 구현
            var bmonth = document.querySelector(`.day${i + 7}`)
            bmonth.insertAdjacentHTML('beforeend',
                `${new Date(`${midtl.className}`, `${midtc.innerHTML - 1}`, -startNum + 1).getDate() + i}`
            );
            bmonth.classList.add('bmonth');
        }

        else if (i < endNum + startNum) {//왼쪽 클릭시 현월 일자 구현
            var dayNum = document.querySelector(`.day${i + 7}`);
            dayNum.insertAdjacentHTML('beforeend', `${i - startNum + 1}`);

        }

        else if (i < 42) {//왼쪽 클릭시 다음월 일자 구현


            var amonth = document.querySelector(`.day${i + 7}`);
            amonth.insertAdjacentHTML('beforeend',
                `${new Date(`${midtl.className}`, `${midtc.innerHTML - 1}`, i - startNum + 1).getDate()}`
            )
            amonth.classList.add('amonth');
        }
    }
});


mright.addEventListener('click', event => {//현재 월의 오른쪽 클릭시 이벤트

    document.querySelectorAll('.mid-bottom div').forEach(a => { a.classList.remove("target") });//클릭효과 지우기
    document.querySelectorAll('.mid-bottom div').forEach(a => { a.classList.remove("amonth") });//전월효과 지우기
    document.querySelectorAll('.mid-bottom div').forEach(a => { a.classList.remove("bmonth") });//후월효과 지우기

    if (midtc.innerHTML == 12) {//오른쪽 클릭시 12월일경우 년도 변경
        midtc.innerHTML = 1;
        midtl.innerHTML = `${midtl.className - 1 + 2}년 ${midtc.innerHTML}월`;
        midtl.setAttribute('class', `${midtl.className - 1 + 2}`)
    }

    else {//현재월의 오른쪽 클릭시 이벤트(년도 변경 외에)
        midtc.innerHTML = midtc.innerHTML - 1 + 2;
        midtl.innerHTML = `${midtl.className}년${midtc.innerHTML}월`
    }

    var startNum = new Date(`${midtl.className}`, `${midtc.innerHTML - 1}`, 1).getDay();//오른쪽클릭 기준월 첫날 요일
    var endNum = new Date(`${midtl.className}`, `${midtc.innerHTML}`, 0).getDate();//오른쪽클릭 기준월 막날
    var endweek = new Date(`${midtl.className}`, `${midtc.innerHTML}`, 0).getDay();//오/기/막 요일
    Numclear();

    for (i = 0; i < 49; i++) {//오른쪽 클릭시 공통 이벤트            

        if (i < startNum) {//오른쪽 클릭시 전월 일자 구현
            var bmonth = document.querySelector(`.day${i + 7}`)
            bmonth.insertAdjacentHTML('beforeend',
                `${new Date(`${midtl.className}`, `${midtc.innerHTML - 1}`, -startNum + 1).getDate() + i}`
            );
            bmonth.classList.add('bmonth');
        }

        else if (i < endNum + startNum) {//오른쪽 클릭시 현월 일자 구현
            var dayNum = document.querySelector(`.day${i + 7}`);
            dayNum.insertAdjacentHTML('beforeend', `${i - startNum + 1}`);

        }

        else if (i < 42) {//오른쪽 클릭시 다음월 일자 구현


            var amonth = document.querySelector(`.day${i + 7}`);
            amonth.insertAdjacentHTML('beforeend',
                `${new Date(`${midtl.className}`, `${midtc.innerHTML - 1}`, i - startNum + 1).getDate()}`
            )
            amonth.classList.add('amonth');
        }
    }


});




document.querySelector(`.day${date.getDate() + 7}`).classList.add("target");//홈페이지 진입시 오늘 설정


mtr = document.querySelector('#mid-top-right')
mtr.addEventListener('click', event => {//'오늘'클릭시 오늘로 설정
    midtl.innerHTML = `${date.getFullYear()}년${date.getMonth() + 1}월`;
    midtc.innerHTML = `${date.getMonth() + 1}`;
    document.querySelectorAll('.mid-bottom div').forEach(a => { a.classList.remove("target") });//클릭효과 지우기
    document.querySelectorAll('.mid-bottom div').forEach(a => { a.classList.remove("amonth") });//전월효과 지우기
    document.querySelectorAll('.mid-bottom div').forEach(a => { a.classList.remove("bmonth") });//후월효과 지우기
    Numclear();

    for (i = 0; i < 49; i++) {//현재시점 달력 숫자 구현    

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
    document.querySelector(`.day${date.getDate() + 7}`).classList.add("target");
}
);


document.querySelector('#menu').addEventListener('click', event => {//메뉴선택시 모달 등장
    document.querySelector('.lmodal').classList.remove('hidden');
    document.querySelector('.modal').classList.remove('hidden')
}
);
document.querySelector('.lmodal__overayout').addEventListener('click', event => {//메뉴 모달 삭제
    document.querySelector('.lmodal').classList.add('hidden');
    document.querySelector('.modal').classList.add('hidden');
}
);


document.querySelectorAll('.mid-bottom div').forEach(a =>    //날짜 클릭시 해당 날짜 색인 및 메모 리스트    
    a.addEventListener('click', event => {

        classNum = [];
        document.querySelectorAll('.mid-bottom div').forEach(b => classNum.push(b.className));

        if (classNum.indexOf(event.currentTarget.className) < 7) { }
        else if (classNum.indexOf(event.currentTarget.className) < new Date(`${midtl.className}`, `${midtc.innerHTML - 1}`, 1).getDay() + 7) { }
        else if (classNum.indexOf(event.currentTarget.className)  <
            new Date(`${midtl.className}`, `${midtc.innerHTML - 1}`, 1).getDay() + new Date(`${midtl.className}`, `${midtc.innerHTML}`, 0).getDate() + 7) {

            document.querySelectorAll('.mid-bottom div').forEach(a => { a.classList.remove("target") });
            event.currentTarget.classList.add("target");
            document.querySelector('.modal').classList.remove('hidden');
            document.querySelector('.cmodal').classList.remove('hidden');            
            document.querySelectorAll('#plus').forEach(a => { a.remove() });
            event.currentTarget.insertAdjacentHTML('beforeend', '<span id="plus">88</span>');
        }
    })
);


document.querySelector('.cmodal__overayout').addEventListener('click', event => {//날짜 클릭시 메모모달 삭제
    document.querySelector('.cmodal').classList.add('hidden');
    document.querySelector('.modal').classList.add('hidden');
});
