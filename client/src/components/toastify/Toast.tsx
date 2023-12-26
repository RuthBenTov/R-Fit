import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toast = () => {
    const handleGetSomething = async (type: string) => {
        try {
          // do something like fetching some data
          if (type == "success") {
            toast.success("data fetched!");
          } else {
            throw new Error("error"); // this will get you to the "catch" section.
          }
        } catch (error) {
          console.error(error);
          toast.error("an error!!");
        }
      };
    
      return (
        <div>
          <button onClick={() => handleGetSomething("error")}>
            Error in fetch
          </button>
          <button onClick={() => handleGetSomething("success")}>
            successfull fetch
          </button>
          <ToastContainer />
        </div>
      );
}

export default Toast

