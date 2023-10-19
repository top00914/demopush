import productApi from "../src/api/product/productApi";

class productService{
    async addProduct(data) {
        return await productApi.create(data);
    }

    async listProduct() {
        return await productApi.index();
    }
    async findById(id){
        return await productApi.findOne(id);
    }
    async updateById(data) {
        return await productApi.update(data);
    }

    async destroyById(id){
        return await productApi.delete(id);
    }
    async getProductByCategoryId(params){
        return await productApi.findProductByCategoryId(params);
    }
    async filterProductByPrice(params){
        return await productApi.filterProductByPrice(params);
    }
}
export default new productService;