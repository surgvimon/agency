import { cn } from "@/helpers/clsx";

const LayoutProvider = ({
    children,
    className,
  }: Readonly<{
    className?: string;
    children: React.ReactNode;
  }>) => {
  return (
    <html lang="en">
      <body className={cn(`relative overflow-x-hidden w-full ` , className)}>
        {children}
      </body>
    </html>
  )
}

export default LayoutProvider