import { ChevronRight, Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  // Don't show breadcrumbs on home page
  if (location.pathname === '/') {
    return null;
  }

  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    ...pathnames.map((name, index) => {
      const path = `/${pathnames.slice(0, index + 1).join('/')}`;
      const displayName = name
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      return { name: displayName, path };
    })
  ];

  return (
    <nav className="bg-muted/30 py-3 border-b">
      <div className="container mx-auto px-4 max-w-7xl">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbItems.map((item, index) => (
            <li key={item.path} className="flex items-center">
              {index > 0 && <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />}
              {index === 0 ? (
                <Link 
                  to={item.path} 
                  className="flex items-center hover:text-primary transition-colors"
                >
                  <Home className="h-4 w-4 mr-1" />
                  {item.name}
                </Link>
              ) : index === breadcrumbItems.length - 1 ? (
                <span className="text-muted-foreground font-medium">
                  {item.name}
                </span>
              ) : (
                <Link 
                  to={item.path} 
                  className="hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;