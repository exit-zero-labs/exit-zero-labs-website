import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zero px-6 text-center">
      <p className="font-mono text-6xl font-bold text-white md:text-8xl">
        exit 1
      </p>

      <p className="mt-4 font-mono text-lg text-mist">
        process terminated unexpectedly
      </p>

      <p className="mt-8 max-w-md font-body text-base text-mist/80">
        Whatever you were looking for, it is not here. It may have never been
        here. The logs are inconclusive.
      </p>

      <Link
        href="/"
        className="mt-10 inline-block rounded-md bg-signal px-6 py-3 font-body text-sm font-semibold text-zero transition-transform hover:scale-[1.03] active:scale-[0.98]"
      >
        Go back to exit 0
      </Link>
    </div>
  );
}
