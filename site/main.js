import { productService } from "../model/model.js";




const cate_hotdeal = document.querySelector("#hotdeal");
const cate_tivi = document.querySelector("#tivi");
const cate_tulanh = document.querySelector("#tulanh");


productService.fetchData('http://localhost:3000/products?hotdeal=1&_limit=5').then(data => {
    console.log(data)


    data.forEach(function(item) {
        cate_hotdeal.innerHTML += ` <div class="sanpham border-blue">
          <span class="label-tragop">Trả góp 1%</span>
          <img src="image/${item.image}" alt="" />
          <span class="label-sale"
            ><i class="fa-regular fa-bell"></i> FLASH SALE GIÁ SỐC</span
          >
          <br />
          <span>${item.name}</span>
          <br />
          <p class="gia">${item.price}đ <del> ${item.sale} đ</del></p>
          <p class="online-gia-re">Online giá rẻ</p>
          <p class="sao">${item.star}<i class="fa-solid fa-star"></i></p>
          <div class="div_btn_buy">
<button data-id="${item.id}" class="btn_buy">Mua ngay</button>
</div>
        </div>`
    });
})
productService.fetchData('http://localhost:3000/products?category=Tivi&_limit=5').then(data => {
    data.forEach(function(item) {
        cate_tivi.innerHTML += ` <div class="sanpham border-green">
          <span class="label-tragop">Trả góp 1%</span>
          <img src="image/${item.image}" alt="" />
          <span class="label-sale"
            ><i class="fa-regular fa-bell"></i> FLASH SALE GIÁ SỐC</span
          >
          <br />
          <span>${item.name}</span>
          <br />
          <p class="gia">${item.price}đ <del> ${item.sale} đ</del></p>
          <p class="online-gia-re">Online giá rẻ</p>
          <p class="sao">${item.star}<i class="fa-solid fa-star"></i></p>
          <div class="div_btn_buy">
<button data-id="${item.id}" class="btn_buy">Mua ngay</button>
</div>
        </div>`
    });
    console.log(data)
})

productService.fetchData('http://localhost:3000/products?category=tủ%20lạnh&_limit=5').then(data => {
    data.forEach(function(item) {
        cate_tulanh.innerHTML += ` <div class="sanpham border-red">
      <span class="label-tragop">Trả góp 1%</span>
      <img src="image/${item.image}" alt="" />
      <span class="label-sale"
        ><i class="fa-regular fa-bell"></i> FLASH SALE GIÁ SỐC</span
      >
      <br />
      <span>${item.name}</span>
      <br />
      <p class="gia">${item.price}đ <del> ${item.sale} đ</del></p>
      <p class="online-gia-re">Online giá rẻ</p>
      <p class="sao">${item.star}<i class="fa-solid fa-star"></i></p>
      <div class="div_btn_buy">
<button data-id="${item.id}" class="btn_buy">Mua ngay</button>
</div>
    </div>`
    });
    console.log(data)
})




// pro_tivi.forEach(function(item) {
//     cate_tivi.innerHTML += ` <div class="sanpham border-green">
//     <span class="label-tragop">Trả góp 1%</span>
//     <img src="image/${item.image}" alt="" />
//     <span class="label-sale"
//       ><i class="fa-regular fa-bell"></i> FLASH SALE GIÁ SỐC</span
//     >
//     <br />
//     <span>${item.name}</span>
//     <br />
//     <p class="gia">${item.price}đ <del> ${item.sale} đ</del></p>
//     <p class="online-gia-re">Online giá rẻ</p>
//     <p class="sao">${item.star}<i class="fa-solid fa-star"></i></p>
//   </div>`
// })

// pro_tulanh.forEach(function(item) {
//     cate_tulanh.innerHTML += ` <div class="sanpham border-red">
//     <span class="label-tragop">Trả góp 1%</span>
//     <img src="image/${item.image}" alt="" />
//     <span class="label-sale"
//       ><i class="fa-regular fa-bell"></i> FLASH SALE GIÁ SỐC</span
//     >
//     <br />
//     <span>${item.name}</span>
//     <br />
//     <p class="gia">${item.price}đ <del> ${item.sale} đ</del></p>
//     <p class="online-gia-re">Online giá rẻ</p>
//     <p class="sao">${item.star}<i class="fa-solid fa-star"></i></p>
//   </div>`
// })

// console.log(pro_tulanh);
//thêm vào giỏ hàng

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn_buy')) {
        const id = e.target.getAttribute('data-id');
        console.log(id)
    }
})