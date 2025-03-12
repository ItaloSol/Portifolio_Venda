"use client";
import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon: Icon,
}: {
  className?: string;
  title: string;
  description: string;
  header?: React.ReactNode;
  icon: React.ElementType;
}) => {
  return (
    <div
      className={cn(
        "group/bento row-span-1 rounded-xl border border-white/10 bg-white/5 p-4 transition-all duration-200 hover:bg-white/10",
        className
      )}
    >
      <div className="relative h-full w-full overflow-hidden rounded-xl">
        <div className="flex h-full flex-col justify-between">
          <div className="relative">
            {header}
            <div className="mb-2 mt-4 flex items-center gap-2">
              <Icon className="h-6 w-6 text-neutral-300" />
              <h3 className="text-xl font-semibold text-neutral-200">{title}</h3>
            </div>
            <p className="text-sm text-neutral-300">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};