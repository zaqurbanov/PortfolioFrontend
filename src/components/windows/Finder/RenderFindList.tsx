import useLocationStore from "#store/useLocation";

const RenderFindList = ({
  renderName,
  items,
}: {
  renderName: string;
  items: any;
}) => {
  const { activeLocation, setActiveLocation } = useLocationStore();

  return (
    <>
    
    <div>
      <h3>{renderName}</h3>
      <ul>
        {items.map((item:any) => {
          return (
            <li
              key={item.id}
              onClick={() => setActiveLocation(item)}
              className={` ${
                activeLocation?.id === item.id
                  ? "active pl-1 "
                  : "not-active"
              }`}
            >
              <img src={item.icon} alt={item.name} className={`w-4`} />
              <p
                className={`truncate text-sm font-medium ${activeLocation?.id === item.id ? "pl-1" : "not-active"} `}
              >
                {item.name}
              </p>
            </li>
          );
        })}
      </ul>

    </div>
   
    </>

  );
};

export default RenderFindList;
