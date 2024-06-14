"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const TicketForm = ({ticket}) => {

const EDITMODE = ticket._id === "new" ? false : true;

const router = useRouter();

const handleChange=(e)=>{
    const value= e.target.value;
    const name = e.target.name;

    setFormData((prevState)=>({
        ...prevState,
        [name]:value,
    }));
};

const handleSubmit = async (e) =>{
    e.preventDefault();

    if(EDITMODE){
        const res = await fetch(`/api/Tickets/${ticket._id}`, {
            method: "PUT",
            body: JSON.stringify({ formData }),
            "content-type": "application/json",
        });

        if (!res.ok) {
            throw new error("Error In Updating Ticket.")
        }

    }else{

        const res = await fetch('/api/Tickets', {
            method: "POST",
            body: JSON.stringify({ formData }),
            "content-type": "application/json",
        });

        if (!res.ok) {
            throw new error("Error In Creating Ticket.")
        }
    }
    console.log(`Would normally send email here`)
    router.refresh()
    router.push("/")
};

const startingTicketData ={
        title:"",
        description:"",
        status:"new",
        category:"new ticket",
    };
    //check if if value is true;
    if(EDITMODE){
        startingTicketData["title"] = ticket.title
        startingTicketData["description"] = ticket.description
        startingTicketData["status"] = ticket.status
        startingTicketData["category"] = ticket.category
    };


const[formData, setFormData] = useState(startingTicketData);

  return <div className="flex justify-center">
    <form className="flex flex-col" method="post" onSubmit={handleSubmit}>
        <h3>{ EDITMODE ? "Update Ticket" : "Create Ticket"}</h3>
            <label>Title</label>
            <input id="title"
            name="title" 
            type="text" 
            onChange={handleChange}
            required={true}
            value={formData.title}
            />

            <label>description</label>
            <textarea 
              id="description"
              name="description"
              onChange={handleChange}
              required={true}
              value={formData.description}
              rows="5"
            />

            <label>Category</label>
            <select 
            name="category" 
            value={formData.category} 
            onChange={handleChange}
            >
            <option value="new ticket">New Ticket</option>
            <option value="resubmitting ticket">Resubmitting Ticket</option>
            </select>

            <label>Status</label>
            <select name="status" value={formData.status} onChange={handleChange}>
                <option value='new'>new</option>
                <option value='in progress'>In Progress</option>
                <option value='done'>Done</option>
            </select>
          <input type="submit" className="btn" value={EDITMODE ? "Update Ticket" : "Create Ticket"}/>
    </form>
  </div>
  
};

export default TicketForm