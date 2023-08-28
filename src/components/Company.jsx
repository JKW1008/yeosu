export default function Person() {
  return (
    <div className=" w-full flex gap-5">
      <div className="w-1/2">
        <h1 className="text-2xl">아이디찾기</h1>
        <p className="mt-5">본인 휴대전화 정보로 본인 인증</p>
        <div className="border-2 border-l-0 border-r-0 border-t-blue-gray-500 mt-5 w-full pb-10 flex flex-col">
          <div className="w-full py-5 flex justify-center gap-2 items-center border-2 border-t-0 border-l-0 border-r-0">
            <p>사업자 등록번호</p>
            <input type="text" className="border-2 rounded-lg px-2 py-1 w-20" />
            -
            <input type="text" className="border-2 rounded-lg px-2 py-1 w-12" />
            -
            <input type="text" className="border-2 rounded-lg px-2 py-1 w-32" />
          </div>
          <div className="mt-10 flex justify-center gap-2">
            <input
              type="text"
              placeholder="휴대전화번호 입력('-'제외)"
              className="border-2 border-t-0 border-l-0 border-r-0 w-1/2"
            />
            <button className="border-2 px-1 py-1 border-blue-gray-500 rounded-lg text-blue-gray-500 w-1/4">
              인증번호 전송
            </button>
          </div>
          <div className=" mt-10 flex justify-center gap-2 w-full">
            <input
              type="text"
              placeholder="인증번호 입력"
              className="border-2 border-t-0 border-l-0 border-r-0 w-1/2"
            />
            <button className="border-2 px-1 py-1 border-blue-gray-500 rounded-lg text-blue-gray-500 w-1/4">
              확인
            </button>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <h1 className="text-2xl">비밀번호찾기</h1>
        <p className="mt-5">본인 휴대전화 정보로 본인 인증</p>
        <div className="border-2 border-l-0 border-r-0 border-t-blue-gray-500 mt-5 w-full pb-10 flex flex-col">
          <div className=" py-5 flex justify-center gap-2 items-center border-2 border-t-0 border-l-0 border-r-0">
            <p>아이디</p>
            <input
              type="text"
              placeholder="아이디를 입력해 주세요."
              className="border-2 rounded-lg w-1/2 px-2 py-1"
            />
          </div>
          <div className="mt-10 flex justify-center gap-2">
            <input
              type="text"
              placeholder="휴대전화번호 입력('-'제외)"
              className="border-2 border-t-0 border-l-0 border-r-0 w-1/2"
            />
            <button className="border-2 px-1 py-1 border-blue-gray-500 rounded-lg text-blue-gray-500 w-1/4">
              인증번호 전송
            </button>
          </div>
          <div className=" mt-10 flex justify-center gap-2 w-full">
            <input
              type="text"
              placeholder="인증번호 입력"
              className="border-2 border-t-0 border-l-0 border-r-0 w-1/2"
            />
            <button className="border-2 px-1 py-1 border-blue-gray-500 rounded-lg text-blue-gray-500 w-1/4">
              확인
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
