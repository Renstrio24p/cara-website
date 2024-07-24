import { useAnchor } from "../../utils/hooks/useTSAnchor";
import { useTSElements } from "../../utils/hooks/useTSElements";

export default function Footer(DOM: HTMLElement) {
  const details = {
    address:
      "123 Something Road, Di-Makita Street, Walang Forever Ave, Philippines",
    phone: "(08)1231 432 / (+63)9 1231 4321",
    hours: "10:00AM - 9:00PM, Mon - Sun",
  };

  const ui = useTSElements(
    DOM,
    /*html*/ `
    <div class='my-8'>
        <div class='font-poppins flex flex-wrap justify-between'>
            <div>
                <img src="/logo.webp" alt="cara logo">
                <h4 class='my-4 font-semibold'>Contact</h4>
                <div class='text-[12px]'>
                    <p class='text-gray-500 my-1'><span class='text-gray-600 text-sm font-semibold'>Address: </span> ${details.address}</p>
                    <p class='text-gray-500 my-1'><span class='text-gray-600 text-sm font-semibold'>Phone: </span> ${details.phone}</p>
                    <p class='text-gray-500 my-1'><span class='text-gray-600 text-sm font-semibold'>Hours: </span> ${details.hours}</p>
                </div>
                <h5 class='my-2 font-semibold text-[14px]'>Follow Us</h5>
                <div class='flex flex-wrap gap-3'>
                    <a href="#" class=' transition duration-700 ease text-gray-500 text-[24px] hover:text-[#3b5998] hover:scale-[2] socials'><i class='bx bxl-facebook'></i></a>
                    <a href="#" class=' transition duration-700 ease text-gray-500 text-[24px] hover:text-[#1da1f2] hover:scale-[2] socials'><i class='bx bxl-twitter'></i></a>
                    <a href="#" class=' transition duration-700 ease text-gray-500 text-[24px] hover:text-[#c13584] hover:scale-[2] socials'><i class='bx bxl-instagram'></i></a>
                    <a href="#" class=' transition duration-700 ease text-gray-500 text-[24px] hover:text-[#ff0000] hover:scale-[2] socials'><i class='bx bxl-youtube'></i></a>
                </div>
            </div>
            <div>
                <h4 class='my-4 font-semibold'>About</h4>
                <div class='text-[12px] flex flex-col leading-[0.9rem]'>
                    <a href="/a" class='links'>About Us</a>
                    <a href="/b" class='links'>Contact Us</a>
                    <a href="/c" class='links'>Privacy Policy</a>
                    <a href="/d" class='links'>Terms & Conditions</a>
                    <a href="/e" class='links'>Contact Us</a>
                </div>
            </div>
            <div>
                <h4 class='my-4 font-semibold'>My Account</h4>
                <div class='text-[12px] flex flex-col leading-[0.9rem]'>
                    <a href="/a" class='links'>Sign In</a>
                    <a href="/cart" class='links'>My Cart</a>
                    <a href="/wishlist" class='links'>My Wishlist</a>
                    <a href="/c" class='links'>Track My Order</a>
                    <a href="/d" class='links'>Help</a>
                </div>
            </div>
            <div>
                <h4 class='my-4 font-semibold'>Install App</h4>
                <div class='flex flex-wrap gap-1 my-4'>
                    <div class='shadow-md overflow-hidden rounded-md hover:shadow-2xl transition-shadow duration-300 ease'>
                        <a href="#">
                            <img src="/pay/play.webp" alt="google play" class='w-full'>
                        </a>
                    </div>
                    <div class='shadow-md overflow-hidden rounded-md hover:shadow-2xl transition-shadow duration-300 ease'>
                        <a href="#" class='shadow-md'>
                            <img src="/pay/app.webp" alt="app store" class='w-full'>
                        </a>
                    </div>
                </div>
                <h5 class='text-[12px] text-gray-600'>Secured Payment Gateways</h5>
                <div class='w-full my-3'>
                    <img class='w-2/3' src="/pay/pay.webp" alt="payments">
                </div>
            </div>
        </div>
        <div class='text-center my-4'>
            <p class='gap-3 inline-flex text-[12px] text-gray-600'><i class='text-[16px] bx bxl-typescript text-blue-500'></i> &copy; 2024 Cara. All Rights Reserved. <i class='text-[16px] text-teal-900 bx bxl-tailwind-css'></i></p>
        </div>
    </div>
  `
  );

  const anchors = DOM.querySelectorAll(
    "a.links"
  ) as NodeListOf<HTMLAnchorElement>;
  anchors.forEach(anchor => {
    useAnchor(
      anchor,
      anchor.href,
      "links",
      "block my-1 text-gray-500 hover:font-semibold hover:scale-110 transition-transform duration-300"
    );
  });

  const socials = DOM.querySelectorAll(
    "a.socials"
  ) as NodeListOf<HTMLAnchorElement>;

  socials.forEach(social => {
    useAnchor(social, social.href, "socials");
  });

  return ui;
}
