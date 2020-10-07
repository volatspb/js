let img = [
    {
        big: 'img/gallary/big/8991b.jpg',
        small: 'img/gallary/small/8991s.jpg'
    },
    {
        big: 'img/gallary/big/8992b.jpg',
        small: 'img/gallary/small/8992s.jpg'
    },
    {
        big: 'img/gallary/big/8989b.jpg',
        small: 'img/gallary/small/8989s.jpg'
    }
],
    choosenElement;

let fullImg = document.getElementsByClassName('fullImg')[0],
    miniImg = document.getElementsByClassName('miniImg')[0];
fullImg.innerHTML = 'Выбирите изображение';

function drawGallary() {
    let leftArrow = document.createElement('a'),
        rightArrow = document.createElement('a');
    leftArrow.setAttribute('href','#');
    rightArrow.setAttribute('href','#');
    leftArrow.innerText = '<';
    rightArrow.innerText = '>';

    miniImg.appendChild(leftArrow);
    leftArrow.addEventListener('click', leftChoose);
    for (let i = 0; i < img.length; i++) {
        let smallImg = document.createElement('img');
        smallImg.setAttribute('src',img[i].small);
        smallImg.setAttribute('id',i);
        smallImg.setAttribute('width','200');
        smallImg.setAttribute('class','small');
        miniImg.appendChild(smallImg);
        smallImg.addEventListener('click', chooseFigure);
    }
    miniImg.appendChild(rightArrow);
    rightArrow.addEventListener('click', rightChoose);

}

function chooseFigure() {
    this.classList.toggle('selected');
        if(this.classList.contains('selected')){
            choosenElement = this.id;
            fullImg.innerHTML = '<img src="'+img[this.id].big+'"  onerror="er()">';
        }else{
            fullImg.innerHTML = 'Изображение не выбрано'
        }
    removeAllClasses('small', 'selected', this.id);
}

function removeAllClasses(baseClassName,classNameForRemove, id){
    let elements = document.querySelectorAll('.'+baseClassName);
    for (let i = 0; i < elements.length; i++) {
        if (id == i) continue;
        elements[i].classList.remove(classNameForRemove);
    }
}

function er(){
    document.getElementsByClassName('fullImg')[0].getElementsByTagName('img')[0].remove();
    fullImg.innerHTML = 'Изображение не найдено'
}

function leftChoose() {
    findSelected = document.getElementsByClassName('selected');
    if(findSelected.length <= 0 || choosenElement == 0) {
        choosenElement = img.length - 1;
    }else{
        --choosenElement;
    }
    document.getElementById(choosenElement).click();
}

function rightChoose() {
    findSelected = document.getElementsByClassName('selected');
    if(findSelected.length <= 0 || choosenElement == img.length - 1) {
        choosenElement = 0;
    }else{
        ++choosenElement;
    }
    document.getElementById(choosenElement).click();
}

drawGallary();
