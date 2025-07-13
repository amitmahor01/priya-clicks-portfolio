import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMapMarkerAlt, 
  faPhone, 
  faEnvelope 
} from '@fortawesome/free-solid-svg-icons';
import { 
  faWhatsapp, 
  faInstagram, 
  faFacebook, 
  faYoutube 
} from '@fortawesome/free-brands-svg-icons';

// Export the FontAwesomeIcon component
export { FontAwesomeIcon };

// Export all the icons
export const icons = {
  // Solid icons
  mapMarker: faMapMarkerAlt,
  phone: faPhone,
  envelope: faEnvelope,
  
  // Brand icons
  whatsapp: faWhatsapp,
  instagram: faInstagram,
  facebook: faFacebook,
  youtube: faYoutube,
}; 