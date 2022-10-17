import { StoreItem } from "../components/StoreItem";
import storeItems from "../data/items.json";

export function Store() {
  return (
    <>
      <h1 className="text-4xl mb-2 font-semibold">Store</h1>
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {storeItems.map((item) => (
          <StoreItem {...item} key={item.id} />
        ))}
      </div>
    </>
  );
}
