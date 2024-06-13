import mongoose,{Schema, mongo} from "mongoose";

mongoose.connect(process.env.MONGODB_URI)

mongoose.Promise = global.Promise

const ticketSchema = new Schema({
    title: String,
    description: String,
    category: String,
    status: String,
    active: Boolean,
},

{
    timestamps: true,

});

//grab ticket if it already exists if not create (has to be models)
const Ticket = mongoose.models.Ticket || mongoose.model('Ticket',ticketSchema);

export default Ticket;