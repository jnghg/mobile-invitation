import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  return (
    <>
      <div className="relative">
        <div className="absolute w-full">
          {/* 헤더부 */}
          <div className="py-5 space-y-5">
            <p className="text-4xl text-slate-900">List</p>
            <div className="flex justify-between items-center">
              <p className="text-2xl text-gray-400 font-medium">
                등록된 고객 리스트
              </p>
              <div className="space-x-2">
                <input
                  className="rounded-lg border border-slate-400 py-2 px-2"
                  type="text"
                  placeholder="Search.."
                />
                <button className="bg-blue-400 py-2 px-2 rounded-lg shadow-md hover:bg-blue-500">
                  Search
                </button>
              </div>
            </div>
            <div className="divide-y h-0.5 bg-gray-800" />
          </div>
          <div>
            {/* 리스트 */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-md shadow-lg hover:border-2 cursor-pointer">
                  <Image
                    className="rounded-lg"
                    src={"/wed4.jpeg"}
                    width={300}
                    height={200}
                  />
                  <div className="space-y-2 py-2 px-2">
                    <p className="text-blue-500 text-xl font-medium">피카츄</p>
                    <p className="text-gray-500">피카츄의 웨딩</p>
                  </div>
                </div>
                <div className="rounded-md shadow-lg hover:border-2 cursor-pointer">
                  <Image
                    className="rounded-lg"
                    src={"/wed3.jpeg"}
                    width={300}
                    height={200}
                  />
                  <div className="space-y-2 py-2 px-2">
                    <p className="text-blue-500 text-xl font-medium">라이츄</p>
                    <p className="text-gray-500">라이츄의 웨딩</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
