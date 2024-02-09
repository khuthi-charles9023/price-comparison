import { Input } from "@/components/ui/input";

import { 
  JSXElementConstructor,
  Key,
  PromiseLikeOfReactNode,
  ReactElement,
  ReactFragment,
  ReactPortal,
} from "react";

type Suggestion = {
  id: Key | null | undefined;
  place_name:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | PromiseLikeOfReactNode
    | null
    | undefined;
};


export default function Geocode({
  value,
  onChange,
  suggestions,
  onSelect,
}: any) {
  const handleItemClick = (result: any) => {
    onSelect(result);
  };

  return (
    <div className=" rounded-lg ">
      <Input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search"
      />

<ul className="py-2">
        {suggestions?.map((suggestion: Suggestion) => (
          <li
            className="text-left cursor-pointer text-sm w-56 p-4 py-2   hover:bg-slate-300  py-2 bg-slate-100 rounded-sm"
            key={suggestion.id}
            onClick={() => handleItemClick(suggestion)}
          >
            {suggestion.place_name}
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}
