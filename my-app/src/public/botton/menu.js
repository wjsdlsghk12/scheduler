document.querySelector('#menu').addEventListener('click', event => {//메뉴선택시 모달 등장
    document.querySelector('.lmodal').classList.remove('hidden');
    document.querySelector('.modal').classList.remove('hidden');               
}
)
document.querySelector('.lmodal__overayout').addEventListener('click', event => {//메뉴 모달 삭제
    document.querySelector('.lmodal').classList.add('hidden');
    document.querySelector('.modal').classList.add('hidden');
}
)

document.querySelector('.menu_close').addEventListener('click', event => {//메뉴 모달 삭제
    document.querySelector('.lmodal').classList.add('hidden');
    document.querySelector('.modal').classList.add('hidden');
}
)
