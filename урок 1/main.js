var btnBasket = document.getElementById('basket-btn');
var btnBasketEs5 = document.getElementById('basket-btn-es5');
var goodsListSection = document.getElementById('goods-list-section');
const goods = [
    { title : 'Товар', price : 'Цена', src : 'image/products_photo/zefir_photo/zefir_7.jpg' },
    { title : 'Зефир', price : 300, src : 'image/products_photo/zefir_photo/zefir_7.jpg' },
    { title : 'Маршмеллоу', price : 400, src : 'image/products_photo/marshmelo_photo/marsh_3.jpg' },
    { title : 'Маршмеллоу на палочке', price : 500, src : 'image/products_photo/marsh_on_stick_photo/onstick_4_2.jpg' }
];
//=============  START ES6   ========================
//Отрисовка корзины
//Paint the basket
const renderGoodsItem = (title, price) => {
    return `<div class="goods-list__product-box">
    <span class="goods-list__product-box__name">${title}</span>
    <div class="goods-list__product-box__price">${price}</div>
    
    <input type="submit" value="X" class="goods-list-item__product-box__delete" onclick="deleteProductStringBasket()">
    </div>`
};

//создание массива с товарами GoodList
const renderGoodsList = () => {
    let goodsList = goods.map(item => renderGoodsItem(item.title, item.price));
    document.querySelector('.goods-list').innerHTML = goodsList.join('');
    goodsListSection.style.display = 'block';
};
//============= END  ES6   ========================

//============= START  ES5   ========================
var basketMainItem = document.querySelector('.template-goods-list').content;// for clone the template // для клонирования template

var openBasketEs5 = function () {
    //  выводим выбранный товар
    let newItem; // объявим новый элемент
    let roulette = document.createDocumentFragment (); 

    for (let i = 0; i < goods.length; i++) {
        newItem = basketMainItem.cloneNode(true);// на основе template, используя его стили и ДОМ вставлять нужную нам информацию
        newItem.querySelector('.goods-list__product-box__name').innerText = goods[i].title;
        newItem.querySelector('.goods-list__product-box__price').innerText = goods[i].price;
        roulette.appendChild(newItem);
    };
    goodsListSection.appendChild(roulette);// вставляем полученное в дом HTML

    goodsListSection.style.display = 'flex';
};
//============= END  ES5   ========================

btnBasket.addEventListener('click', renderGoodsList);
btnBasketEs5.addEventListener('click', openBasketEs5);

window.addEventListener('click', function (evt) {console.log(evt)});
window.addEventListener('onload', function (evt) {console.log(evt)});