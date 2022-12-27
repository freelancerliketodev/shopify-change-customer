
import axios from "axios";


export default async function customerFetch(req, res) {
  const data  = req.body;
  const customerId = data.customer.id
  const config = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
      "X-Shopify-Access-Token": `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`,
    }
  }

  try {
    const response =  await axios.put(`https://the-elegant-fashion-boutique.myshopify.com/admin/api/2022-04/customers/${customerId}.json`,data,config)
    if(response.status === 200){
      res.json(response.data)
    }
  } 
  catch (error) {
    console.log(error.message)
    res.send(error)
  }
  
}