import type { NextPage } from "next";

const Form: NextPage = () => {
  return (
    <div className="justify-start space-y-10 px-5 py-5">
      {/* 주문자 정보 */}
      <div className="space-y-5 ">
        <div className="border-b-2 pb-2 text-xl font-medium">주문자 정보</div>
        <div className="grid grid-cols-1 gap-4">
          <div className="space-y-2">
            <div>주문자명</div>
            <input
              className="rounded-md w-full border border-slate-400"
              type="text"
              placeholder="이름"
            />
          </div>
          <div className="space-y-2">
            <div>휴대폰 번호</div>
            <input
              className="rounded-md w-full border border-slate-400"
              type="number"
              placeholder="'-'없이 숫자만 입력하세요"
            />
          </div>
          <div className="space-y-2">
            <div>이메일 주소</div>
            <input
              className="rounded-md w-full border border-slate-400"
              type="email"
              placeholder="you@example.com"
            />
          </div>
        </div>
      </div>

      {/* 신랑신부 정보 */}
      <div className="space-y-5">
        <div className="border-b-2 pb-2 text-xl font-medium">신랑신부 정보</div>
        <div className="grid grid-cols-1 gap-4">
          <div className="space-y-2">
            <label htmlFor="신랑" className="block">
              신랑
            </label>
            <input
              className="rounded-md w-1/4 border border-slate-400"
              type="text"
              placeholder="이름"
            />
            <span className="pointer-events-none rounded-l-md w-1/4 ml-10 border border-r-0 px-2.5 py-[11px] border-slate-400 text-slate-400">
              +82
            </span>
            <input
              className="rounded-r-md w-2/4 border border-slate-400"
              type="text"
              placeholder="'-'없이 숫자만 입력하세요"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="신부" className="block">
              신부
            </label>
            <input
              className="rounded-md w-1/4 border border-slate-400"
              type="text"
              placeholder="이름"
            />
            <span className="pointer-events-none rounded-l-md w-1/4 ml-10 border border-r-0 px-2.5 py-[11px] border-slate-400 text-slate-400">
              +82
            </span>
            <input
              className="rounded-md w-2/4 border border-slate-400"
              type="text"
              placeholder="'-'없이 숫자만 입력하세요"
            />
          </div>
        </div>
      </div>

      {/* 혼주 정보 */}
      <div>
        <div className="border-b-2 pb-2 text-xl font-medium">혼주 정보</div>
      </div>

      {/* 예식장 정보 */}
      <div></div>
    </div>
  );
};

export default Form;
