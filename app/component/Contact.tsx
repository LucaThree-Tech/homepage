import { LampContainer } from "./aceternity-ui/lamps";

export default function Contact() {
  return (
    <LampContainer>
      <h2 className="text-3xl font-bold mb-8 text-center text-white">
        Contact Us
      </h2>
      <form className="max-w-md mx-auto">
        <input
          type="text"
          placeholder="Name"
          className="w-full mb-4 p-2 rounded"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-2 rounded"
        />
        <textarea
          placeholder="Message"
          className="w-full mb-4 p-2 rounded"
          rows={4}
        ></textarea>
        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded w-full"
        >
          Send Message
        </button>
      </form>
    </LampContainer>
  );
}
