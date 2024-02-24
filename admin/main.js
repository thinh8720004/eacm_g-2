import { productService } from "../model/model.js";



const tbody = document.querySelector("tbody");

function showPro() {
    tbody.innerHTML = "   ";
    productService.fetchData('http://localhost:3000/products').then(data => {
        data.forEach(function(item, index) {

            tbody.innerHTML += `
            <tr>
            <td>${index+1}</td>
            <td>${item.name}</td>
            <td><img src="../site/image/${item.image}" width="100px" alt=""></td>
        
            <td>${item.price}</td>
            <td>${item.sale}</td>
            <td>${item.category}</td>
            <td>${item.hotdeal}</td>
            <td>${item.star}</td>
            <td>${item.description}</td>
            <td>
            
            <button  class="openEditPage" data-id="${item.id}">Sửa</button>
            <button class="deletePro" data-id ="${item.id}">Xoá</button>
            
            </td>
        </tr>
            
            `
        })
    })

}
showPro();
const addModal = document.querySelector('#addmodal')
var closeAdd = document.querySelector('.close');
document.querySelector('#openaddpage').onclick = function() {
    addModal.style.display = "block";
}

closeAdd.onclick = function() {
        addModal.style.display = "none";

    }
    // thêm sản phẩm
var hotdeal = 0;
document.querySelector('#hotdeal').onchange = function() {
    if (this.checked) {
        hotdeal = 1;
    } else {
        hotdeal = 0;
    }
}
document.querySelector('#addPro').onclick = function() {
        const name = document.querySelector('#name').value;
        const image = document.querySelector('#image').value.split('\\').pop();
        const price = document.querySelector('#price').value;
        const sale = document.querySelector('#sale').value;
        const category = document.querySelector('#category').value;
        const description = document.querySelector('#description').value;
        var hotdeal = document.querySelector('#hotdeal').chekced;
        console.log(name + image + price + sale + category + description)

        productService.getLastId().then(id => {
            const pro = {
                'id': (Number(id) + 1).toString(),
                'name': name,
                'image': image,
                'price': price,
                'sale': sale,
                'category': category,
                'hotdeal': hotdeal,
                'star': 5,
                'description': description,
            }
            productService.addData(pro);
        })
        addModal.style.display = "none";
        showPro();

    }
    // xoá sp
document.querySelector('tbody').addEventListener("click", function(e) {
    if (e.target.classList.contains('deletePro')) {
        const id = e.target.dataset.id;
        console.log(id)
        productService.deleteData(id)
    }
})

// êdit sản phẩm 
document.querySelector('tbody').addEventListener("click", function(e) {
    if (e.target.classList.contains('openEditPage')) {
        const id = e.target.dataset.id;
        productService.getDataById(id).then(pro => {
            editModal.style.display = "block";
            editModal.innerHTML +=
                `
        <!-- Modal content -->
                            <div class="modal-content">
                                <span class="close">&times;</span>
                                <div class="form">
                                    <label for="">Tên Sản Phẩm</label>
                                    <br>
                                    <input  value = "${pro.name}" type="text" id="editName">
                                    <br>
        
                                    <label for="">Hình Ảnh</label>
                                    <br>
                                    <img id="showImage" src= "../site/image/${pro.image}" width="200px" alt=""  />
                                    <br>
                                    <input type="file" id="editImage">
                                    <br>
        
                                    <label for="">Giá</label>
                                    <br>
                                    <input value = "${pro.price}"type="text" id="editPrice">
                                    <br>
        
                                    <label for="">Giá Khuyến Mãi</label>
                                    <br>
                                    <input value = "${pro.sale}" type="text" id="editSale">
                                    <br>
        
                                    <label for="">Danh Mục</label>
                                    <br>
                                    <select name="" id="editCategory">
                                        <option ${pro.category =="Tivi" ? "selected" : ""} value="Tivi">Tivi</option>
                                        <option  ${pro.category =="tủ lạnh" ? "selected" : ""} value="tủ lạnh">Tủ Lạnh</option>
        
                                    </select>
                                    <br>
        
                                    <label>Hot Deal</label>
                                    <br>
                                    <input  ${pro.hotdeal =="1" ? "checked" : ''}type="checkbox" id="editHotdeal">
                                    <br>
        
                                    <label for="">Mô tả</label>
                                    <br>
                                    <input  value = "${pro.description}"type="text" id="editDescription">
                                    <br>
        
                                    <button class="editPro"  data-id="${id}" id="editPro">Sửa</button>
                                </div>
                            </div>
        
        
        
        `

        })
    }
})

editModal.addEventListener("click", function(e) {
    if (e.target.classList.contains('editPro')) {
        const id = e.target.dataset.id;

        const editName = document.querySelector('#editName').value;
        var editImage = document.querySelector('#editImage').value.split('\\').pop();
        if (editImage == "") {
            editImage = document.querySelector("#showImage").src.split('/').pop();
        } else {

        }
        const editPrice = document.querySelector('#editPrice').value;
        const editSale = document.querySelector('#editSale').value;
        const editCategory = document.querySelector('#editCategory').value;
        var editHotdeal = document.querySelector('#editHotdeal').checked;
        const editDescription = document.querySelector('#editDescription').value;
        const pro = {
            'id': id,
            'name': editName,
            'image': editImage,
            'price': editPrice,
            'sale': editSale,
            'category': editCategory,
            'hotdeal': editHotdeal == true ? 1 : 0,
            'star': 5,
            'description': editDescription,
        }
        productService.updateDataById(id, pro)
        closeAdd.style.display = "none";
        showPro();
    }
})

function editPro(id) {

    const editName = document.querySelector('#editName').value;
    var editImage = document.querySelector('#editImage').value.split('\\').pop();
    if (editImage == "") {
        editImage = document.querySelector("showImage").src.split('/').pop();
    } else {

    }
    const editPrice = document.querySelector('#editPrice').value;
    const editSale = document.querySelector('#editSale').value;
    const editCategory = document.querySelector('#editCategory').value;
    var editHotdeal = document.querySelector('#editHotdeal').checked;
    const editDescription = document.querySelector('#editDescription').value;
    const pro = {
        'id': id,
        'name': editName,
        'image': editImage,
        'price': editPrice,
        'sale': editSale,
        'category': editCategory,
        'hotdeal': editHotdeal == true ? 1 : 0,
        'star': 5,
        'description': editDescription,
    }

    data = data.map(item => item.id == id ? pro : item)
    closeAdd.style.display = "none";
    showPro();
}