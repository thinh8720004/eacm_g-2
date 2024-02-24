let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
// show cart
let bill = [];

cart.forEach((item, index) => {
    document.querySelector('tbody').innerHTML += `
    <tr>
    <td>${index +1 }</td> 
    <td>${item.name}</td> 
    <td><img src="image/${item.image}" width="100px"></td> 

    <td>${item.sale.toLocaleString()}</td> 

    <td>

    <button class="sub" data-id="${item.id}">-</button>
<span>

    ${item.qty}
</span>
<button class="plus" data-id="${item.id}">+</button>
    
    
    </td> 
    <td>${(item.sale * item.qty).toLocaleString()}</td> 
    <td>
    
    <button class="delPro" data-id =" ${item.id}">Xoá</button>
    
    </td> 

   
    </tr>
    
    
    
    `
    const conform = {
        name: item.name,
        sale: item.sale,


    }

});
console.log(bill)

// tong tien

let sum = 0;
cart.forEach(item => {
    sum += item.sale * item.qty
})

document.getElementById('sumMoney').innerHTML = sum.toLocaleString();
// xoá sp

document.addEventListener('click', async(e) => {

    if (e.target.classList.contains('delPro')) {
        const id = e.target.getAttribute('data-id');
        // console.log(id)

        const index = cart.findIndex(item => item.id == id)
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));

        // console.log(cart)
        window.location.reload();
    }
})

// tăng giảm
document.addEventListener('click', async(e) => {

        if (e.target.classList.contains('plus')) {
            const id = e.target.getAttribute('data-id');
            // console.log(id)

            const index = cart.findIndex(item => item.id == id)

            cart[index].qty += 1

            localStorage.setItem('cart', JSON.stringify(cart));

            // console.log(cart)

            window.location.reload();
        }

    })
    // giảm
document.addEventListener('click', async(e) => {

    if (e.target.classList.contains('sub')) {
        const id = e.target.getAttribute('data-id');
        // console.log(id)

        const index = cart.findIndex(item => item.id == id)
        if (cart[index].qty > 1) {
            cart[index].qty -= 1

        } else {
            cart.splice(index, 1);

        }

        localStorage.setItem('cart', JSON.stringify(cart));
        console.log(cart.length);
        // console.log(cart)

        window.location.reload();
    }


})
let qty_total = 0
cart.forEach(item => {
    qty_total += item.qty
})
document.querySelector('.badge').innerHTML = qty_total;

console.log(qty_total)