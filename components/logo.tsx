/** Light Trove mark — for dark backgrounds (docs). */
export function TroveLogo({ size = 28 }: { size?: number }) {
  return (
    <svg viewBox="0 0 512 512" width={size} height={size} fill="none" aria-hidden>
      <rect
        x="47"
        y="48"
        width="418"
        height="416"
        rx="109"
        fill="#F7F8FA"
        stroke="#3B82F6"
        strokeWidth="14"
      />
      <rect x="151" y="173" width="210" height="43" rx="15" fill="#0B0B0C" />
      <rect x="228" y="205" width="56" height="158" rx="15" fill="#0B0B0C" />
    </svg>
  );
}
