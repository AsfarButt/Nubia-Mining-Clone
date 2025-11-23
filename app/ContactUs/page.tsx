







export default function Page() {


  return (
    <div className="relative w-full h-auto py-20 flex flex-col justify-center items-center bg-gray-100">

      <div className="relative w-full"></div>

      <div className="w-[90%] max-w-140 bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-blue-950/95 mb-6 text-center">Contact Us</h1>

        <form className="space-y-5">
          <div>
            <label className="block mb-1 font-medium font-sans text-blue-950/85">Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium font-sans text-blue-950/85">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium font-sans text-blue-950/85">Description</label>
            <textarea
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none h-32"
              placeholder="Write your message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-950/85 hover:bg-blue-950/95 text-white py-3 rounded-lg font-semibold transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
