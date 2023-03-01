import Hero from "@/components/Hero";
import { TextField, Button } from "@mui/material";
import { Container } from "@mui/system";

const contact = () => {
  return (
    <div>
      <Hero
        heading="Contact Us"
        message="Reach out to us to so that we can work together on an optimum solution for your business."
      />
      <form className="flex flex-col items-center" onSubmit>
        <ul>
          <li>
            <label for="name">Name</label>
            <input type="text" required />
          </li>
          <li>
            <label for="email">Email</label>
            <input type="email" />
          </li>
          <li>
            <label for="message">Message</label>
            <textarea name="user_msg" id="message_by_user"></textarea>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default contact;
