import CaseStudy from "../pages/CaseStudy";

/**
 * Create page URLs for React Router
 * @param {string} pageName - Component/page name
 * @returns {string} base path for the page
*/
export function createPageUrl(pageName: string) {
  const routes : Record<string, string> = {
    Welcome: "/",
    About: "/about-me",
    ContactMe: "/contact-me",
    CaseStudy: "/case-study/job.ai",
  };

  return routes[pageName] || "/";
}
