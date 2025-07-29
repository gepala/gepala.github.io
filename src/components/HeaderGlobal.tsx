interface HeaderGlobalProps {
  title: string;
  description: string;
}

export default function HeaderGlobal({
  title,
  description,
}: HeaderGlobalProps) {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 pt-10 h-42">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl mb-6 text-yellow-500">{title}</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
