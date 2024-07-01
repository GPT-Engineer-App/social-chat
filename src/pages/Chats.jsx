import { useState } from "react";
import { Search, PlusCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const contacts = [
  { id: 1, name: "John Doe", avatar: "/avatars/john.jpg" },
  { id: 2, name: "Jane Smith", avatar: "/avatars/jane.jpg" },
  // Add more contacts as needed
];

const Chats = () => {
  const [selectedContact, setSelectedContact] = useState(null);

  return (
    <div className="flex h-full">
      <aside className="w-1/3 border-r">
        <div className="p-4">
          <div className="flex items-center mb-4">
            <Input placeholder="Search contacts" className="mr-2" />
            <Button variant="outline" size="icon">
              <Search className="h-4 w-4" />
            </Button>
          </div>
          <Button variant="outline" className="w-full mb-4">
            <PlusCircle className="mr-2 h-4 w-4" />
            New Chat
          </Button>
          <ScrollArea className="h-[calc(100vh-160px)]">
            {contacts.map((contact) => (
              <div
                key={contact.id}
                className="flex items-center p-2 cursor-pointer hover:bg-muted"
                onClick={() => setSelectedContact(contact)}
              >
                <Avatar className="mr-2">
                  <AvatarImage src={contact.avatar} alt={contact.name} />
                  <AvatarFallback>{contact.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <span>{contact.name}</span>
              </div>
            ))}
          </ScrollArea>
        </div>
      </aside>
      <main className="flex-1 flex flex-col">
        {selectedContact ? (
          <>
            <header className="flex items-center p-4 border-b">
              <Avatar className="mr-2">
                <AvatarImage
                  src={selectedContact.avatar}
                  alt={selectedContact.name}
                />
                <AvatarFallback>{selectedContact.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <span>{selectedContact.name}</span>
            </header>
            <ScrollArea className="flex-1 p-4">
              {/* Chat messages will go here */}
            </ScrollArea>
            <footer className="p-4 border-t">
              <div className="flex items-center">
                <Input placeholder="Type a message" className="mr-2" />
                <Button>Send</Button>
              </div>
            </footer>
          </>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p>Select a contact to start chatting</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Chats;