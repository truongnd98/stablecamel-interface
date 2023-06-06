import { format } from "date-fns";

export function formatDateTransform(style: string, valueSelector: (inp:any)=> any): (inp: any) => string {
  return (inp: any) => {
    return format(new Date(valueSelector(inp)), style)
  }
}