"use client";
import React from "react";
import { api } from "~/trpc/react";
import "~/styles/contact.css";
import ContactForm from "./form";

const address = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="19"
        height="24"
        viewBox="0 0 19 24"
        fill="none"
    >
        <path
            d="M9.192 24C8.928 24 8.688 23.88 8.52 23.688C7.656 22.704 0 13.992 0 9.192C0 4.128 4.128 0 9.192 0C14.256 0 18.384 4.128 18.384 9.192C18.384 13.968 10.728 22.704 9.864 23.688C9.696 23.88 9.456 24 9.192 24ZM9.192 1.824C5.136 1.824 1.824 5.136 1.824 9.192C1.824 12.36 6.648 18.672 9.192 21.696C11.736 18.696 16.56 12.36 16.56 9.192C16.56 5.136 13.248 1.824 9.192 1.824Z"
            fill="url(#paint0_linear_82_328)"
        />
        <path
            d="M9.19199 13.9199C6.64798 13.9199 4.58398 11.8559 4.58398 9.31186C4.58398 6.76786 6.64798 4.70386 9.19199 4.70386C11.736 4.70386 13.8 6.76786 13.8 9.31186C13.8 11.8559 11.736 13.9199 9.19199 13.9199ZM9.19199 6.52786C7.65599 6.52786 6.40799 7.77586 6.40799 9.31186C6.40799 10.8479 7.65599 12.0959 9.19199 12.0959C10.728 12.0959 11.976 10.8479 11.976 9.31186C11.976 7.77586 10.728 6.52786 9.19199 6.52786Z"
            fill="url(#paint1_linear_82_328)"
        />
        <defs>
            <linearGradient
                id="paint0_linear_82_328"
                x1="9.192"
                y1="0"
                x2="9.192"
                y2="24"
                gradientUnits="userSpaceOnUse"
            >
                <stop stop-color="#125189" />
            </linearGradient>
            <linearGradient
                id="paint1_linear_82_328"
                x1="9.19199"
                y1="4.70386"
                x2="9.19199"
                y2="13.9199"
                gradientUnits="userSpaceOnUse"
            >
                <stop stop-color="#125189" />
            </linearGradient>
        </defs>
    </svg>
);

const phone = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
    >
        <g clip-path="url(#clip0_82_335)">
            <path
                d="M12.8531 6.91987C14.0273 7.12143 15.1008 7.6769 15.9562 8.53003C16.807 9.38081 17.3648 10.4542 17.5664 11.6308C17.6437 12.0949 18.0422 12.43 18.5133 12.43C18.5742 12.43 18.6281 12.423 18.6656 12.416C18.668 12.416 18.6703 12.416 18.6727 12.4136C18.9281 12.3714 19.1508 12.2332 19.2984 12.0199C19.4461 11.8089 19.5023 11.5558 19.4578 11.305C19.1906 9.73471 18.45 8.30503 17.3133 7.16831C16.1719 6.03159 14.7398 5.29096 13.1719 5.02612H13.1695C12.6469 4.9394 12.1523 5.29331 12.0656 5.81362C11.9836 6.33862 12.3351 6.83315 12.8531 6.91987Z"
                fill="#125189"
            />
            <path
                d="M18.7617 14.9656C18.2367 14.4195 17.6016 14.1312 16.9242 14.1312C16.2539 14.1312 15.6141 14.4148 15.0773 14.9539L13.7438 16.2875C13.7109 16.2711 13.6781 16.2547 13.6477 16.2383L13.5797 16.2055C13.4367 16.1328 13.2727 16.0508 13.1367 15.9664C11.768 15.0969 10.5188 13.9578 9.31407 12.4813C8.79844 11.832 8.4375 11.2812 8.17266 10.7328C8.50782 10.4164 8.81954 10.1 9.1125 9.8C9.17813 9.73437 9.24375 9.66641 9.31172 9.59844C9.37735 9.53047 9.44532 9.4625 9.51329 9.39453C10.0711 8.83672 10.3664 8.18984 10.3641 7.52422C10.3641 6.86094 10.0688 6.21641 9.51329 5.66328L8.21719 4.36719C8.14219 4.29219 8.06719 4.21719 7.99454 4.14219C7.92188 4.06719 7.84688 3.99219 7.77422 3.91953L7.6711 3.81406C7.41563 3.55391 7.15079 3.28438 6.8836 3.03828C6.36329 2.52031 5.73282 2.24609 5.06485 2.24609C4.39922 2.24609 3.76407 2.52031 3.22266 3.03828C3.22032 3.04063 3.21797 3.04062 3.21797 3.04297L1.59375 4.66484C0.930472 5.32812 0.553128 6.13672 0.471097 7.06719V7.06953C0.384378 8.17109 0.583597 9.33359 1.09922 10.7281C1.87969 12.8375 3.05157 14.7922 4.7836 16.8781C6.89766 19.3977 9.43594 21.3852 12.3258 22.7844H12.3281C13.4414 23.3164 14.9367 23.9398 16.6242 24.05C16.6266 24.05 16.6289 24.05 16.6313 24.05H16.643C16.7391 24.0547 16.8398 24.0594 16.9453 24.0594C18.1289 24.0594 19.1273 23.6305 19.9102 22.7844L19.9219 22.7727C19.9313 22.7633 19.9383 22.7563 19.9453 22.7469C20.1797 22.4656 20.4492 22.2055 20.7516 21.9148C20.9602 21.7156 21.1734 21.5117 21.3797 21.2914C21.9117 20.7359 22.193 20.0891 22.1906 19.4211C22.1883 18.7508 21.9023 18.1109 21.3633 17.5719L18.7617 14.9656ZM18.5039 21.4977C18.0867 21.943 17.6086 22.1422 16.957 22.1422C16.8961 22.1422 16.8281 22.1375 16.7578 22.1328C15.4078 22.0461 14.1305 21.5117 13.1695 21.0547C10.5164 19.7773 8.19141 17.9586 6.25782 15.6477C4.67579 13.7422 3.60938 11.9656 2.90391 10.0625C2.48203 8.93047 2.32266 8.05391 2.38828 7.22656C2.43047 6.74375 2.61094 6.35938 2.95547 6.01953L4.56797 4.40703C4.73672 4.24531 4.91016 4.15859 5.07188 4.15859C5.22422 4.15859 5.38594 4.24297 5.55703 4.40938C5.55938 4.41172 5.56172 4.41406 5.56407 4.41641C5.84297 4.67891 6.11485 4.95547 6.40313 5.24609L6.4125 5.25547C6.55079 5.39844 6.71016 5.5625 6.87188 5.71953L8.16563 7.01328C8.54297 7.39062 8.54297 7.65547 8.16563 8.03281C8.02969 8.16875 7.89141 8.30703 7.75547 8.44766L7.65938 8.54609C7.2961 8.91406 6.95391 9.26094 6.58125 9.59141C6.57657 9.59609 6.56954 9.60078 6.56485 9.60781L6.54141 9.63125C6.14532 10.0273 6.0375 10.5008 6.22266 11.0352C6.22735 11.0492 6.23204 11.0609 6.23672 11.0727C6.23907 11.0797 6.24141 11.0867 6.2461 11.0938C6.59297 11.9305 7.08047 12.725 7.83047 13.6742C7.83047 13.6766 7.83282 13.6766 7.83282 13.6789C9.16407 15.3172 10.568 16.5969 12.1266 17.5859C12.3305 17.7148 12.5414 17.8227 12.7383 17.9211C12.8836 17.9937 13.0477 18.0781 13.1836 18.1602C13.193 18.1672 13.2023 18.1719 13.2117 18.1766L13.2188 18.1813C13.2328 18.1883 13.2469 18.1977 13.2633 18.2047C13.4672 18.3078 13.6688 18.357 13.8773 18.357C14.2336 18.357 14.5617 18.2094 14.8266 17.9305L16.4484 16.3086C16.5656 16.1914 16.7484 16.0508 16.9406 16.0508C17.1188 16.0508 17.2922 16.1891 17.4047 16.3063C17.407 16.3086 17.407 16.3086 17.4094 16.3109L20.0273 18.9289C20.2852 19.1867 20.4609 19.4914 20.0063 19.9695L20.0039 19.9719C19.8609 20.1266 19.7086 20.2742 19.5469 20.4313C19.5117 20.4641 19.4766 20.4992 19.4414 20.5344C19.1133 20.8414 18.7992 21.1461 18.5039 21.4977Z"
                fill="#125189"
            />
            <path
                d="M23.5336 11.1174C23.1024 8.57915 21.9024 6.26353 20.0625 4.42368C18.2156 2.58149 15.9 1.38149 13.3594 0.952588C12.8367 0.86587 12.3422 1.21978 12.2555 1.74009C12.1688 2.26274 12.5227 2.75728 13.0406 2.84399C15.1899 3.20962 17.1469 4.22681 18.7031 5.78071C20.2594 7.33696 21.2742 9.29399 21.6399 11.4409C21.7172 11.9049 22.1156 12.2401 22.5867 12.2401C22.5891 12.2401 22.5914 12.2401 22.5938 12.2401C22.6524 12.2401 22.7016 12.2331 22.7391 12.226C22.7414 12.226 22.7438 12.226 22.7461 12.2237C23.0016 12.1815 23.2242 12.0432 23.3719 11.8299C23.5219 11.6213 23.5781 11.3682 23.5336 11.1174Z"
                fill="#125189"
            />
        </g>
        <defs>
            <clipPath id="clip0_82_335">
                <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0 0.5)"
                />
            </clipPath>
        </defs>
    </svg>
);

const email = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
    >
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.62625 6.39203L2.75981 6.24177C3.24931 5.72989 3.97857 5.47379 4.94689 5.47379H21.542C22.4546 5.47379 23.1558 5.6965 23.6456 6.1416L23.6623 6.15829C23.7625 6.24745 23.863 6.35296 23.9628 6.4755C23.9628 6.48686 23.9685 6.49787 23.9795 6.50889L23.9962 6.52559C24.3638 6.98204 24.5472 7.62748 24.5472 8.46224V17.9118C24.5361 19.9152 23.5344 20.9169 21.542 20.9169H4.94689C2.95448 20.9059 1.95844 19.9042 1.95844 17.9118V8.46224C1.95844 7.5607 2.18115 6.87051 2.62625 6.39203ZM22.093 7.10992C21.926 7.06552 21.7424 7.04849 21.5423 7.05984H4.94689C4.82435 7.04882 4.70748 7.05416 4.59629 7.07653L13.1944 15.7915L22.093 7.10992ZM3.54449 8.2786C3.53347 8.33436 3.53347 8.39546 3.54449 8.46224V17.9118C3.54449 18.8581 4.01196 19.3309 4.94689 19.3309H21.542C22.488 19.3309 22.9611 18.8581 22.9611 17.9118V8.47894L13.7453 17.4777C13.5784 17.6336 13.3894 17.7114 13.178 17.7114C12.9553 17.7004 12.766 17.6223 12.6104 17.4777L3.54449 8.2786Z"
            fill="#125189"
        />
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.62625 6.39174C2.64862 6.35835 2.67634 6.32496 2.70973 6.29157C2.72108 6.2692 2.73744 6.2525 2.75981 6.24149L2.62625 6.39174Z"
            fill="#125189"
        />
    </svg>
);

export function Contact() {
    const {data} = api.content.getSection.useQuery({
        section: "Contact Us",
    });

    if (!data) {
        return <div>Loading...</div>
    }

    const title = data.elements[0]?.title;

    const message = data.elements[0]?.content || "";

    const contactDetails = [
        {
            icon: "fas fa-map-marker-alt",
            text: <>Address Line 1<br/>Line 2</>,
            logo: address,
        },
        { icon: "fas fa-phone-alt", text: "Phone Number", logo: phone },
        { icon: "fas fa-envelope", text: "info@iconhouseinternational.com", logo: email },
    ];
    return (
        <div className="contact-container">
            <div className="contact-info">
                <h2>{title}</h2>
                <p>{message}</p>
                <div className="contact-details">
                    {contactDetails.map((detail, index) => (
                        <div key={index} className="contact-item">
                            {detail.logo}
                            <i className={detail.icon}></i>
                            <span>{detail.text}</span>
                        </div>
                    ))}
                </div>
            </div>
            <ContactForm />
        </div>
    );
}
