import { forwardRef } from "react";
import { cn } from "@/lib/cn";

type FormSelectProps = {
  label: string;
  name: string;
  required?: boolean;
  options: readonly { label: string; value: string }[];
  className?: string;
} & React.SelectHTMLAttributes<HTMLSelectElement>;

export const FormSelect = forwardRef<HTMLSelectElement, FormSelectProps>(
  function FormSelect(
    { label, name, required, options, className, ...rest },
    ref,
  ) {
    return (
      <div className={cn("flex flex-col gap-1.5", className)}>
        <label
          htmlFor={name}
          className="font-mono text-xs uppercase tracking-wider text-mist/60"
        >
          {label}
          {required && <span className="text-ember"> *</span>}
        </label>
        <select
          ref={ref}
          id={name}
          name={name}
          required={required}
          className="appearance-none rounded-md border border-dusk bg-transparent px-4 py-3 font-body text-sm text-white transition-colors focus:border-signal focus:outline-none"
          {...rest}
        >
          <option value="" className="bg-zero text-mist">
            Select…
          </option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} className="bg-zero">
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    );
  },
);
