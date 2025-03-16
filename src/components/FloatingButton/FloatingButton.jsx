import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import "./FloatingButton.css";

export default function FloatingButton() {
  return (
    <div className="floating-action-buttons">
      <a
        href="https://wa.me/919585893773"
        className="floating-button whatsapp-button"
      >
        <WhatsAppIcon />
      </a>
      <a href="tel:+919585893773" className="floating-button phone-button">
        <PhoneIcon />
      </a>
    </div>
  );
}
