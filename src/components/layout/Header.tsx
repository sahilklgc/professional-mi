import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { Menu, Building2, ChevronRight } from 'lucide-react';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

const services = [
  { title: 'Construction', href: '/services/construction', description: 'Comprehensive commercial and industrial construction services.' },
  { title: 'Facility Management', href: '/services/facility-management', description: 'End-to-end maintenance and management of your facilities.' },
  { title: 'Project Management', href: '/services/project-management', description: 'Expert oversight to keep your projects on time and budget.' },
  { title: 'Procurement', href: '/services/procurement', description: 'Strategic sourcing and supply chain solutions.' },
  { title: 'Industrial Services', href: '/services/industrial-services', description: 'Specialized industrial support and maintenance.' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/20 bg-white/70 backdrop-blur-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-8">

          {/* FANCY LOGO */}
          <Link href="/" className="flex items-center group shrink-0">
            <img 
              src="/logo.png" 
              alt="PCCI Logo" 
              className="h-[100px] md:h-[120px] lg:h-[140px] w-auto object-contain mix-blend-multiply -my-10 -ml-6 md:-ml-8 -mr-4 group-hover:opacity-90 transition-opacity duration-300" 
            />
          </Link>

        </div>

        <div className="flex items-center gap-6">
          {/* DESKTOP NAV */}
          <div className="hidden lg:flex">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                <NavigationMenuItem>
                  <NavigationMenuLink render={<Link href="/" />} className={cn(navigationMenuTriggerStyle(), "bg-transparent text-slate-600 hover:bg-slate-100/80 hover:text-blue-600 text-[15px] font-bold rounded-full px-5 h-11 transition-all duration-300 ease-out")}>
                    Home
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink render={<Link href="/about" />} className={cn(navigationMenuTriggerStyle(), "bg-transparent text-slate-600 hover:bg-slate-100/80 hover:text-blue-600 text-[15px] font-bold rounded-full px-5 h-11 transition-all duration-300 ease-out")}>
                    About
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-slate-600 hover:bg-slate-100/80 hover:text-blue-600 text-[15px] font-bold rounded-full px-5 h-11 transition-all duration-300 ease-out data-[state=open]:bg-slate-100/80 data-[state=open]:text-blue-600">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white rounded-2xl shadow-xl border-slate-100">
                      {services.map((service) => (
                        <li key={service.title}>
                          <NavigationMenuLink render={<Link href={service.href} />} className="group block select-none space-y-1 rounded-xl p-4 leading-none no-underline outline-none transition-all hover:bg-blue-50 focus:bg-blue-50">
                            <div className="flex items-center text-sm font-bold leading-none text-slate-900 group-hover:text-blue-700">
                              {service.title}
                              <ChevronRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-1 transition-all ml-auto text-blue-600" />
                            </div>
                            <p className="line-clamp-2 text-xs leading-snug text-slate-500 mt-2 font-medium">
                              {service.description}
                            </p>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink render={<Link href="/contact" />} className={cn(navigationMenuTriggerStyle(), "bg-transparent text-slate-600 hover:bg-slate-100/80 hover:text-blue-600 text-[15px] font-bold rounded-full px-5 h-11 transition-all duration-300 ease-out")}>
                    Contact
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <Sheet>
            <SheetTrigger className="lg:hidden inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-white shadow-sm border border-slate-200 text-sm font-medium transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 h-11 w-11" aria-label="Open Menu">
              <Menu className="h-5 w-5 text-slate-700" />
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-white/95 backdrop-blur-xl border-r-0 shadow-2xl">
              <VisuallyHidden>
                <SheetTitle>Navigation Menu</SheetTitle>
                <SheetDescription>Main navigation for the website</SheetDescription>
              </VisuallyHidden>
              <div className="flex flex-col gap-8 py-8">
                <Link href="/" className="flex items-center shrink-0">
                  <img src="/logo.png" alt="PCCI Logo" className="h-[110px] w-auto object-contain mix-blend-multiply -my-8 -ml-6" />
                </Link>
                <nav className="flex flex-col gap-6">
                  <Link href="/" className="text-xl font-bold text-slate-700 hover:text-blue-600 transition-colors">Home</Link>
                  <Link href="/about" className="text-xl font-bold text-slate-700 hover:text-blue-600 transition-colors">About</Link>
                  <div className="flex flex-col gap-4">
                    <span className="text-xl font-bold text-slate-400">Services</span>
                    <div className="flex flex-col gap-3 pl-4 border-l-2 border-slate-100">
                      {services.map((service) => (
                        <Link key={service.title} href={service.href} className="text-lg font-semibold text-slate-600 hover:text-blue-600 transition-colors">
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <Link href="/contact" className="text-xl font-bold text-slate-700 hover:text-blue-600 transition-colors">Contact</Link>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
