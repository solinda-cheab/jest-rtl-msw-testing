interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchInput({
  value,
  onChange,
}: SearchInputProps) {
  return (
    <div>
      <label htmlFor="search">
        Search applications
      </label>

      <input
        id="search"
        type="text"
        placeholder="Search by company, position, or location"
        value={value}
        onChange={(event) =>
          onChange(event.target.value)
        }
      />
    </div>
  );
}