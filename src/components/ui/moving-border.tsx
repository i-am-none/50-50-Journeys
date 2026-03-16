"use client";
import { cn } from "@/lib/utils";
import { useRef, MouseEvent } from "react";

export const MovingBorder = ({
  children,
  className,
  containerClassName,
  borderClassName,
  duration = 2000,
  as: Component = "button",
  ...otherProps
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  as?: React.ElementType;
  [key: string]: unknown;
}) => {
  const ref = useRef<HTMLElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    ref.current.style.setProperty("--mouse-x", `${x}%`);
    ref.current.style.setProperty("--mouse-y", `${y}%`);
  };

  return (
    <Component
      ref={ref}
      onMouseMove={handleMouseMove}
      className={cn(
        "relative overflow-hidden rounded-2xl p-[2px] group",
        containerClassName
      )}
      {...otherProps}
    >
      <div
        className={cn(
          "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
          "bg-[radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),#20603d_0%,transparent_60%)]",
          borderClassName
        )}
      />
      <div className={cn("relative", className)}>{children}</div>
    </Component>
  );
};

export const GlowingButton = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  [key: string]: unknown;
}) => {
  return (
    <MovingBorder
      as="button"
      containerClassName="bg-[#20603d]"
      className={cn(
        "bg-[#20603d] text-white px-8 py-4 rounded-2xl font-bold uppercase tracking-widest text-sm inline-flex items-center gap-2",
        className
      )}
      {...props}
    >
      {children}
    </MovingBorder>
  );
};
