import { SVGProps } from "react"
const IcnDell = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <circle cx={12} cy={12} r={9} stroke="currentColor" strokeWidth={2} />
    <path stroke="currentColor" strokeWidth={2} d="m9 15 6-6M15 15 9 9" />
  </svg>
)

export default IcnDell;