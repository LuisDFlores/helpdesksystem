import { NextResponse } from "next/server";
import Ticket from "../../(models)/Ticket";

export async function POST(req){
    try {
        const body = await req.json();
        const ticketData = body.formData;
        await Ticket.create(ticketData);

        return NextResponse.json({ message: "Ticket created"});

    } catch (error) {
        return NextResponse.json({message:"error",error});
    }
}

export async function GET(){
    try {
        const tickets = await Ticket.find();
        return NextResponse.json({tickets});
    } catch (error) {
        return NextResponse.json({ message: "error", error });
    }
}