import { ContactForm } from "./components/ContactForm";
import Projects from "./components/Projects";
// import BlogPosts from "./components/Blog";
import About from "./components/About";
import Experience from "./components/Experience";
import Hero from "./components/Hero";

export default async function HomePage() {

  return (
    <main className="max-w-7xl mx-auto p-8 flex flex-wrap">
      <Hero />
      <About />
      <Experience />
      <Projects />
      {/* <BlogPosts /> */}
      <ContactForm />
    </main>
  );
}
