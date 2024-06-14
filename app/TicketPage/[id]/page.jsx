import TicketForm from "@/app/(components)/TicketForm"

const getTicketById = async (id)=>{

  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

  if (!baseURL) {
    throw new Error("API base URL is not defined in environment variables");
  }

  const res = await fetch(`${baseURL}/Tickets/${id}`,{
      cache: "no-store",
  });

  if(!res.ok){
    throw new Error('Error getting ticket');
  }
  return res.json();
 
}

const TicketPage = async ({ params }) => {
  //if true editmode is false, else true 
  const EDITMODE = params.id === "new" ? false :true;

  let updateTicketData = {};

  if(EDITMODE){
    updateTicketData = await getTicketById(params.id);
    updateTicketData = updateTicketData.foundTicket;
  }else{
    updateTicketData = {
      _id:"new"
    }
  }
  
  return <TicketForm ticket={updateTicketData}/>
};

export default TicketPage