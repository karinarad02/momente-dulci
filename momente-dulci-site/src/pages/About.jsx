export default function About() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-[calc(100vh-8.5rem)] flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1430025460695-1ff7b3c13074?q=80&w=1170&auto=format&fit=crop')",
      }}
    >
      {/* Overlay pentru text */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative max-w-4xl text-center text-white px-6">
        <h1 className="text-5xl font-bold mb-6">Despre noi</h1>

        <p className="text-lg mb-4">
          Momente Magice și Dulci este o cofetărie online fondată pentru a aduce
          clienților deserturi de calitate, realizate din ingrediente naturale
          și proaspete. Ne mândrim cu atenția la detalii și cu rețetele
          artizanale.
        </p>

        <p className="text-lg mb-4">
          Afacerea s-a dezvoltat rapid în mediul online prin promovare pe rețele
          sociale și un website dedicat, oferind o experiență completă pentru
          clienți: descoperirea produselor, plasarea comenzilor și interacțiunea
          cu echipa noastră.
        </p>

        <p className="text-lg mb-4">
          Echipa noastră este formată din cofetari pasionați, care creează
          deserturi personalizate pentru orice eveniment, de la aniversări și
          nunți, până la petreceri corporate sau cadouri speciale.
        </p>

        <p className="text-lg mb-4">
          Credem că fiecare desert trebuie să fie un moment magic, nu doar un
          produs, și de aceea investim timp în prezentare, ingrediente și
          combinații de arome care să impresioneze vizual și gustativ.
        </p>

        <p className="text-lg mb-4">
          Alături de rețetele clasice, inovăm constant, aducând deserturi cu
          ingrediente locale și aromate, respectând sezonul și tendințele din
          domeniu.
        </p>
      </div>
    </section>
  );
}
