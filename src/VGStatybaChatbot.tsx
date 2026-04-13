import { useState, useRef, useEffect } from "react";


const ANTHROPIC_API_KEY = import.meta.env.VITE_ANTHROPIC_API_KEY;

const SYSTEM_PROMPT = `Esi UAB VSR STATYBA klientų aptarnavimo asistentas. Atsakinėk trumpai, taisyklinga lietuvių kalba, be emojių, profesionaliai. Max 2 sakiniai. Niekada nerašyk angliškai. Paslaugos: statyba, apdailos darbai, tinkavimas, fasadų šiltinimas, gerbūvio darbai, stogų įrengimas, renovavimas. Kontaktai: tel. +370 672 95845, el. p. vgstatyba@gmail.com, Šilo g. 5 Vilnius. Jei klausia kainos - sakyk kad priklauso nuo projekto ir kvieski susisiekti.`;

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function VGStatybaChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Sveiki! Esu VSR Statyba asistentas. Kuo galiu padėti?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input.trim() };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": ANTHROPIC_API_KEY,
          "anthropic-version": "2023-06-01",
          "anthropic-dangerous-direct-browser-access": "true",
        },
        body: JSON.stringify({
          model: "claude-haiku-4-5-20251001",
          max_tokens: 500,
          system: SYSTEM_PROMPT,
          messages: newMessages,
        }),
      });

      const data = await response.json();
      console.log('Anthropic response:', JSON.stringify(data));
      const assistantMessage: Message = {
        role: "assistant",
        content: data.content[0].text,
      };
      setMessages([...newMessages, assistantMessage]);
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : String(err);
      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content: `[DEBUG ERROR] ${errorMsg}`,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: "fixed", bottom: "24px", right: "24px",
          width: "60px", height: "60px", borderRadius: "50%",
          backgroundColor: "#3D6DB5", border: "none", cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 4px 20px rgba(61, 109, 181, 0.4)",
          zIndex: 9999, transition: "transform 0.2s, box-shadow 0.2s",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.1)";
          (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 6px 25px rgba(61, 109, 181, 0.6)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
          (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 20px rgba(61, 109, 181, 0.4)";
        }}
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
              stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </button>

      {isOpen && (
        <div style={{
          position: "fixed", bottom: "96px", right: "24px",
          width: "360px", height: "500px", backgroundColor: "#1a1a1a",
          borderRadius: "16px", boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
          display: "flex", flexDirection: "column", zIndex: 9998,
          overflow: "hidden", border: "1px solid #2a2a2a",
          animation: "slideUp 0.25s ease-out",
        }}>
          <style>{`
            @keyframes slideUp {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
            }
            .vg-scroll::-webkit-scrollbar { width: 4px; }
            .vg-scroll::-webkit-scrollbar-thumb { background: #333; border-radius: 2px; }
            .vg-input::placeholder { color: #555; }
            .vg-input:focus { outline: none; }
            .vg-send:hover:not(:disabled) { background: #5285C8 !important; }
            .vg-send:disabled { opacity: 0.4; cursor: not-allowed; }
            .dot { width: 7px; height: 7px; border-radius: 50%; background: #3D6DB5;
              display: inline-block; animation: bounce 1.2s ease-in-out infinite; }
            .dot:nth-child(2) { animation-delay: 0.2s; }
            .dot:nth-child(3) { animation-delay: 0.4s; }
            @keyframes bounce {
              0%, 60%, 100% { transform: translateY(0); opacity: 0.5; }
              30% { transform: translateY(-6px); opacity: 1; }
            }
          `}</style>

          {/* Header */}
          <div style={{
            padding: "16px 20px", borderBottom: "1px solid #2a2a2a",
            display: "flex", alignItems: "center", gap: "12px",
          }}>
            <img src="/VSR Statyba logo.png" style={{width: "40px", height: "40px", borderRadius: "50%", objectFit: "cover"}} />
            <div>
              <div style={{ color: "#fff", fontWeight: "600", fontSize: "14px" }}>VSR Statyba</div>
              <div style={{ color: "#4CAF50", fontSize: "12px", display: "flex", alignItems: "center", gap: "5px" }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#4CAF50", display: "inline-block" }} />
                Online
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="vg-scroll" style={{
            flex: 1, overflowY: "auto", padding: "16px",
            display: "flex", flexDirection: "column", gap: "12px",
          }}>
            {messages.map((msg, i) => (
              <div key={i} style={{ display: "flex", justifyContent: msg.role === "user" ? "flex-end" : "flex-start" }}>
                <div style={{
                  maxWidth: "80%", padding: "10px 14px",
                  borderRadius: msg.role === "user" ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
                  backgroundColor: msg.role === "user" ? "#3D6DB5" : "#2a2a2a",
                  color: msg.role === "user" ? "#1a1a1a" : "#e0e0e0",
                  fontSize: "13px", lineHeight: "1.5",
                  fontWeight: msg.role === "user" ? "500" : "400",
                }}>
                  {msg.content}
                </div>
              </div>
            ))}

            {isLoading && (
              <div style={{ display: "flex", justifyContent: "flex-start" }}>
                <div style={{
                  padding: "12px 16px", borderRadius: "16px 16px 16px 4px",
                  backgroundColor: "#2a2a2a", display: "flex", gap: "5px", alignItems: "center",
                }}>
                  <span className="dot" /><span className="dot" /><span className="dot" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div style={{
            padding: "12px 16px", borderTop: "1px solid #2a2a2a",
            display: "flex", gap: "8px",
          }}>
            <input
              className="vg-input"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Rašykite klausimą..."
              style={{
                flex: 1, background: "#2a2a2a", border: "1px solid #333",
                borderRadius: "10px", padding: "10px 14px",
                color: "#e0e0e0", fontSize: "13px",
              }}
            />
            <button
              className="vg-send"
              onClick={sendMessage}
              disabled={isLoading || !input.trim()}
              style={{
                width: "42px", height: "42px", borderRadius: "10px",
                background: "#3D6DB5", border: "none", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0, transition: "background 0.2s",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"
                  stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
