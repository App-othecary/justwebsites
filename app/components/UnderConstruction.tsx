export default function UnderConstruction() {
  return (
    <main className="flex h-screen w-screen items-center overflow-hidden bg-black">
      <picture>
        <source media="(min-width: 1024px)" srcSet="/under-construction-desktop.png" />
        <source media="(min-width: 640px)" srcSet="/under-construction-tablet.png" />
        <img
          src="/under-construction-mobile.png"
          alt="Site under construction"
          className="h-full w-full object-contain"
        />
      </picture>
    </main>
  );
}