import axios from "axios";

const URL = `${process.env.NEXT_PUBLIC_PAI_URL}/paypal`;

const paypalCreateOrder = async (price: number) => {
  try {
    
    const response = await axios.post(URL, {
      order_price: price
    });
    return response.data.data.result.id
  } catch (err) {
    console.error("Error creating PayPal order:", err);
    return null;
  }
};

export default paypalCreateOrder;