import axios from 'axios';


var api_key= "mccTNQrgj34is5qhmrkzeasD9ZZsqkW9"




  export async function convertCurrency(convertTo){

    let response;
    let error;
  
    try{
      let result = await axios.get(`https://api.exchangerate.host/convert?to=${convertTo}&from=INR&amount=1`);
  
      if(result.data.status === "error"){
     
        return { response, error: "An error occurred." };
      }
     
      response = result.data.result;
      
      localStorage.setItem("currencyRate" , response)
      localStorage.setItem("currency" , convertTo)
            return { response, error };
      } catch (e) {
        
        error = e.message;
        return { response, error };
      }
  }