import { useParams } from "react-router";

const ChatConsole = () => {
  const { userName } = useParams();

  return <h1>Hello {userName}</h1>;
};

export default ChatConsole;
