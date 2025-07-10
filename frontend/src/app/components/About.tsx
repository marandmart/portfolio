export default function About() {
  const paragraphClass = "text-base mb-4";
  return (
    <section className="mb-16 pt-3 md:w-[50%] md:h-[100vh] md:flex md:flex-col md:items-center md:justify-center" id="about">
      <h2 className="text-4xl font-semibold mb-2 md:hidden">About</h2>
      <p className={paragraphClass}>
        Hello! I&apos;m a Software Developer with a passion for building
        beautiful, functional, and user-centric web applications. Over the past
        three years, I&apos;ve had the opportunity to work with incredible teams
        on a variety of exciting challenges.
      </p>
      <p className={paragraphClass}>
        At <strong>The Brooklyn Brothers</strong>, I delivered projects for
        major clients like <strong>Unilever</strong> and{" "}
        <strong>Mounjaro</strong>, where my work ranged from building new sites
        from the ground up to providing production support for existing
        applications. As a freelancer for <strong>Lunars Startup Studio</strong>
        , I helped build and finalize core features for a new commerce
        application. Before that, at <strong>NSH Technologies</strong>, I
        focused on full-stack development, implementing large-scale B2B and B2C
        enterprise e-commerce websites and building custom SFCC integration for
        anti-fraud payment verification.
      </p>
      <p className={paragraphClass}>
        I am a strong believer in collaboration and thrive on turning great
        ideas into reality. I&apos;m always eager to learn and apply my skills
        to create digital experiences that make a real impact.
      </p>
    </section>
  );
}
