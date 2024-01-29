import { ChatEngine, ChatFeed } from "react-chat-engine";

import './App.css';

const App = () => {
    return(
        <ChatEngine
            height = "100vh"
            projectID = "db803362-6ee5-4d49-bed1-ab0014582082"
            userName = "Sub_thehuman"
            userSecret = "1234"
        />
    )
}

export default App;