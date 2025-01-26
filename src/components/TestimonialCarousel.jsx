export default function TestimonialCarousel({ testimonials }) {
  return (
    <div className="bg-secondary py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-serif text-center mb-8">Client Testimonials</h2>
        <div className="flex overflow-x-auto space-x-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="min-w-[300px] bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 italic">"{testimonial.text}"</p>
              <p className="mt-4 text-gray-600 font-semibold">- {testimonial.client}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 