import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Filters = () => {
  return (
    <Select>
      <SelectTrigger className="">
        <SelectValue placeholder="Select a Filter" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="newest">Newest</SelectItem>
          <SelectItem value="recommended">Recommended</SelectItem>
          <SelectItem value="frequent">Frequent</SelectItem>
          <SelectItem value="unanswered">Unanswered</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default Filters;
