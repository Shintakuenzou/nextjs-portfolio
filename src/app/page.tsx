import { Profile } from "@/app/components/Profile";
import { SectionProjects } from "./components/SectionProjects";
import { SocialMidia } from "./components/SocialMidia";

export default function Home() {
  return (
    <main className="mx-auto mb-12 flex h-full min-w-[356px] select-none flex-col justify-center text-zinc-50">
      <section className="container mx-auto flex max-w-xl flex-col gap-6 mt-5">
        {/* @ts-expect-error Async Component */}
        <Profile />
      </section>

      <section className="container mx-auto flex max-w-xl flex-col gap-6 mt-5">
        <SectionProjects />
      </section>
      <section className="container mx-auto flex max-w-xl flex-col gap-6 mt-5">
        <SocialMidia />
      </section>
    </main>
  );
}
