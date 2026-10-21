import { FaWhatsapp } from "react-icons/fa6";

export default function WhatsAppWidget() {
  return (
    <a className="whatsapp-link" href="https://wa.me/919835235672?text=Hi%20Yuvraj!%20I%20saw%20your%20portfolio..." target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
      <FaWhatsapp aria-hidden="true" />
    </a>
  );
}
