export class productService {
    static async fetchData(url) {
        try {
            const reponse = await axios.get(url);
            return reponse.data;
            // console.log(reponse.data)
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    static async addData(data) {
        try {
            await axios.post('http://localhost:3000/products', data);
            console.log("thành công")
        } catch (error) {
            console.log(error);
            throw error;


        }
    }

    static async getLastId() {
        try {
            const reponse = await axios.get('http://localhost:3000/products');
            return reponse.data[reponse.data.length - 1].id;
            // console.log(reponse.data)
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    static async deleteData(id) {
        try {
            await axios.delete(`http://localhost:3000/products/${id}`);
            console.log("xoá thành công")

        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    static async getDataById(id) {
        try {
            const reponse = await axios.get(`http://localhost:3000/products/${id}`);
            return reponse.data;
            // console.log(reponse.data)
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    static async updateDataById(id, data) {
        try {
            await axios.put(`http://localhost:3000/products/${id}`, data);
            // return reponse.data;
            // console.log(reponse.data)
            console.log("update ok")
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

}