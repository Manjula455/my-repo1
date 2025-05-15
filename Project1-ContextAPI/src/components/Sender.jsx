import { useContext } from "react";
import MessageContext from "../context/MessageContext";

function Sender() {
  const { setMessage } = useContext(MessageContext);
  return (
    <div>
      <h1 className="text-blue-600 dark:text-sky-400">Sender</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={() => {
          setMessage("Hello Sender");
        }}
      >
        Send Message
      </button>
    </div>
  );
}
export default Sender;
