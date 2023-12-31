import { Schema, model } from 'mongoose'

const cartsCollection = 'Carts'
const cartSchema = new Schema({
    products: {
        type: [
            {
                id_product: {
                    type: Schema.Types.ObjectId,
                    ref: 'Products',
                    required: true
                },
                quantity: {
                    type: Number,
                    required: true
                }
            }
        ],
        default: function() {
            return []
        }
    }
})

cartSchema.pre('findOne', function() {
    this.populate('products.id_product')
})

export const cartModel = model(cartsCollection, cartSchema)