import TicketCard from "./(components)/TicketCard"

const getTickets = async ()=>{
  try {
    
    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

    if (!baseURL) {
      throw new Error("API base URL is not defined in environment variables");
    }

    const res = await fetch(`${baseURL}/Tickets`,{
      cache:"no-store",
    });

    return res.json();

  } catch (error) {
    throw error;
  }
}
const Dashboard = async() => {

  const {tickets} = await getTickets();

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];

  return (
    <div className="p-5">
      <div>
        {tickets && 
        uniqueCategories?.map((uniqueCategory, categoryIndex) => (
          <div key={categoryIndex} className="mb=4">
          <h2>{uniqueCategory}</h2>
          <div className="">
            {tickets.filter((ticket) => ticket.category === uniqueCategory)
            .map((filteredTicket,_index)=>(
              <TicketCard 
              id={_index} 
              key={_index} 
              ticket={filteredTicket}
              />
            ))}
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Dashboard
