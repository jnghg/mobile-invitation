import type { NextPage } from "next";
import React, { useState } from "react";

const Form: NextPage = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const today = year + "-" + (month > 10 ? month : "0" + month) + "-" + day;

  const [radio, setRadio] = useState<String>("am");

  return (
    <form className="justify-start space-y-10 px-5 py-5">
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
            <div>신랑</div>
            <div className="flex justify-between">
              <input
                className="rounded-md border border-slate-400 w-1/3"
                type="text"
                placeholder="이름"
              />
              <div className="pointer-events-none rounded-l-md ml-3 w-1/7 border border-r-0 px-2.5 py-[11px] border-slate-400 text-slate-400">
                +82
              </div>
              <input
                className="rounded-r-md border border-slate-400 w-2/3"
                type="text"
                placeholder="'-'없이 숫자만 입력하세요"
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>신부</div>
            <div className="flex justify-between">
              <input
                className="rounded-md border border-slate-400 w-1/3"
                type="text"
                placeholder="이름"
              />
              <div className="pointer-events-none rounded-l-md ml-3 w-1/7 border border-r-0 px-2.5 py-[11px] border-slate-400 text-slate-400">
                +82
              </div>
              <input
                className="rounded-r-md border border-slate-400 w-2/3"
                type="text"
                placeholder="'-'없이 숫자만 입력하세요"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 혼주 정보 */}
      <div className="space-y-5">
        <div className="border-b-2 pb-2 text-xl font-medium">혼주 정보</div>
        <div className="grid grid-cols-1 gap-4">
          <div className="space-y-2">
            <div>신랑측</div>
            <div className="flex justify-between">
              <input
                className="rounded-md border border-slate-400 w-1/3"
                type="text"
                placeholder="아버지"
              />
              <input
                className="rounded-md border border-slate-400 w-1/3 ml-3"
                type="text"
                placeholder="이름"
              />
              <div className="pointer-events-none rounded-l-md ml-3 w-1/7 border border-r-0 px-2.5 py-[11px] border-slate-400 text-slate-400">
                +82
              </div>
              <input
                className="rounded-r-md border border-slate-400 w-2/3"
                type="text"
                placeholder="'-'없이 숫자만 입력하세요"
              />
            </div>
            <div className="flex justify-between">
              <input
                className="rounded-md border border-slate-400 w-1/3"
                type="text"
                placeholder="어머니"
              />
              <input
                className="rounded-md border border-slate-400 w-1/3 ml-3"
                type="text"
                placeholder="이름"
              />
              <div className="pointer-events-none rounded-l-md ml-3 w-1/7 border border-r-0 px-2.5 py-[11px] border-slate-400 text-slate-400">
                +82
              </div>
              <input
                className="rounded-r-md border border-slate-400 w-2/3"
                type="text"
                placeholder="'-'없이 숫자만 입력하세요"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div>신부측</div>
            <div className="flex justify-between">
              <input
                className="rounded-md border border-slate-400 w-1/3"
                type="text"
                placeholder="아버지"
              />
              <input
                className="rounded-md border border-slate-400 w-1/3 ml-3"
                type="text"
                placeholder="이름"
              />
              <div className="pointer-events-none rounded-l-md ml-3 w-1/7 border border-r-0 px-2.5 py-[11px] border-slate-400 text-slate-400">
                +82
              </div>
              <input
                className="rounded-r-md border border-slate-400 w-2/3"
                type="text"
                placeholder="'-'없이 숫자만 입력하세요"
              />
            </div>
            <div className="flex justify-between">
              <input
                className="rounded-md border border-slate-400 w-1/3"
                type="text"
                placeholder="어머니"
              />
              <input
                className="rounded-md border border-slate-400 w-1/3 ml-3"
                type="text"
                placeholder="이름"
              />
              <div className="pointer-events-none rounded-l-md ml-3 w-1/7 border border-r-0 px-2.5 py-[11px] border-slate-400 text-slate-400">
                +82
              </div>
              <input
                className="rounded-r-md border border-slate-400 w-2/3"
                type="text"
                placeholder="'-'없이 숫자만 입력하세요"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 예식장 정보 */}
      <div className="space-y-5">
        <div className="border-b-2 pb-2 text-xl font-medium">예식장 정보</div>

        <div className="flex justify-between items-center">
          <div>예식 일시</div>
          <div>
            <input
              type="date"
              name="date"
              defaultValue={today}
              className="rounded-md border border-slate-400"
            />
          </div>
          <div className="space-x-2">
            <input
              type="radio"
              name="time"
              value="am"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setRadio(event.target.value)
              }
              checked={radio === "am"}
            />
            <label htmlFor="am">오전</label>
            <input
              type="radio"
              name="time"
              value="pm"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setRadio(event.target.value)
              }
              checked={radio === "pm"}
            />
            <label htmlFor="pm">오후</label>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
