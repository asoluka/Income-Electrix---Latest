import { ArrowRight, Zap } from "lucide-react";
import Image from "next/image";
import Breadcrumb from "../Breadcrumb";

export interface HeroProps {
  title: string;
  description: string;
  tag?: string;
  bgImage?: string;
  height?: string;
  overlayStyle?: string;
}

// Keep IHero for backward compatibility
interface IHero extends HeroProps {}

const Hero: React.FC<HeroProps> = ({title, description, tag, bgImage, height, overlayStyle}) => {
  return (
    <section className={`relative ${height ? height : 'h-[50vh]'} flex items-center justify-center overflow-hidden`}>
      {/* Background Image with Next.js Image */}
      {bgImage && (
        <>
          <Image
            src={bgImage}
            alt="Hero background"
            fill
            className="object-cover"
            sizes="100vw"
            priority
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            style={{
              filter: 'blur(1.5px)',
              transform: 'scale(1.1)'
            }}
          />
        </>
      )}
      
      {/* Overlay */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br ${overlayStyle ? overlayStyle : 'from-black/70 via-red-900/50 to-black/70'}`
      } />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-6">
        {tag && <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium mb-6">
          <Zap size={16} />
          {tag}
        </div>}
        
        <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
          {title}
        </h1>
        
        <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
        
        {/* Breadcrumb */}
        <Breadcrumb />
      </div>
    </section>
  )
}

export default Hero;