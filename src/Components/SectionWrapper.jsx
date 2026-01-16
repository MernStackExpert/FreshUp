// components/SectionWrapper.jsx
export default function SectionWrapper({ children, bg = "bg-base-100", title }) {
  return (
    <section className={`py-24 ${bg} border-b border-base-300`}>
      <div className="container mx-auto px-6">
        {title && (
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold tracking-tight">{title}</h2>
            <div className="w-20 h-1.5 bg-primary mx-auto mt-4 rounded-full"></div>
          </div>
        )}
        {children}
      </div>
    </section>
  );
}