import instance from "../config";

const categoryApi = {
    create: async(data) =>{
        const url = "/categories";
        return await instance.post(url, data);
    },

    update: async (data) =>{
        const url = "/categories/" + data.id;
        return await instance.patch(url, data);
    },
    findOne : async (id) => {
        const url = "/categories/"  + id;
        return await instance.get(url);
    },

    index: async () =>{
        const url = "/categories";
        return await instance.get(url);
    },

    delete: async(id) =>{
        const url = "/categories/" + id;
        return await instance.delete(url);
    },
}

export default categoryApi;
// http://localhost:3000    -> /categories  + method GET -> get all list categories
// http://localhost:3000    -> /categories  + method POST + {data} -> add category
// http://localhost:3000    -> /categories/{id_category}  + method DELETE  -> delete category
// http://localhost:3000    -> /categories/{id_category}  + method PUT +  {data}  -> update category () 
// http://localhost:3000    -> /categories/{id_category}  + method PATCH +  {data}  -> update category () 
// http://localhost:3000    -> /categories/{id_category}  + method GET -> get only one category
