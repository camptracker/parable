import { useState, useEffect, useRef, useMemo } from 'react';
import ReactMarkdown from 'react-markdown';

interface WordTimestamp {
  word: string;
  start: number;
  end: number;
}

interface Props {
  text: string;
  audioRef: React.RefObject<HTMLAudioElement | null>;
  isPlaying: boolean;
  timestampsUrl: string;
}

// Parse markdown into segments: { type, text, words[] }
function parseMarkdown(md: string) {
  const lines = md.split('\n');
  const segments: Array<{ tag: string; content: string; wordStart: number }> = [];
  let wordIndex = 0;

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    // Headers
    const headerMatch = trimmed.match(/^(#{1,3})\s+(.+)/);
    if (headerMatch) {
      segments.push({ tag: `h${headerMatch[1].length}`, content: headerMatch[2], wordStart: wordIndex });
      wordIndex += headerMatch[2].replace(/\*+/g, '').split(/\s+/).filter(Boolean).length;
      continue;
    }

    // Regular paragraph
    segments.push({ tag: 'p', content: trimmed, wordStart: wordIndex });
    wordIndex += trimmed.replace(/\*+/g, '').split(/\s+/).filter(Boolean).length;
  }

  return segments;
}

// Render inline markdown (bold, italic) as word spans
function renderInline(content: string, globalWordStart: number, activeIndex: number) {
  // Split into tokens preserving markdown markers
  let remaining = content;

  // Simple approach: strip markers, track formatting per word
  const words: Array<{ text: string; bold: boolean; italic: boolean }> = [];
  let bold = false;
  let italic = false;

  // Process character by character to track state
  let i = 0;
  let currentWord = '';
  while (i < remaining.length) {
    if (remaining[i] === '*') {
      if (remaining[i + 1] === '*') {
        if (currentWord) { words.push({ text: currentWord, bold, italic }); currentWord = ''; }
        bold = !bold;
        i += 2;
        continue;
      } else {
        if (currentWord) { words.push({ text: currentWord, bold, italic }); currentWord = ''; }
        italic = !italic;
        i += 1;
        continue;
      }
    }
    if (remaining[i] === ' ' || remaining[i] === '\t') {
      if (currentWord) { words.push({ text: currentWord, bold, italic }); currentWord = ''; }
      i++;
      continue;
    }
    currentWord += remaining[i];
    i++;
  }
  if (currentWord) words.push({ text: currentWord, bold, italic });

  return words.map((w, idx) => {
    const globalIdx = globalWordStart + idx;
    const isActive = globalIdx === activeIndex;
    let className = 'karaoke-word';
    if (globalIdx <= activeIndex && activeIndex >= 0) className += ' spoken';
    if (isActive) className += ' active';

    let el = <span key={idx} className={className} data-word-idx={globalIdx}>{w.text} </span>;
    if (w.bold && w.italic) el = <strong key={idx}><em><span className={className} data-word-idx={globalIdx}>{w.text} </span></em></strong>;
    else if (w.bold) el = <strong key={idx}><span className={className} data-word-idx={globalIdx}>{w.text} </span></strong>;
    else if (w.italic) el = <em key={idx}><span className={className} data-word-idx={globalIdx}>{w.text} </span></em>;
    return el;
  });
}

export default function KaraokeText({ text, audioRef, isPlaying, timestampsUrl }: Props) {
  const [timestamps, setTimestamps] = useState<WordTimestamp[] | null>(null);
  const [activeWordIndex, setActiveWordIndex] = useState(-1);
  const rafRef = useRef<number>(0);

  // Load timestamps
  useEffect(() => {
    fetch(timestampsUrl)
      .then(r => r.ok ? r.json() : null)
      .then(data => { if (Array.isArray(data)) setTimestamps(data); })
      .catch(() => setTimestamps(null));
  }, [timestampsUrl]);

  // Track audio position
  useEffect(() => {
    if (!isPlaying || !timestamps || !audioRef.current) {
      cancelAnimationFrame(rafRef.current);
      return;
    }

    const tick = () => {
      const time = audioRef.current?.currentTime ?? 0;
      // Find the word being spoken
      let idx = -1;
      for (let i = 0; i < timestamps.length; i++) {
        if (time >= timestamps[i].start && time <= timestamps[i].end) {
          idx = i;
          break;
        }
        // Between words — keep previous highlighted
        if (time > timestamps[i].end && (i + 1 >= timestamps.length || time < timestamps[i + 1].start)) {
          idx = i;
          break;
        }
      }
      setActiveWordIndex(idx);
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isPlaying, timestamps, audioRef]);

  // Reset on stop
  useEffect(() => {
    if (!isPlaying) setActiveWordIndex(-1);
  }, [isPlaying]);

  const segments = useMemo(() => parseMarkdown(text), [text]);

  if (!timestamps) {
    // Fallback: no timestamps, just render markdown normally
    
    return <ReactMarkdown>{text}</ReactMarkdown>;
  }

  return (
    <div className="karaoke-container">
      {segments.map((seg, i) => {
        const words = renderInline(seg.content, seg.wordStart, activeWordIndex);
        switch (seg.tag) {
          case 'h1': return <h1 key={i}>{words}</h1>;
          case 'h2': return <h2 key={i}>{words}</h2>;
          case 'h3': return <h3 key={i}>{words}</h3>;
          default: return <p key={i}>{words}</p>;
        }
      })}
    </div>
  );
}
