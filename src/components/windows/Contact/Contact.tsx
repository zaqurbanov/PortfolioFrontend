import { socials } from "#constants/index";
import WindowHeader from "#hoc/WindowHeader";
import WIndowWrapper from "#hoc/WindowWrapper";

const Contact = () => {
  return (
    <WIndowWrapper windowKey="contact" windowName="contact">
      <>
        <WindowHeader windowKey="contact" name="Contact" />

        <div className="p-5 space-y-5">
          <img
            src="/images/me.jpeg"
            alt="profile"
            className="w-20 rounded-full"
          />

          <h3>Let's get in touch</h3>
          <p>Have a question or want to work together?</p>

          <ul>
            {socials.map(({ id, bg, icon, link, text }) => (
              <li key={id} style={{ backgroundColor: bg }}>
                <a href={link} target="_blank">
                  <img src={icon} className="size-5" alt={text} />
                  <p>{text}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </>
    </WIndowWrapper>
  );
};

export default Contact;
