"use client";
import { faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useRouter } from "next/navigation"

const Delete = ({ id }) => {

  //next navigation(useRouter)
  const router = useRouter();
  const deleteTicket = async () => {

    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

    const res = await fetch(`${baseURL}/Tickets/${id}`,
      { method: "DELETE" });

    if (res.ok) {
      router.refresh()
    };
  }

  return (
    <FontAwesomeIcon icon={faX} className="text-red-400 hover:cursor-pointer hover:text-red-200"
      onClick={deleteTicket}
    />
  )
}

export default Delete