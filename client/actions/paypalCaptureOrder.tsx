import axios from "axios"

const paypalCaptureOrder = async (orderID: string) => {
  try {
    let response = await axios.post('/api/paypal/captureorder', {
        orderID
    })
    if (response.data.success) {

    }

  } catch (error) {
    
  }
}
export default paypalCaptureOrder