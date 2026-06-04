import { personalInfo } from "@/lib";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    {
      icon: MapPin,
      label: "Location",
      value: personalInfo.location,
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      href: personalInfo.linkedin,
      color: "hover:text-blue-600 dark:hover:text-blue-400",
    },
    {
      icon: FaGithub,
      label: "GitHub",
      href: personalInfo.github,
      color: "hover:text-slate-900 dark:hover:text-white",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            I&apos;m always open to discussing new opportunities, collaborations, or just having a
            chat about AI/ML and technology.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((item) => {
              const Icon = item.icon;
              const content = (
                <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700">
                  <div className="w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-blue-600 dark:text-blue-400" size={28} />
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                    {item.label}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm break-words">
                    {item.value}
                  </p>
                </div>
              );

              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  className="transform hover:scale-105 transition-transform"
                >
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}
          </div>

          {/* Social Links */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
              Connect With Me
            </h3>
            <div className="flex justify-center gap-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-14 h-14 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 ${social.color} transition-all duration-300 transform hover:scale-110 shadow-md hover:shadow-xl`}
                    aria-label={social.label}
                  >
                    <Icon size={28} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
