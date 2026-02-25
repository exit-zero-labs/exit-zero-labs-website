import { forwardRef } from "react";
import { cn } from "@/lib/cn";

type FormInputProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  function FormInput(
    { label, name, type = "text", required, placeholder, className, ...rest },
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
        <input
          ref={ref}
          id={name}
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className="rounded-md border border-dusk bg-transparent px-4 py-3 font-body text-sm text-white placeholder:text-mist/60 transition-colors focus:border-signal focus:outline-none"
          {...rest}
        />
      </div>
    );
  },
);
