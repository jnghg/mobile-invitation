import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import AddressModal from "../components/addrModal";

const Form: NextPage = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const today = year + "-" + (month > 10 ? month : "0" + month) + "-" + day;

  const [isAddressClick, setIsAddressClick] = useState(false);
  const { register, handleSubmit, setValue } = useForm();

  // 주소검색콜백
  const onCompletePost = (post: any) => {
    setValue("address", post.address);
    setIsAddressClick(false);
  };

  // 주소검색
  const onClickFindPost = () => {
    setIsAddressClick(!isAddressClick);
  };

  // 저장
  const onValid = () => {
    console.log("저장");
  };

  // 취소
  const onclickCancel = () => {
    console.log("취소");
  };

  return (
    <form
      className="justify-start space-y-10 px-5 py-5"
      onSubmit={handleSubmit(onValid)}
    >
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

        <div>예식 일시</div>
        <div className="flex justify-between">
          <div>
            <input
              type="date"
              name="date"
              defaultValue={today}
              className="rounded-md border border-slate-400 w-44"
            />
          </div>
          <div className="space-x-2">
            <select className="rounded-md border border-slate-400" name="time">
              <option value="am">오전</option>
              <option value="pm">오후</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <input
              className="w-16 rounded-md border border-slate-400"
              type="text"
              name="hour"
            />
            <label className="block">시</label>
            <input
              className="w-16 rounded-md border border-slate-400"
              type="text"
              name="min"
            />
            <label className="block">분</label>
          </div>
        </div>
        <div className="space-y-2">
          <div>예식장명</div>
          <input
            className="rounded-md w-full border border-slate-400"
            type="text"
            placeholder="ex) 와우컨벤션"
          />
        </div>
        <div className="space-y-2">
          <div>홀 상세정보</div>
          <input
            className="rounded-md w-full border border-slate-400"
            type="text"
            placeholder="ex) 3층 크리스탈홀"
          />
        </div>
        <div className="space-y-2">
          <div>예식장 연락처</div>
          <input
            className="rounded-md w-full border border-slate-400"
            type="text"
            placeholder="'-'없이 숫자만 입력하세요"
          />
        </div>
        <div className="space-y-2">
          <div>예식장 주소</div>
          <div className="flex">
            <input
              className="rounded-md w-full border border-slate-400"
              type="text"
              placeholder="주소입력"
              {...register("address")}
            />
            <button
              className="rounded-md w-24 ml-2 border border-slate-300 bg-slate-300 hover:bg-slate-400"
              onClick={onClickFindPost}
            >
              주소검색
            </button>
          </div>
          {isAddressClick ? (
            <AddressModal onCompletePost={onCompletePost} />
          ) : null}
        </div>
      </div>

      {/* 버튼 */}
      <div className="flex py-5 space-x-3">
        <button
          type="button"
          className="bg-slate-200 py-2 px-2 rounded-md w-1/2 hover:bg-slate-300 shadow-md font-medium text-lg"
          onClick={onclickCancel}
        >
          취소
        </button>
        <button className="bg-blue-300 py-2 px-2 rounded-md w-1/2 hover:bg-blue-400 shadow-md font-medium text-lg">
          저장
        </button>
      </div>
    </form>
  );
};

export default Form;
