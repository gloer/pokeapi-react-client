import "./PageTitle.css";

export type PageTitleProps = {
  isFancy?: boolean
  children: React.ReactNode
};

export default function PageTitle({
  isFancy = false,
  children
}: PageTitleProps) {
  return (
    <h1 
      className={`page-title ${isFancy ? "fancy" : ""}`}
    >
      {children}
    </h1>
  )
}