import { config } from "./func/Config";
import { useTSElements } from "../../utils/hooks/useTSElements";
import { generateContactItem } from "./func/ContactItem";

export default function ContactDetails(DOM: HTMLElement) {
  const contactInfo: { [key: string]: string } = {
    address:
      "123 Something Road, Di-Makita Street, Walang Forever Ave, Philippines",
    email: "carasite.com",
    phone: "(02)888931",
    hours: "10:00AM - 9:00PM, Mon - Sun",
  };

  const iconClasses = [
    "bx bx-map-alt",
    "bx bx-envelope",
    "bx bxs-phone",
    "bx bx-time-five",
  ];

  const contactKeys = Object.keys(contactInfo) as Array<
    keyof typeof contactInfo
  >;

  const renderContactInfo = contactKeys
    .map((key, index) => {
      return generateContactItem(iconClasses[index], contactInfo[key]);
    })
    .join("");

  const ui = useTSElements(
    DOM,
    /*html*/ `
    <div class='details py-6 md:py-20 flex flex-col md:flex-row gap-4 items-center justify-between'>
      <div>
        <span>GET IN TOUCH</span>
        <h2 class='font-bold text-[1.5em] py-2'>Visit one of our agency locations or contact us today.</h2>
        <h3 class='my-3 font-bold'>Head Office</h3>
        <ul class='text-[0.85em]'>
            ${renderContactInfo}
        </ul>
      </div>
      <div class='map w-full md:w-1/2'>
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79041.63809767821!2d-1.3299886903579738!3d51.75038749214909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48713380adc41faf%3A0xc820dba8cb547402!2sOxford%2C%20United%20Kingdom!5e0!3m2!1sfil!2sph!4v1720225644974!5m2!1sfil!2sph" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy" 
            class='w-full h-[450px]'
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
      </div>
    </div>
  `,
    config
  );

  return ui;
}
