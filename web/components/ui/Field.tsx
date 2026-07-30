/**
 * Form fields. Labels are always visible — never a placeholder standing in for
 * a label — and the required marker is spoken, not just drawn.
 *
 * The control shares its radius, height and padding with the buttons, so a
 * form reads as part of the same object as the rest of the page.
 */
const control =
  'min-h-[3.25rem] w-full rounded-input border border-line-strong bg-surface px-4 text-base text-ink shadow-1 transition-colors duration-fast ease-calm placeholder:text-ink-mute/70 hover:border-ink/20 focus:border-brand-accent focus:outline-none focus-visible:outline-none'

function Label({
  htmlFor,
  children,
  required,
  requiredLabel,
}: {
  htmlFor: string
  children: React.ReactNode
  required?: boolean
  requiredLabel: string
}) {
  return (
    <label htmlFor={htmlFor} className="text-sm font-medium text-ink">
      {children}
      {required && (
        <>
          <span aria-hidden className="ml-1 text-brand-accent">
            *
          </span>
          <span className="sr-only"> ({requiredLabel})</span>
        </>
      )}
    </label>
  )
}

export function Field({
  id,
  label,
  requiredLabel,
  type = 'text',
  required,
  autoComplete,
  name,
}: {
  id: string
  label: string
  /** Localised word for "required", read out by screen readers. */
  requiredLabel: string
  type?: string
  required?: boolean
  autoComplete?: string
  name?: string
}) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={id} required={required} requiredLabel={requiredLabel}>
        {label}
      </Label>
      <input
        id={id}
        name={name ?? id}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className={control}
      />
    </div>
  )
}

export function SelectField({
  id,
  label,
  requiredLabel,
  placeholder,
  options,
  name,
}: {
  id: string
  label: string
  requiredLabel: string
  placeholder: string
  options: readonly string[]
  name?: string
}) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={id} requiredLabel={requiredLabel}>
        {label}
      </Label>
      <select id={id} name={name ?? id} defaultValue="" className={`${control} py-3`}>
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  )
}

export function TextareaField({
  id,
  label,
  requiredLabel,
  rows = 4,
  name,
}: {
  id: string
  label: string
  requiredLabel: string
  rows?: number
  name?: string
}) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={id} requiredLabel={requiredLabel}>
        {label}
      </Label>
      <textarea
        id={id}
        name={name ?? id}
        rows={rows}
        className={`${control} py-3.5 leading-relaxed`}
      />
    </div>
  )
}
