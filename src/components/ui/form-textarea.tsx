import { forwardRef } from "react";
import { cn } from "@/lib/cn";

type FormTextareaProps = {
  label: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  rows?: number;
  className?: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const FormTextarea = forwardRef<HTMLTextAreaElement, FormTextareaProps>(
  function FormTextarea(
    { label, name, required, placeholder, rows = 5, className, ...rest },
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
        <textarea
          ref={ref}
          id={name}
          name={name}
          required={required}
          placeholder={placeholder}
          rows={rows}
          className="resize-y rounded-md border border-dusk bg-transparent px-4 py-3 font-body text-sm text-white placeholder:text-mist/60 transition-colors focus:border-signal focus:outline-none"
          {...rest}
        />
      </div>
    );
  },
);
