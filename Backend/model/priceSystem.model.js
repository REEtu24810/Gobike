import { Schema,model } from "mongoose";
const priceSystemSchema = Schema({
    // create Schema
ps_name:{
    type:String,
    require:true,
},
ps_price:{
    type:map,
    of:new Schema({
        hours:{type:Number},
        price:{type:String}
    })

}
    
})
const PriceSystemModel = new model('PriceSystemModel',priceSystemSchema)
// create model
export {PriceSystemModel} 
// export the model