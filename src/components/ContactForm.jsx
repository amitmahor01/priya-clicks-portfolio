export default function ContactForm() {
  return (
    <form className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
      <div className="mb-6">
        <label className="block text-gray-700 mb-2" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
          placeholder="Your Name"
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 mb-2" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
          placeholder="Your Email"
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 mb-2" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
          rows="5"
          placeholder="Your Message"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-accent text-white py-2 px-4 rounded-lg hover:bg-opacity-90 transition duration-300"
      >
        Send Message
      </button>
    </form>
  );
} 