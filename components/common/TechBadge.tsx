function TechBadge({text}: {text: string}) {
  return (
    <div className="tech-badge-gradient rounded-md px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary-text md:text-sm">
      {text}
    </div>
  );
}

export default TechBadge;
