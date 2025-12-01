const Tooltip = ({ name }: { name: string }) => {
  return (
    <p
      className="  absolute left-1/2 -translate-x-1/2 -top-12
      px-2 py-1 text-xs text-white bg-black rounded opacity-0
      group-hover:opacity-100 group-hover:translate-y-0 transition-all
      whitespace-nowrap pointer-events-none"
    >
      {name}
    </p>
  );
};

export default Tooltip;
