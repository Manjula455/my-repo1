import { useContext } from "react";
import MessageContext from "../context/MessageContext";

function Reciever() {
  const { message } = useContext(MessageContext);
  return (
    <div>
      <h1 className="text-blue-600 dark:text-sky-400">Reciever</h1>
      <h3 className="text-[#50d71e]">Reciever got: {message} </h3>
    </div>
  );
}
export default Reciever;
