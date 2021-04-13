

document.querySelectorAll('.mid-bottom div').forEach(a =>    //날짜 클릭시 해당 날짜 색인 및 메모 리스트    
    a.addEventListener('click', event => {

        classNum = [];
        document.querySelectorAll('.mid-bottom div').forEach(b => classNum.push(b.className));

        if (classNum.indexOf(event.currentTarget.className) < 7) { }
        else if (classNum.indexOf(event.currentTarget.className) < new Date(`${midtl.className}`, `${month.innerHTML - 1}`, 1).getDay() + 7) { }
        else if (classNum.indexOf(event.currentTarget.className)  <
            new Date(`${midtl.className}`, `${month.innerHTML - 1}`, 1).getDay() + new Date(`${midtl.className}`, `${month.innerHTML}`, 0).getDate() + 7) {

            document.querySelectorAll('.mid-bottom div').forEach(a => { a.classList.remove("target") });
            event.currentTarget.classList.add("target");
            // document.querySelector('.modal').classList.remove('hidden');
            // document.querySelector('.cmodal').classList.remove('hidden');            
            document.querySelectorAll('#plus').forEach(a => { a.remove() });
            event.currentTarget.insertAdjacentHTML('beforeend', '<span id="plus">88</span>');
        }
    })
);


document.querySelector('.cmodal__overayout').addEventListener('click', event => {//날짜 클릭시 메모모달 삭제
    document.querySelector('.cmodal').classList.add('hidden');
    document.querySelector('.modal').classList.add('hidden');
});
