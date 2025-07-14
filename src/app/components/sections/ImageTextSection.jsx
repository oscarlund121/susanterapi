import Image from 'next/image';
import Container from '../ui/Container';

const ImageTextSection = ({ 
  title,
  imageSrc,
  imageAlt,
  children,
  className = '',
  centered = true,
  ...props 
}) => {
  return (
    <section className={`bg-white ${className}`} {...props}>
      <Container variant="full">
        <div className={`grid grid-cols-1 lg:grid-cols-2 ${centered ? 'lg:items-center lg:min-h-screen' : ''}`}>
          {/* Billede til venstre */}
          <div className="relative h-96 lg:h-screen bg-gray-200">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
            />
          </div>
          
          {/* Tekst til højre */}
          <Container variant="textSection" className={`py-8 lg:py-16 ${centered ? 'flex flex-col justify-center' : ''}`}>
            {title && (
              <div className="mb-8">
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-light text-gray-800 leading-tight tracking-wide">
                  {title}
                </h1>
              </div>
            )}
            
            {children}
          </Container>
        </div>
      </Container>
    </section>
  );
};

export default ImageTextSection;
