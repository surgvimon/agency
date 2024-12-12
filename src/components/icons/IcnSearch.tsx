import { SVGProps } from "react"
const IcnSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <circle cx={11} cy={11} r={7} stroke="currentColor" strokeWidth={2} />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
      d="m20 20-3-3"
    />
  </svg>
)
export default IcnSearch;
