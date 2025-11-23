import ContactUs from "./contactus";







export default function Page() {


  return (
    <div className="relative w-full h-auto py-20 flex flex-col justify-center items-center bg-gray-100">

    <div className="bg-gray-100 py-24">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
        <p className="text-gray-700 mb-8">
          Have questions, feedback, or need assistance? Our team is ready to help you. 
          We strive to respond promptly to every inquiry and ensure you have the support you need.
        </p>
        <p className="text-gray-700 mb-12">
          Whether it’s about our services, partnerships, or general information, don’t hesitate to reach out. 
          You can contact us through phone or email, and we’ll get back to you as soon as possible.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Phone Section */}
          <div className="bg-white p-8 rounded-lg flex flex-col items-center hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-black/30">
          <img src="/telephone.png" alt="Telephone PNG" className="w-10 h-10 my-2" />
            <h3 className="text-2xl font-semibold mb-4">Phone</h3>
            <a className="text-blue-700/85 hover:underline mb-2" href="https://wa.me/0516162000" target="_blank">051 616 2000</a>
            <a className="text-blue-700/85 hover:underline" href="https://wa.me/0516164000" target="_blank">051 616 4000</a>
            <p className="text-gray-500 mt-4 text-sm">
              Our phone lines are open Monday to Friday, 9 AM to 6 PM.
            </p>
          </div>

          {/* Email Section */}
          <div className="bg-white p-8 rounded-lg flex flex-col items-center hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-black/30">
            <img src="/mail.png" alt="Email PNG" className="w-10 h-10 my-2" /> 
            <h3 className="text-2xl font-semibold mb-4">Email</h3>
            <p className="text-gray-700 mb-2">
              <a href="mailto:support@nubiamining.com" className="text-blue-700/85 hover:underline">support@nubiamining.com</a>
            </p>
            <p className="text-gray-700 mb-2">
              <a href="mailto:info@nubiamining.com" className="text-blue-700/85 hover:underline">info@nubiamining.com</a>
            </p>
            <p className="text-gray-500 mt-4 text-sm">
              We aim to respond to emails within 24 hours on business days.
            </p>
          </div>
        </div>

        <p className="text-gray-700 mt-12">
          Your feedback and inquiries are important to us. Don’t hesitate to reach out — we are always ready to assist and provide you with the best possible support.
        </p>
      </div>
    </div>

      <ContactUs />
    </div>
  );
}
