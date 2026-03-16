export default function Contact() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-[calc(100vh-8.5rem)] flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1586244897784-9240a90835d0?q=80&w=1170&auto=format&fit=crop')",
      }}
    >
      {/* Overlay pentru text */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative max-w-3xl text-center text-white px-6">
        <h1 className="text-5xl font-bold mb-6">Contact</h1>

        <p className="text-lg mb-4">
          <strong>Email:</strong> contact@momentedulci.ro
        </p>

        <p className="text-lg mb-4">
          <strong>Telefon:</strong> 0720 000 000
        </p>

        <p className="text-lg mb-6">
          <strong>Program:</strong> Luni - Vineri 09:00 - 18:00
        </p>

        <p className="text-lg mb-6">
          Pentru orice întrebare sau comandă specială, ne puteți contacta prin
          email sau telefon, iar echipa noastră vă va răspunde cât mai rapid
          posibil.
        </p>

        {/* Social Media */}
        <div className="flex justify-center gap-6 text-lg font-semibold">
          <a
            href="https://www.instagram.com/momentemagicesidulci/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-500 hover:bg-pink-600 px-5 py-2 rounded-lg transition"
          >
            Instagram
          </a>

          <a
            href="https://www.facebook.com/people/Momente-Magice-si-Dulci/61580587986865/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-teal-500 hover:bg-teal-600 px-5 py-2 rounded-lg transition"
          >
            Facebook
          </a>
        </div>
      </div>
    </section>
  );
}
