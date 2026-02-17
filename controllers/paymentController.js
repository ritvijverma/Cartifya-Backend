import Razorpay from "razorpay";
import productModel from "../models/product.model";
import PaymentModel from "../models/payement.model";

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,

});

async function createOrder(req,res){

    const product = await productModel.findOne();
    const options = {
        amount : product.price.amount,
        currency : product.price.currency,
    }
    try{
        const order = await razorpay.orders.create(options);;
        res.status(200).send(order);


const payment = new PaymentModel.create({
    orderId: order.id,
    amount: oder.amount,
    currency: order.currency,
    status: 'PENDING',
})
}catch(error){
    res.status(500).send({error: error.message});
}}

module.exports = {createOrder}