import Layout from "./components/Layout";
import LayoutContents from "./components/LayoutContents";
import LayoutTab from "./components/LayoutTab";
import Person from "./components/Person";
import Company from "./components/Company";
const tabLists = [
  { title: "개인", children: <Person /> },
  { title: "기업", children: <Company /> },
];

export default function Find() {
  return (
    <div>
      <Layout>
        <LayoutContents title={"아이디/비밀번호 찾기"}>
          <LayoutTab tabLists={tabLists} numbers="grid-cols-2" />
        </LayoutContents>
      </Layout>
    </div>
  );
}
