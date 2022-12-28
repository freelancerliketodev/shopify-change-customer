
import axios from "axios";


export default async function customerFetch(req, res) {
  const customerdata  = req.body ;
  console.log('customerdata :', customerdata);


  const customerId = req.body?.customer?.id
  let headersList = {
    "Accept": "*/*",
    "Content-Type": "application/json",
    "X-Shopify-Access-Token": "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" 
   }
   let bodyContent = JSON.stringify(customerdata);

   
   let reqOptions = {
     url: `https://infiniterushmore.com/admin/api/2022-04/customers/${customerId}.json`,
     method: "PUT",
     headers: headersList,
     data: bodyContent,
   }
   
   try {
     let response = await axios.request(reqOptions);
     res.json(response.data)
    
    
   } catch (error) {
      console.log(error)
   }
  
}