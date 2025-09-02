import { useMemo } from "react";
import { getPaginationPages } from "@/data/getPaginationPages";

interface PaginationProps {
  count: number;
  page: number;
  pageSize?: number;
  onPageChange: (p: number) => void;
}

export const Pagination = ({
  count,
  page,
  pageSize = 10,
  onPageChange,
}: PaginationProps) => {
  const totalPages = Math.max(1, Math.ceil(count / pageSize));

  const pages = useMemo(
    () => getPaginationPages(page, totalPages),
    [page, totalPages]
  );

  if (totalPages <= 1) return null;

  const buttonBaseClasses =
    "px-3 py-1.5 rounded-lg transition disabled:opacity-50 disabled:hover:bg-gray-800 disabled:hover:text-yellow-400";

  const getButtonClasses = (isActive: boolean) =>
    isActive
      ? "bg-yellow-400 text-gray-900"
      : "bg-gray-800 text-yellow-400 hover:bg-yellow-500 hover:text-gray-900";

  return (
    <nav
      className="mt-6 flex justify-center items-center gap-2"
      aria-label="Pagination Navigation"
    >
      <PaginationButton
        label="Previous"
        disabled={page === 1}
        onClick={() => onPageChange(page - 1)}
      />

      {pages.map((p, i) =>
        p === "..." ? (
          <span key={`dots-${i}`} className="px-3 py-1 text-gray-500">
            ...
          </span>
        ) : (
          <button
            key={`page-${p}`}
            onClick={() => onPageChange(p as number)}
            className={`${buttonBaseClasses} ${getButtonClasses(page === p)}`}
            aria-current={page === p ? "page" : undefined}
          >
            {p}
          </button>
        )
      )}

      <PaginationButton
        label="Next"
        disabled={page === totalPages}
        onClick={() => onPageChange(page + 1)}
      />
    </nav>
  );
};

interface PaginationButtonProps {
  label: string;
  disabled: boolean;
  onClick: () => void;
}

const PaginationButton = ({
  label,
  disabled,
  onClick,
}: PaginationButtonProps) => (
  <button
    disabled={disabled}
    onClick={onClick}
    className="px-3 py-1.5 rounded-lg bg-gray-800 hover:bg-yellow-400 hover:text-gray-900 transition disabled:opacity-50 disabled:hover:bg-gray-800 disabled:hover:text-yellow-400"
  >
    {label}
  </button>
);
