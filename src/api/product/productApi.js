import instance from "../config";

const productApi = {
    create: async(data) =>{
        const url = "/products";
        return await instance.post(url, data);
    },

    update: async (data) =>{
        const url = "/products/" + data.id;
        return await instance.patch(url, data);
    },
    findOne : async (id) => {
        const url = "/products/"  + id;
        return await instance.get(url);
    },

    index: async () =>{
        const url = "/products";
        return await instance.get(url);
    },

    delete: async(id) =>{
        const url = "/products/" + id;
        return await instance.delete(url);
    },
    findProductByCategoryId : async(params) => {
        const url = "/products";
        return await instance.get(url, {params : params}); // {cate_id : 3} => http://localhost/products?cate_id=3
    },
    filterProductByPrice : async(params) => {
        const url = "/products";
        return await instance.get(url, {params : params});
    }

}

export default productApi;
// http://localhost:3000    -> /products  + method GET -> get all list products
// http://localhost:3000    -> /products  + method POST + {data} -> add category
// http://localhost:3000    -> /products/{id_category}  + method DELETE  -> delete category
// http://localhost:3000    -> /products/{id_category}  + method PUT +  {data}  -> update category () 
// http://localhost:3000    -> /products/{id_category}  + method PATCH +  {data}  -> update category () 
// http://localhost:3000    -> /products/{id_category}  + method GET -> get only one category
