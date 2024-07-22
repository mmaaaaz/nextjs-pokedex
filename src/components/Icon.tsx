import { cn } from "@/lib/utils"
import { FC, SVGProps } from "react"

interface IconProps extends SVGProps<SVGSVGElement> {
  name: string
  className?: string
}

const Icon: FC<IconProps> = ({ name, className, ...props }) => (
  <svg {...props} className={cn("h-4 w-4 fill-current", className)}>
    <title>{name}</title>
    <use href={`/sprite.svg#${name}`} />
  </svg>
)

export default Icon
