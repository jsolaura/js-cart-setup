// show cart
(function() {
    const cartInfo = document.getElementById('cart-info');
    const cart = document.getElementById('cart')
    const cartClear = document.getElementById('clear-cart');
    const cartList = document.querySelectorAll('.cart-item');

    cartInfo.addEventListener('click', function(){
        cart.classList.toggle('show-cart');
    })
    cartClear.addEventListener('click', function(){
        cart
    })
})();

// add items to the cart
(function(){
    const cartBtn = document.querySelectorAll('.store-item-icon');
    cartBtn.forEach(function(btn){
        btn.addEventListener('click', function(e){
            if(e.target.parentElement.classList.contains('store-item-icon')) {
                let fullPath = e.target.parentElement.previousElementSibling.src;
                let pos = fullPath.indexOf('img') + 3;
                let partPath = fullPath.slice(pos)

                const item = {};
                item.img = `img-cart${partPath}`;

                let name = e.target.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent;
                item.name = name;

                let price = e.target.parentElement.parentElement.nextElementSibling.children[0].children[1].textContent;
                let finalPrice = price.slice(1).trim();
                item.price = finalPrice

                const cartItem = document.createElement('div');
                cartItem.classList.add('cart-item', 'd-flex', 'justify-content-between', 'text-capitalize', 'my-3');
                cartItem.innerHTML = 
                    `   <img src="${item.img}" class="img-fluid rounded-circle" id="item-img" alt="">
                        <div class="item-text">
                            <p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p>
                            <span>$</span>
                            <span id="cart-item-price" class="cart-item-price" class="mb-0">${item.price}</span>
                        </div>
                        <a href="#" id='cart-item-remove' class="cart-item-remove">
                            <i class="fas fa-trash"></i>
                        </a>
                    </div>`;
                
                // select cart
                const cart = document.getElementById('cart');
                const total = document.querySelector('.cart-total-container');

                cart.insertBefore(cartItem, total);
                alert('상품을 장바구니에 넣었어요!');

                showTotals();
                // console.log(item.img);
            }
        })
    });

    // show totals
    function showTotals() {
        const total = [];
        const items = document.querySelectorAll('.cart-item-price');

        items.forEach(function(item){
            total.push(parseFloat(item.textContent));
        })

        const totalMoney = total.reduce(function(total, item){
            total += item;
            return total;
        }, 0);
        const finalMoney = totalMoney.toFixed(2);

        // const minusMoney = total.reduce(function(total, item){
        //     total = - item
        //     return total;
        // }, 0).toFixed(2);
        // const finalMinus = finalMoney - minusMoney
        // console.log(finalMinus);
        

        document.getElementById('cart-total').textContent = finalMoney;
        document.querySelector('.item-total').textContent = finalMoney;
        document.getElementById('item-count').textContent = total.length;

        // const removeBtn =document.querySelectorAll('.cart-item-remove');
        // removeBtn.forEach(function(btn){
        //     btn.addEventListener('click', function(e){
        //         e.target.parentElement.parentElement.innerHTML = '';
        //         document.getElementById('cart-total').textContent = finalMinus;
        //         document.querySelector('.item-total').textContent = finalMinus;
        //         document.getElementById('item-count').textContent = total.length - 1;
        //         // console.log(e.target.parentElement.parentElement)
        //     })
        // })
    }
})();