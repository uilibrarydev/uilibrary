export const attach = (
  iconColor: string,
  iconSize: string
): string => `<svg width=${iconSize} height=${iconSize} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.244 9.069L6.93002 1.756C5.48702 0.418 3.24302 0.46 1.85002 1.852C0.459023 3.244 0.417023 5.488 1.75502 6.932L3.44302 8.619L4.23602 7.826L2.54802 6.138C1.87102 5.508 1.59202 4.557 1.82102 3.66C2.05102 2.763 2.75102 2.063 3.64802 1.834C4.54502 1.604 5.49502 1.884 6.12602 2.561L13.438 9.873C14.116 10.504 14.394 11.455 14.165 12.351C13.936 13.248 13.236 13.949 12.339 14.178C11.442 14.407 10.492 14.128 9.86102 13.451L6.41302 10.002C6.05502 9.647 5.91402 9.127 6.04302 8.64C6.17302 8.152 6.55302 7.77 7.03902 7.638C7.52602 7.506 8.04602 7.644 8.40402 8L10.187 9.783L10.98 8.99C10.98 8.99 9.16902 7.173 9.15202 7.168C8.15602 6.248 6.61002 6.278 5.65202 7.238C4.69202 8.198 4.66402 9.744 5.58602 10.739L9.06802 14.244C10.511 15.582 12.755 15.54 14.148 14.148C15.539 12.756 15.581 10.512 14.243 9.068L14.244 9.069Z" fill=${iconColor} />
  </svg>`
