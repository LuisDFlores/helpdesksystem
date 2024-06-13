import Link from "next/link";
import Delete from "./Delete";
import Status from "./Status";

const TicketCard = ({ticket}) => {
  return (
    <div className="flex flex-col bg-gray hover:bg-hover-hover rounded-md shadow-lg p-3 m-2">
       <div flex>
          <div className="float-right">
            <Delete id={ticket._id}/>
          </div>
       </div>
        <Link href={`/TicketPage/${ticket._id}`} style={{display:"contents"}}>
       <h4>{ticket.title}</h4>
       <hr className="h-px bg-page"/>
        <p className="whitespace-pre-wrap">
          {ticket.description}
        </p>
        <div className="flex-grow"></div>
        <div className="flex">
        <div className="flex flex-col">
        <p className="text-xs">{ticket.createdAt}</p>
        </div>
        <div className="ml-auto">
        <Status status={ticket.status}/>
        </div>
      </div>
      </Link>
    </div>
  )
}

export default TicketCard
