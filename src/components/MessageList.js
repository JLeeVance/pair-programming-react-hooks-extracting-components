
function MessageList ({messages}) {
    const mappedMessages = messages.map((messObj) => {
        return (
            <li className={`message ${messObj.type}`}  >
                <div className="icon">{messObj.name.slice(0,1)}</div>
                <span className="content">{messObj.content}</span>
             </li>
        )    
    })
    return mappedMessages;
}

export default MessageList;