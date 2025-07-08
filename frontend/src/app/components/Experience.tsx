export default function Experience() {
  const listItemClass = "bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-sm";

  return (
    <section className="mb-16">
      <h2 className="text-4xl font-bold mb-2">Experience</h2>
      <h3 className="text-2xl font-bold mb-2">The Brooklyn Brothers</h3>
      <p className="mb-2 font-semibold">Remote Full Time, Jun 2024 - Jun 2025</p>
      <p className="mb-4">
        Enhanced and maintained websites for Unilever brands by resolving bug
        fixes, optimizing performance, and improving SEO and accessibility.
        Contributed to development and testing of project for Mounjaro.
        Collaborated with designers, project managers, and tech leads on the
        development of a new and existing projects.
      </p>
      <ul className="flex flex-wrap gap-2 mb-8">
        <li className={listItemClass}>Gatsby.js</li>
        <li className={listItemClass}>React.js</li>
        <li className={listItemClass}>TypeScript</li>
        <li className={listItemClass}>Tailwind</li>
        <li className={listItemClass}>GraphQL</li>
        <li className={listItemClass}>Node.js</li>
        <li className={listItemClass}>Prisma</li>
        <li className={listItemClass}>MySQL</li>
        <li className={listItemClass}>Fastify</li>
        <li className={listItemClass}>Sanity CMS</li>
        <li className={listItemClass}>Cypress</li>
        <li className={listItemClass}>Adobe AEM</li>
      </ul>
      <h3 className="text-2xl font-bold mb-2">Lunars Startup Studio</h3>
      <p className="mb-2 font-semibold">Remote Freelance, Oct 2024 - Nov 2024</p>
      <p className="mb-4">
        Developed responsive, modern front-end interfaces for a new e-commerce
        application under tight deadlines. Collaborated with back-end teams to
        ensure seamless feature integration and a consistent user interface
        using a modern tech stack.
      </p>
      <ul className="flex flex-wrap gap-2 mb-8">
        <li className={listItemClass}>Next.js</li>
        <li className={listItemClass}>React.js</li>
        <li className={listItemClass}>TypeScript</li>
        <li className={listItemClass}>Tailwind</li>
        <li className={listItemClass}>Node.js</li>
        <li className={listItemClass}>Prisma</li>
      </ul>
      <h3 className="text-2xl font-bold mb-2">NSH Technologies</h3>
      <p className="mb-2 font-semibold">Remote Full Time, Jul 2022 - Jun 2024</p>
      <p className="mb-4">
        Developed and tested reusable React components across 5+ large-scale B2B
        and B2C e-commerce platforms, enabling the rapid development of
        scalable, client-specific websites.
      </p>
      <ul className="flex flex-wrap gap-2 mb-8">
        <li className={listItemClass}>React.js</li>
        <li className={listItemClass}>TypeScript</li>
        <li className={listItemClass}>Node.js</li>
        <li className={listItemClass}>Oracle Cloud Commerce</li>
        <li className={listItemClass}>Salesforce Cloud Commerce</li>
      </ul>
    </section>
  );
}
