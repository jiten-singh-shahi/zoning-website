import { Container } from "../layout/Container";

const logos = [
  "Partner 1",
  "Partner 2",
  "Partner 3",
  "Partner 4",
  "Partner 5",
];

export function LogoCloud() {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Trusted By
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex h-12 items-center justify-center text-muted-foreground opacity-60 grayscale transition-opacity hover:opacity-100 hover:grayscale-0"
              >
                <span className="text-sm font-medium">{logo}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
