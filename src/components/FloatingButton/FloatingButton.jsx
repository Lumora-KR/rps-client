import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import "./FloatingButton.css";

export default function FloatingButton() {
  return (
    <div className="floating-action-buttons">
      <a
        href="https://wa.me/919840214679"
        className="floating-button whatsapp-button"
      >
        <WhatsAppIcon />
      </a>
      <a href="tel:+919840214679" className="floating-button phone-button">
        <PhoneIcon />
      </a>
    </div>
  );
}
