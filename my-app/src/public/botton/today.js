today.addEventListener('click', event => {//'오늘'클릭시 오늘로 설정
    midtl.innerHTML = `${date.getFullYear()}년${date.getMonth() + 1}월`;
    month.innerHTML = `${date.getMonth() + 1}`;
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
    document.querySelector(`.day${date.getDate()+startNum + 6}`).classList.add("target");
}
);