
function Contacts({contacts}) {
    const displayContacts = contacts.map((contact) => {
        return (
            <ul className="contacts">
                <li className="contact">
                    <div className="icon">{contact.name.slice(0,1)}</div>
                    {contact.name}
                </li>
            </ul>
        )
    })
    return displayContacts

}

export default Contacts;