export default function DropDown({ subMenus, dropDown }) {
  console.log(subMenus);
  return (
    <div>
      <div>
        {subMenus.map(({ subTitle, url }, index) => (
          <div key={index}>{subTitle}</div>
        ))}
      </div>
    </div>
  );
}
