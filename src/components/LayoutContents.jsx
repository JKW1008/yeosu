export default function LayoutContents({
  width = "max-w-7xl",
  title,
  children,
}) {
  return (
    <section className="max-w-5xl justify-start mx-auto  mt-20">
      <div className={`w-full flex flex-col ${width}`}>
        <div className="w-full">
          <h1 className="text-2xl py-2 flex justify-start font-bold">
            {title}
          </h1>
          {children}
        </div>
      </div>
    </section>
  );
}
