import React from "react";
import { motion } from "framer-motion";
import AurifyNewLogo from "../assets/profilecomponets/aurify-new-logo.svg";
import BgLogo from "../assets/profilecomponets/bg-logo.svg";
import Facebook from "../assets/profilecomponets/facebook.svg";
import Instagram from "../assets/profilecomponets/instagram.svg";
import LinkedIn from "../assets/profilecomponets/linkedin.svg";
import Whatsapp from "../assets/profilecomponets/whatsapp.svg";
import Save from "../assets/profilecomponets/save.svg";
import Share from "../assets/profilecomponets/share.svg";
import Phone from "../assets/profilecomponets/phone.svg";
import Mail from "../assets/profilecomponets/mail.svg";
import Web from "../assets/profilecomponets/web.svg";

const Ajmal: React.FC = () => {
  const handleIconTap = () => {
    if (navigator.vibrate) navigator.vibrate(30);
  };

  const handleLinkedInClick = () => {
    handleIconTap();
    window.open("https://www.linkedin.com/in/muhammed-ajmal-727832232/", "_blank");
  };

  const handleWhatsappClick = () => {
    handleIconTap();
    window.open("https://wa.me/971585023411", "_blank");
  };

  const handleFacebookClick = () => {
    handleIconTap();
    window.open("https://www.facebook.com/", "_blank");
  };

  const handleInstagramClick = () => {
    handleIconTap();
    window.open("https://www.instagram.com/", "_blank");
  };

  const handleWebClick = () => {
    handleIconTap();
    window.open("https://aurify.global", "_blank");
  };

  const handleShareClick = async () => {
    handleIconTap();
    const shareUrl = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title: "Ajmal T.K - Aurify", url: shareUrl });
        return;
      } catch { }
    }
    if (navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(shareUrl);
        alert("Link copied to clipboard");
        return;
      } catch { }
    }
    window.open(shareUrl, "_blank");
  };

  const handleSaveClick = () => {
    handleIconTap();
    const vcardData = `BEGIN:VCARD\nVERSION:3.0\nFN:Muhammed Ajmal TK\nORG:Aurify\nTITLE:Business Manager\nTEL;TYPE=CELL:+971585023411\nEMAIL;TYPE=INTERNET:ajmal@aurify.global\nEND:VCARD\n`;
    const blob = new Blob([vcardData], { type: "text/vcard;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Muhammed_Ajmal_TK.vcf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handlePhoneClick = () => {
    handleIconTap();
    const link = document.createElement("a");
    link.href = "tel:+971585023411";
    link.click();
  };

  const handleMailClick = () => {
    handleIconTap();
    window.location.href = "mailto:ajmal@aurify.global";
  };

  const actions = [
    { label: "Call", icon: Phone, onClick: handlePhoneClick },
    { label: "Email", icon: Mail, onClick: handleMailClick },
    { label: "Whatsapp", icon: Whatsapp, onClick: handleWhatsappClick },
    { label: "LinkedIn", icon: LinkedIn, onClick: handleLinkedInClick },
    { label: "Facebook", icon: Facebook, onClick: handleFacebookClick },
    { label: "Instagram", icon: Instagram, onClick: handleInstagramClick },
    { label: "Web", icon: Web, onClick: handleWebClick },
    { label: "Share", icon: Share, onClick: handleShareClick },
    { label: "Save contact", icon: Save, onClick: handleSaveClick },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e8f1fb] px-4 py-6 font-poppins">
      {/* Card wrapper */}
      <div className="relative w-full max-w-[380px] mx-auto rounded-3xl shadow-[0_20px_60px_rgba(30,80,160,0.18),0_4px_16px_rgba(0,0,0,0.10)] bg-white overflow-hidden pb-10">

        {/* ── Hero / top section ── */}
        <div
          className="relative h-[420px] overflow-hidden flex flex-col items-center bg-[linear-gradient(180deg,#52B9E5_-39.8%,#FFFFFF_19.58%,#FFFFFF_54.04%,#52B9E5_114.63%)]"
        >
          {/* Background watermark logo */}
          <img
            src={BgLogo}
            alt=""
            className="absolute right-[-30px] top-10 w-[220px] opacity-[0.5] pointer-events-none select-none"
          />

          {/* Aurify logo */}
          <div className="pt-[22px] flex flex-col justify-center items-center gap-0.5 z-10">
            <img src={AurifyNewLogo} alt="Aurify" className="h-20" />
            {/* <img src={AurifySubLogo} alt="Technologies" className="h-3.5 mt-0.5 opacity-85" /> */}
          </div>

          {/* Profile photo — bleeds over the white card */}
          <div className="w-[260px] h-[200px] absolute bottom-20 left-1/2 -translate-x-1/2 z-20">
            <img
              src="/prfileimage/aju-image.png"
              alt="Ajmal T.K"
              className="w-full h-full object-cover object-top block"
            />
          </div>
        </div>

        {/* ── White bottom card ── */}
        <div className="relative z-30 bg-white rounded-tr-[90px] -mt-30 pt-7 pb-8 px-6 mx-4 shadow-[0_20px_60px_rgba(30,80,160,0.18),0_4px_16px_rgba(0,0,0,0.10)]">

          {/* Name & title */}
          <div className="text-center mb-7">
            <h1 className="text-[22px] font-bold text-[#1D3E71] tracking-tight m-0">
              Ajmal T.K
            </h1>
            <p className="text-sm text-[#1D3E71] mt-1 font-normal">Business Manager</p>
          </div>

          {/* 3×3 Action grid */}
          <div className="grid grid-cols-3 gap-y-3 gap-x-2">
            {actions.map(({ label, icon, onClick }) => (
              <motion.button
                key={label}
                onClick={onClick}
                whileTap={{ scale: 0.88 }}
                transition={{ type: "spring", stiffness: 400, damping: 18 }}
                className="flex flex-col items-center gap-2 bg-transparent border-none cursor-pointer py-1"
              >
                {/* Icon bubble */}
                <div
                  className="w-[58px] h-[58px] rounded-2xl flex items-center justify-center shadow-[0_4px_12px_rgba(37,99,235,0.30)] bg-linear-to-b from-[#156AEF] to-[#32B4DB]"
                >
                  <img

                    src={icon}
                    alt={label}
                    className="w-[26px] h-[26px] brightness-0 invert"
                  />
                </div>
                <span className="text-[11px] text-[#444] font-medium text-center leading-tight">
                  {label}
                </span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Bottom-left decorative echo */}
        <div className="absolute -bottom-5 left-[-40px] opacity-80 z-40 pointer-events-none select-none">
          <img src={BgLogo} alt="" className="w-[120px]" />
        </div>
      </div>
    </div>
  );
};

export default Ajmal;
