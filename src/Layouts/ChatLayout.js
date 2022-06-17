import ChatCard from "../Components/Chat-cards";

export default function ChatLayout(){


    return(

        <div className="chat-layout">


            <div className="chat-header">

                Chats

                <hr></hr>

                <div className="chat-body">

                    <ChatCard />

                    <ChatCard />

                    <ChatCard />

                </div>

            </div>


        </div>


    );



}