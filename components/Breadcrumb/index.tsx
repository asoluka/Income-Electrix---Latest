'use client'
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface BreadcrumbProps {
  className?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ className = "" }) => {
  const pathname = usePathname();
  
  // Generate breadcrumb items from pathname
  const generateBreadcrumbs = () => {
    const segments = pathname.split('/').filter(Boolean);
    
    // Always start with Home
    const breadcrumbs: { label: string; href?: string }[] = [{ label: 'Home', href: '/' }];
    
    // Build path segments
    let currentPath = '';
    segments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      
      // Convert segment to readable label
      const label = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      // Last segment (current page) has no href
      const isCurrentPage = index === segments.length - 1;
      
      if (isCurrentPage) {
        breadcrumbs.push({ label });
      } else {
        breadcrumbs.push({ label, href: currentPath });
      }
    });
    
    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  // Don't show breadcrumb on home page
  if (pathname === '/') return null;

  return (
    <div className={`flex items-center justify-center gap-2 text-sm text-white/70 mt-8 ${className}`}>
      {breadcrumbs.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          {item.href ? (
            <Link 
              href={item.href} 
              className="hover:text-white transition-colors cursor-pointer"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-white">{item.label}</span>
          )}
          
          {index < breadcrumbs.length - 1 && <ArrowRight size={16} />}
        </div>
      ))}
    </div>
  );
};

export default Breadcrumb;