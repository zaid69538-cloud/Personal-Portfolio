import { motion } from 'framer-motion';
import SectionHeader from '../ui/SectionHeader';

const certificateImages = [
  {
    src: '/certificates/microsoft-azure-fundamentals.png',
    alt: 'Microsoft Certified Azure Fundamentals certificate awarded to Mohd Zaid Khan',
    title: 'Microsoft Azure Fundamentals (AZ-900)',
    description: 'A foundational Microsoft Azure certification covering cloud concepts, core Azure services, security, governance, and pricing fundamentals.',
  },
  {
    src: '/certificates/be10x-ai-tools-workshop.png',
    alt: 'be10x AI Tools Workshop certificate awarded to Mohd Zaid Khan',
    title: 'be10x AI Tools Workshop',
    description: 'A practical workshop certificate focused on using AI tools and ChatGPT to improve learning, productivity, and everyday problem solving.',
  },
];

export const CertificatesSection: React.FC = () => {
  return (
    <section id="certifications" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Certificates"
          title="Certifications & Accreditations"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {certificateImages.map((certificate, index) => (
            <motion.div
              key={certificate.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="rounded-3xl bg-slate-900/70 border border-white/10 p-3 sm:p-4 backdrop-blur-xl shadow-xl"
            >
              <div className="relative overflow-hidden rounded-2xl group">
                <img
                  src={certificate.src}
                  alt={certificate.alt}
                  className="block w-full h-auto rounded-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-slate-950 via-slate-950/95 to-transparent px-5 pb-5 pt-14 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <h3 className="text-base font-bold text-white">{certificate.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-300">{certificate.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
