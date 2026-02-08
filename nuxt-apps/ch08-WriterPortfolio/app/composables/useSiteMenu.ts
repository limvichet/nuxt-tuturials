import type { NavLink, FooterLink } from "~/types/siteMenu";

export const useSiteMenu = () => {

    const navItems = ref<NavLink[]>([
        { id: 1, label: 'Home', path: '/' },
        { id: 2, label: 'Articles', path: '#articles' },
        { id: 3, label: 'About', path: '#about' },
        { id: 4, label: 'Contact', path: '#contact' },
    ]);

    const footerLinks = ref<FooterLink[]>([
        { id: 1, label: 'Privacy Policy', path: '/privacy' },
        { id: 2, label: 'Terms of Service', path: '/terms' },
        { id: 3, label: 'About Us', path: '/about' }
    ]);

    return {
        navItems,
        footerLinks
    };

};