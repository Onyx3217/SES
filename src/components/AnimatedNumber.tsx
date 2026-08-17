import React from 'react';

type CountUpNumberProps = {
  value: number;
  decimals?: number;
  duration?: number;
  start?: number;
  useGrouping?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

const numberPattern = /[+]?\d+(?:[\s\u00a0]\d{3})*(?:[,.]\d+)?|-\d+(?:[\s\u00a0]\d{3})*(?:[,.]\d+)?/g;

function easeOutCubic(progress: number) {
  return 1 - Math.pow(1 - progress, 3);
}

function getDecimalCount(token: string) {
  const separator = token.includes(',') ? ',' : token.includes('.') ? '.' : null;
  return separator ? token.split(separator)[1]?.length || 0 : 0;
}

function parseNumericToken(token: string) {
  return Number(token.replace(/[\s\u00a0]/g, '').replace(',', '.'));
}

export function CountUpNumber({
  value,
  decimals = 0,
  duration = 850,
  start = 0,
  useGrouping = false,
  className,
  style,
}: CountUpNumberProps) {
  const initialValue = start;
  const [displayValue, setDisplayValue] = React.useState(initialValue);

  React.useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion || !Number.isFinite(value)) {
      setDisplayValue(value);
      return undefined;
    }

    const from = value === 0 ? 0 : start;
    const startedAt = performance.now();
    let frame: number | undefined;

    const tick = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      const eased = easeOutCubic(progress);
      const nextValue = from + (value - from) * eased;
      const multiplier = Math.pow(10, decimals);

      setDisplayValue(Math.round(nextValue * multiplier) / multiplier);

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    setDisplayValue(from);
    frame = requestAnimationFrame(tick);

    return () => {
      if (frame !== undefined) cancelAnimationFrame(frame);
    };
  }, [decimals, duration, start, value]);

  return (
    <span className={className} style={{ fontVariantNumeric: 'tabular-nums', ...style }}>
      {displayValue.toLocaleString('fr-FR', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
        useGrouping,
      })}
    </span>
  );
}

export function AnimatedNumberText({ text }: { text: string }) {
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;

  for (const match of text.matchAll(numberPattern)) {
    const token = match[0];
    const index = match.index ?? 0;
    const value = parseNumericToken(token);

    if (index > lastIndex) {
      parts.push(text.slice(lastIndex, index));
    }

    if (Number.isFinite(value)) {
      const hasPlus = token.startsWith('+');
      parts.push(
        <React.Fragment key={`${index}-${token}`}>
          {hasPlus ? '+' : ''}
          <CountUpNumber
            value={value}
            decimals={getDecimalCount(token)}
            useGrouping={/[\s\u00a0]/.test(token)}
            duration={900}
          />
        </React.Fragment>,
      );
    } else {
      parts.push(token);
    }

    lastIndex = index + token.length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return <>{parts}</>;
}
