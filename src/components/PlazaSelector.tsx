import { useState, useRef, useEffect } from 'react';
import type { Plaza } from '../types';

interface PlazaSelectorProps {
  plazas: Plaza[];
  value: Plaza | null;
  onChange: (plaza: Plaza | null) => void;
  disabled?: boolean;
}

export function PlazaSelector({ plazas, value, onChange, disabled = false }: PlazaSelectorProps) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = plazas.filter((p) =>
    p.label.toLowerCase().includes(search.toLowerCase())
  );

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
        setSearch('');
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function handleSelect(plaza: Plaza) {
    onChange(plaza);
    setOpen(false);
    setSearch('');
  }

  function handleToggle() {
    if (disabled) return;
    setOpen((prev) => {
      if (!prev) setTimeout(() => inputRef.current?.focus(), 50);
      return !prev;
    });
  }

  return (
    <div className="plaza-selector" ref={containerRef}>
      {/* Trigger */}
      <button
        type="button"
        className={`plaza-selector__trigger${open ? ' open' : ''}${disabled ? ' disabled' : ''}`}
        onClick={handleToggle}
        aria-haspopup="listbox"
        aria-expanded={open}
        disabled={disabled}
      >
        <span className={value ? 'plaza-selector__value' : 'plaza-selector__placeholder'}>
          {value ? value.label : 'Selecciona un proyecto'}
        </span>
        <svg
          className={`plaza-selector__chevron${open ? ' rotated' : ''}`}
          width="18" height="18" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="plaza-selector__dropdown" role="listbox">
          {/* Search input */}
          <div className="plaza-selector__search-wrap">
            <svg className="plaza-selector__search-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              ref={inputRef}
              type="text"
              className="plaza-selector__search"
              placeholder="Buscar proyecto..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Options */}
          <ul className="plaza-selector__list">
            {filtered.length === 0 ? (
              <li className="plaza-selector__empty">Sin resultados</li>
            ) : (
              filtered.map((p) => (
                <li
                  key={p.id}
                  role="option"
                  aria-selected={value?.id === p.id}
                  className={`plaza-selector__option${value?.id === p.id ? ' selected' : ''}`}
                  onClick={() => handleSelect(p)}
                >
                  <span>{p.label}</span>
                  {value?.id === p.id && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                </li>
              ))
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
