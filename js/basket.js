let goods = [
    {
        name: 'Российский самолет-амфибия Бе-200',
        price: '990',
        img: 'be200.jpg',
        description: 'Бе-200ЧС – современный российский многоцелевой самолёт-амфибия нового поколения.  Он создан и производится Таганрогским авиационным научно-техническим комплексом им. Г.М. Бериева.',
        url: 'https://zvezda.org.ru/catalog/sbornye_modeli/aviatsiya/poslevoennaya_i_sovremennaya_aviation/rossiyskiy_samolet_amfibiya_be_200_29140/'
    },
    {
        name: 'Американский военно-транспортный самолет С-130',
        price: '2900',
        img: 's130.jpg',
        description: 'С-130 – самый популярный западный военно-транспортный самолёт. Он находится в серийном производстве дольше, чем любой другой самолёт в истории и является основой военно-транспортной авиации США, государств НАТО и других стран.',
        url: 'https://zvezda.org.ru/catalog/sbornye_modeli/aviatsiya/poslevoennaya_i_sovremennaya_aviation/amerikanskiy_voenno_transportnyy_samolet_s_130_29152/'
    },
    {
        name: 'Советский стратегический бомбардировщик Ту-95',
        price: '1990',
        img: 'tu95.jpg',
        description: 'Советский турбовинтовой стратегический бомбардировщик-ракетоносец Ту-95 на сегодняшний день является самым быстрым в мире винтовым самолётом. ',
        url: 'https://zvezda.org.ru/catalog/sbornye_modeli/aviatsiya/poslevoennaya_i_sovremennaya_aviation/sovetskiy_strategicheskiy_bombardirovshchik_tu_95/'
    },
    {
        name: 'Российский вертолёт МЧС МИ-8',
        price: '700',
        img: 'mi8.jpg',
        description: 'Ми-8 зарекомендовавший себя как один из лучших военно-транспортных вертолётов и нашедший применение не только в военном ведомстве, но и у министерства по чрезвычайным ситуациям.',
        url: 'https://zvezda.org.ru/catalog/sbornye_modeli/aviatsiya/vertolyety/rossiyskiy_vertolyet_mchs_mi_8_29015/'
    }
],
    basket = [],
    goodsBlock = document.getElementsByClassName('goods')[0];

for (let i = 0; i < goods.length; i++){
    let good = document.createElement('div');
    good.setAttribute('class', 'good');
    good.innerHTML = '<h3>'+goods[i].name+'</h3>';
    good.innerHTML += '<img src="img/basket/'+goods[i].img+'">';
    good.innerHTML += '<span><b>Цена:</b> '+goods[i].price+'</span>';
    good.innerHTML += '<span><b>Описание:</b> '+goods[i].description+'</span>';
    good.innerHTML += '<a id="'+i+'" href="#" class="add">Добавить в корзину</a>';
    goodsBlock.appendChild(good);
    document.getElementById(i).addEventListener('click', addInBasket);
}

function addInBasket() {
    if(checkBasket(this.id)){
        let newOrder = {
            id: this.id,
            count: 1
        };
        basket.push(newOrder);
    }else{
        for (let key in basket){
            if(basket[key].id == this.id) ++basket[key].count;
        }
    }
    drawBasket();
    console.log(basket);
}

function checkBasket(id){
    if(basket.length > 0){
        for(let i = 0; i < basket.length; i++){
            if (basket[i].id == id) return false;
        }
    }
    return true;
}

function drawBasket() {
    let basketBlock = document.getElementsByClassName('basket')[0];
    basketBlock.innerHTML = '<table class="basketTable">' +
                                '<tr>' +
                                    '<td>Наименование товара</td>' +
                                    '<td>Цена за 1 штуку</td>' +
                                    '<td>Количество штук</td>' +
                                    '<td>Итого</td>' +
                                '</tr>' +
                            '</table>';

    let basketTable = document.getElementsByClassName('basketTable')[0],
        fullOrderPrice = 0;

    for(let i = 0; i < basket.length+1; i++){
        let rowOrder = document.createElement('tr'),
            tdName = document.createElement('td'),
            tdPrice = document.createElement('td'),
            tdHowMuch = document.createElement('td'),
            tdSumPrice = document.createElement('td');

        if (i < basket.length) {
            tdName.innerText = goods[basket[i].id].name;
            tdPrice.innerText = goods[basket[i].id].price;
            tdHowMuch.innerText = basket[i].count;
            tdSumPrice.innerText = basket[i].count * goods[basket[i].id].price;
            fullOrderPrice += basket[i].count * goods[basket[i].id].price;
        }else{
            tdName.innerText = 'Итого';
            tdPrice.innerText = '';
            tdHowMuch.innerText = '';
            tdSumPrice.innerText = fullOrderPrice;
        }

        rowOrder.appendChild(tdName);
        rowOrder.appendChild(tdPrice);
        rowOrder.appendChild(tdHowMuch);
        rowOrder.appendChild(tdSumPrice);
        basketTable.appendChild(rowOrder);
    }
    console.log(basketBlock);
}