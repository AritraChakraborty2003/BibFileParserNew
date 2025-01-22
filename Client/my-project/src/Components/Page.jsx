import Header from "./Header";
import { useParams } from "react-router-dom";

const Page = () => {
  const { id } = useParams();
  return <>{id === `${import.meta.env.VITE_APP_KEY}` && <Header />}</>;
};

export default Page;
