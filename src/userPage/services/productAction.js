// import { LISTPRODUCTS } from "../../contants/productsContants";
import db from "../../db"
import { ADDCART } from "../contants/productsContants";


export const listProducts = async (limit)=>{
  const products = [];
  try {
      const conn = db.collection("product");
      const data = await conn.limit(limit).get();
      data.docs.map(item=>{
          const d = item.data();// day moi la du lieu cua tung product
          d.id = item.id;// nap them id vao san pham
          products.push(d);                 
      });
  } catch (error) {
      
  }
  return products;
}

export const listCategories =async () => {
  
  try {
    const collectionRef = db.collection('categories');
    const snapshot = await collectionRef.get();
    const data = snapshot.docs.map((doc) => doc.data());
    return data;
    
    // dispatch({ type: 'LISTPRODUCTS', payload: data });
  } catch (error) {
    // dispatch({ type: 'FETCH_DATA_FAILURE', payload: error.message });
    return [];
  }

};

export const listBlog = async ()=>{
  const blogs = [];
  try {
      const conn = db.collection("blog");
      const data = await conn.get();
      data.docs.map(item=>{
          const d = item.data();// day moi la du lieu cua tung product
          d.id = item.id;// nap them id vao san pham
          blogs.push(d);                 
      });
  } catch (error) {
      
  }

  return blogs;
  
}

export const listOrder = async ()=>{
  const order = [];
  try {
      const conn = db.collection("order");
      const data = await conn.get();
      data.docs.map(item=>{
          const d = item.data();// day moi la du lieu cua tung product
          d.id = item.id;// nap them id vao san pham
          order.push(d);                 
      });
  } catch (error) {
      
  }
  return order;
}