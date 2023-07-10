import DigitalClock from './DigitalClock';

const socials = [
  {
    name: 'Email',
    href: 'mailto: kareemope52@gmail.com',
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/talentless_dev',
  },
  {
    name: 'Github',
    href: 'https://github.com/talentlessDeveloper/',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ope-kareem-9b634a261',
  },
];

const Footer = () => {
  return (
    <footer id="contact">
      <div className="dev-container py-10 text-slate-200 flex justify-between">
        <DigitalClock />
        <div className="flex flex-wrap gap-1 lg:gap-3 justify-end lg:justify-start ">
          {socials.map((social) => (
            <a
              href={social.href}
              key={`social-${social.href}`}
              className="uppercase text-xl hover:text-white transition-all duration-500"
              target="_blank"
              rel="noreferrer"
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
