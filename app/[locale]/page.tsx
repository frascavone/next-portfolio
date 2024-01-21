import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

export default function IndexPage() {
    return (
        <main>
            <Hero />

            <Skills />

            <Projects />
        </main>
    );
}
