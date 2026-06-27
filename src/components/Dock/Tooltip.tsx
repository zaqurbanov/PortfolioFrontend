const Tooltip = ({ name }: { name: string }) => {
  return (
    <p
      className="absolute left-1/2 -translate-x-1/2 -top-11
      px-2.5 py-1 text-[11px] font-medium text-white/90
      bg-gray-900/80 backdrop-blur-md border border-white/10
      rounded-md shadow-lg opacity-0
      group-hover:opacity-100 transition-opacity duration-150
      whitespace-nowrap pointer-events-none"
    >
      {name}
    </p>
  );
};

export default Tooltip;
