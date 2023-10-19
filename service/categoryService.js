import categoryApi from "../src/api/category/categoryApi";

class categoryService{
    async addCategory(data) {
        return await categoryApi.create(data);
    }

    async listCategory() {
        return await categoryApi.index();
    }
    async findById(id){
        return await categoryApi.findOne(id);
    }
    async updateById(data) {
        return await categoryApi.update(data);
    }

    async destroyById(id){
        return await categoryApi.delete(id);
    }
}
export default new categoryService;