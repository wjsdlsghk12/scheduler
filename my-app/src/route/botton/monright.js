function monright() {
    var midtl = document.querySelector('#mid-top-left');//달력 현재 년월
    var month = document.querySelector('#month');//달력 현재 월
    var mright = document.querySelector('#month-right');//현재 월의 오른쪽 클릭
    var Numclear = function () {//월 변경시 일자 모두 삭제
        for (var w = 7; w < 49; w++) {
            document.querySelector(`.day${w}`).innerHTML = "";
        }
    }



    mright.addEventListener('click', event => {//현재 월의 오른쪽 클릭시 이벤트

        document.querySelectorAll('.mid-bottom div').forEach(a => { a.classList.remove("target") });//클릭효과 지우기
        document.querySelectorAll('.mid-bottom div').forEach(a => { a.classList.remove("amonth") });//전월효과 지우기
        document.querySelectorAll('.mid-bottom div').forEach(a => { a.classList.remove("bmonth") });//후월효과 지우기

        if (month.innerHTML == 12) {//오른쪽 클릭시 12월일경우 년도 변경
            month.innerHTML = 1;
            midtl.innerHTML = `${midtl.className - 1 + 2}년 ${month.innerHTML}월`;
            midtl.setAttribute('class', `${midtl.className - 1 + 2}`)
        }

        else {//현재월의 오른쪽 클릭시 이벤트(년도 변경 외에)
            month.innerHTML = month.innerHTML - 1 + 2;
            midtl.innerHTML = `${midtl.className}년${month.innerHTML}월`
        }

        var startNum = new Date(`${midtl.className}`, `${month.innerHTML - 1}`, 1).getDay();//오른쪽클릭 기준월 첫날 요일
        var endNum = new Date(`${midtl.className}`, `${month.innerHTML}`, 0).getDate();//오른쪽클릭 기준월 막날
        var endweek = new Date(`${midtl.className}`, `${month.innerHTML}`, 0).getDay();//오/기/막 요일
        Numclear();

        for (var i = 0; i < 49; i++) {//오른쪽 클릭시 공통 이벤트            

            if (i < startNum) {//오른쪽 클릭시 전월 일자 구현
                var bmonth = document.querySelector(`.day${i + 7}`)
                bmonth.insertAdjacentHTML('beforeend',
                    `${new Date(`${midtl.className}`, `${month.innerHTML - 1}`, -startNum + 1).getDate() + i}`
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
                    `${new Date(`${midtl.className}`, `${month.innerHTML - 1}`, i - startNum + 1).getDate()}`
                )
                amonth.classList.add('amonth');
            }
        }


    });
}

export default monright;