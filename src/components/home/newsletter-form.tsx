"use client";

export function NewsletterForm() {
  return (
    <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
      <input type="email" required placeholder="Adresa ta de email" className="input-luxury flex-1 text-center sm:text-left" />
      <button type="submit" className="btn-primary shrink-0">
        Abonează-te
      </button>
    </form>
  );
}
