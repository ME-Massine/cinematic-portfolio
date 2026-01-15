import Container from "@/components/layout/Container";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Container>
        <h1 className="mt-32 font-display text-6xl">
          Cinematic Frontend Experiences
        </h1>
        <p className="mt-6 max-w-xl text-muted">
          Building visually striking, interaction-driven web interfaces.
        </p>
      </Container>
    </main>
  );
}
