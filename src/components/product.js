import productService from "../../service/productService";
import categoryService from "../../service/categoryService";
export default function Product(){
    const getListCategory = async () => {
       const listCategory = await categoryService.listCategory();
      
       let target = document.querySelector('.show-list-category');
        
       listCategory.map((item) => {
               target.insertAdjacentHTML('beforeend', ` <li data-id="${item.id}" onclick="filterByCategory(this)" ><a href="javascript:;">${item.name}</a></li>`);
          
       })
    }
    productService.listProduct()
    .then((data) => {
        renderProductList(data);
    })
    const renderProductList = (dataItem) => {
        
            
            let target = document.querySelector('.show-product');
            target.innerHTML = "";
            dataItem.map((item) => {
                    target.insertAdjacentHTML('beforeend', /*html */`       <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="product__item">
                        <div class="product__item__pic set-bg" data-setbg="${item.image}">
                            <ul class="product__hover">
                                <li><a href="#"><img src="img/icon/heart.png" alt=""></a></li>
                                <li><a href="#"><img src="img/icon/compare.png" alt=""> <span>Compare</span></a>
                                </li>
                                <li><a href="#"><img src="img/icon/search.png" alt=""></a></li>
                            </ul>
                        </div>
                        <div class="product__item__text">
                            <h6>${item.name}</h6>
                            <a href="#" class="add-cart">+ Add To Cart</a>
                            <div class="rating">
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                            </div>
                            <h5>${new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price)}</h5>
                            <div class="product__color__select">
                                <label for="pc-4">
                                    <input type="radio" id="pc-4">
                                </label>
                                <label class="active black" for="pc-5">
                                    <input type="radio" id="pc-5">
                                </label>
                                <label class="grey" for="pc-6">
                                    <input type="radio" id="pc-6">
                                </label>
                            </div>
                        </div>
                    </div>
                </div>`);
                
            })
            $('.set-bg').each(function () {
                var bg = $(this).data('setbg');
                $(this).css('background-image', 'url(' + bg + ')');
            });

    }
    getListCategory();
    




    window.filterByCategory = async (thisData) => {
        let category_id = thisData.getAttribute('data-id');
        const dataItem = await productService.getProductByCategoryId({cate_id : category_id});
        renderProductList(dataItem );
       // lấy hết sản phẩm có danh mục id = category_id

    }

    window.filterByPrice = async (thisData) => {
        let typeFilterPrice = thisData.getAttribute('data-filter');
       let dataItem = [];
       if(typeFilterPrice == 1){
         dataItem = await  productService.filterProductByPrice({price_gte : 0, price_lte :100000})
       }
       if(typeFilterPrice == 2){
        dataItem = await productService.filterProductByPrice({price_gte : 100000, price_lte :500000})
       }
       if(typeFilterPrice == 3){
        dataItem = await productService.filterProductByPrice({price_gte : 500000, price_lte :10000000})
       }
       renderProductList(dataItem);
    }
    return  /*html*/`<section class="breadcrumb-option">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="breadcrumb__text">
                    <h4>Product</h4>
                    <div class="breadcrumb__links">
                        <a href="/">Home</a>
                        <span>Product</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="shop spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-3">
                    <div class="shop__sidebar">
                        <div class="shop__sidebar__search">
                            <form action="#">
                                <input type="text" placeholder="Search...">
                                <button type="submit"><span class="icon_search"></span></button>
                            </form>
                        </div>
                        <div class="shop__sidebar__accordion">
                            <div class="accordion" id="accordionExample">
                                <div class="card">
                                    <div class="card-heading">
                                        <a data-toggle="collapse" data-target="#collapseOne">Categories</a>
                                    </div>
                                    <div id="collapseOne" class="collapse show" data-parent="#accordionExample">
                                        <div class="card-body">
                                            <div class="shop__sidebar__categories">
                                                <ul class="nice-scroll show-list-category">
                                                   
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                             
                                
                                
                                <div class="card">
                                    <div class="card-heading">
                                        <a data-toggle="collapse" data-target="#collapseSix">Filter by price</a>
                                    </div>
                                    <div id="collapseSix" class="collapse show" data-parent="#accordionExample">
                                        <div class="card-body">
                                            <div class="shop__sidebar__tags">
                                                <a href="javascript:;" data-filter="1" onclick="filterByPrice(this)">0 - 100.000đ</a>
                                                <a href="javascript:;" data-filter="2" onclick="filterByPrice(this)">100.000 - 500.000đ</a>
                                                <a href="javascript:;" data-filter="3" onclick="filterByPrice(this)">500.000 - ∞</a>
                                        
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-9">
                    
                    <div class="row show-product">
                  
                   
                    </div>
                    
                </div>
            </div>
        </div>
    </section>`;
}