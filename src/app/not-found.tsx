import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="bg-white py-32 sm:py-40">
      <Container className="text-center">
        <p className="text-6xl font-bold text-vroom-green">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-vroom-ink sm:text-4xl">
          Looks like this page has gone off the road.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base text-vroom-grey-700">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Button href="/" variant="primary">Back to VROOM</Button>
          <Button href="/contact" variant="secondary">Get Started</Button>
        </div>
      </Container>
    </section>
  );
}
