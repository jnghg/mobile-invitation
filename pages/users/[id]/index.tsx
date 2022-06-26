import { cls } from "@libs/client/utils";
import type { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";

const Users: NextPage = () => {
  const [title] = useState({
    hello: "결혼합니다",
    maleName: "이 환",
    maleEngName: "Hwan",
    femaleName: "한지희",
    femaleEngName: "Ji Hee",
    date: "2022.05.21 (토) 오후 1:00",
    hallName: "데스트니컨벤션 그랜드볼륨홈",
  });

  const [greeting] = useState({
    title: "Invitation",
    commnet: `오래 전 작은 인연이 저희를 연인으로 만들었고,
            지금 그 인연으로 저희가 하나가 됩니다.
            아직 부족하지만 늘 그 인연을 생각하며
            서로 아껴주고 사랑하며 살겠습니다.
            그 시작의 자리를 빛내어 주시면
            더없는 기쁨으로 간직하겠습니다.`,
    maleCall: "신랑측에 전화하기",
    femaleCall: "신부측에 전화하기",
    maleName: "환",
    maleFatherName: "이정환",
    maleMotherName: "최지선",
    maleType: "차남",
    femaleName: "지희",
    femaleFatherName: "한명호",
    femaleMothername: "최지선",
    femaleType: "장녀",
  });

  const [location] = useState({
    title: "Location",
    subTitle: "오시는길",
    wedHall: "데스티니컨벤션 / 그랜드볼륨홀",
    wedAddr: "서울특별시 용산구 이촌로 5",
    wedCall: "02-888-5555",
    vihicle: [
      {
        name: "지하철",
        text: `1호선 용산역 3번출구 / 도보 5분
              6호선 효창공원앞역 6번출구 / 도보15분
              경의중앙선 효창공원앞역 4번출구 / 도보 15분`,
      },
      {
        name: "버스",
        text: `1호선 용산역 3번출구 / 도보 5분
        6호선 효창공원앞역 6번출구 / 도보15분
        경의중앙선 효창공원앞역 4번출구 / 도보 15분`,
      },
      {
        name: "자가용",
        text: `1호선 용산역 3번출구 / 도보 5분
        6호선 효창공원앞역 6번출구 / 도보15분
        경의중앙선 효창공원앞역 4번출구 / 도보 15분`,
      },
    ],
  });

  const [message] = useState({
    title: "Message",
    subTitle: "신랑 신부에게 축하메세지를 남겨보세요",
    comments: [
      {
        name: "유리",
        comment:
          "축하축하축하츄 축하축하축하츄 축하축하축하츄 축하축하축하츄 축하축하축하츄 축하축하축하츄",
        date: "2022-01-12",
      },
      {
        name: "효진",
        comment: `너와 결혼까지 생각했어! 같은집 같은방에서!! 
          워워어어어어어엉어 히이이이이이이이이이이이이이이이이이이이이이이이
          사아아아아아아아아아아아아아아아아
          오오오오오오오오오오오오오오오오오
          이이이이이이이이`,
        date: "2022-05-11",
      },
      {
        name: "피카츄",
        comment: `피카피카 피카츄 
                피카피카 피카츄`,
        date: "2022-08-12",
      },
    ],
  });

  return (
    <>
      {/* 타이틀 */}
      <div className="relative h-screen">
        <Image
          src={"/wed_title.jpeg"}
          className="bg-slate-300 object-cover"
          layout="fill"
        />
        <div className="absolute w-full text-center text-blue-500">
          <span>
            <p className="py-6 px-4 text-center text-white text-xl font-thin">
              {title.hello || ""}
            </p>
            <p className="py-2 text-center text-white text-2xl tracking-wide font-thin">
              {title.maleName || ""}
            </p>
            <p className="text-center text-white text-1xl tracking-wide font-thin">
              +
            </p>
            <p className="py-2 text-center text-white text-2xl tracking-wide font-thin">
              {title.femaleName || ""}
            </p>
          </span>
          <span className="text-center text-white text-3xl tracking-wide font-thin">
            <p className="mt-80">
              {title.maleEngName || ""} & {title.femaleEngName || ""}
            </p>
            <p className="pt-4 text-center text-white text-base tracking-wide font-thin">
              {title.date || ""}
            </p>
            <p className="text-center text-white text-base tracking-wide font-thin leading-10">
              {title.hallName || ""}
            </p>
          </span>
        </div>
      </div>
      {/* 인사말 */}
      <div className="text-center leading-10">
        <p className="text-center py-20">{greeting.title}</p>
        <div className="leading-8 whitespace-pre-line">{greeting.commnet}</div>

        <div className="py-7 divide-y divide-gray-300">
          <div className="py-7" />
          <div className="ml-16 mr-16 whitespace-pre">
            <p>
              {" "}
              <b>
                {greeting.maleFatherName} x {greeting.maleMotherName}
              </b>{" "}
              의 {greeting.maleType} <b> {greeting.maleName}</b>{" "}
            </p>
            <p>
              {" "}
              <b>
                {greeting.femaleFatherName} x {greeting.femaleMothername}
              </b>{" "}
              의 {greeting.femaleType} <b>{greeting.femaleName}</b>{" "}
            </p>
          </div>
          <div className="ml-16 mr-16" />
        </div>
        <div className="py-7 ml-11 flex space-x-10 justify-center mr-16">
          <div>
            💙
            <p>{greeting.maleCall}</p>
          </div>
          <div>
            🤎
            <p>{greeting.femaleCall}</p>
          </div>
        </div>
      </div>
      {/* 달력 */}
      <div className="relative h-screen">
        <Image
          src={"/TypeA_Calander.png"}
          className="bg-slate-300 object-cover"
          layout="fill"
        />
      </div>
      {/* 사진첩 */}
      <div className="text-center py-20">
        <p>Gallery</p>
      </div>
      <div className="relative">
        <div className="grid grid-cols-2 gap-4 px-4">
          <Image src={"/wed1.jpeg"} width={500} height={500} />
          <Image src={"/wed3.jpeg"} width={500} height={500} />
          <Image src={"/wed2.jpeg"} width={500} height={500} />
          <Image src={"/wed4.jpeg"} width={500} height={500} />
          <Image src={"/wed5.jpeg"} width={500} height={500} />
          <Image src={"/wed6.jpeg"} width={500} height={500} />
        </div>
      </div>
      {/* 오시는길 */}
      <div className="container mx-auto text-center py-10">
        <p className="py-12"> {location.title} </p>
        <p className="text-sm pb-10"> {location.subTitle} </p>

        {/* 지도 부분 */}
        <div className="container px-4">
          <div className="bg-slate-400 h-52 rounded-md" />
        </div>

        <div className="py-12 text-sm leading-5 font-thin">
          <p> {location.wedHall} </p>
          <p> {location.wedAddr} </p>
          <p> 📞 {location.wedCall} </p>
        </div>
      </div>

      {/* 대중교통 */}
      {location.vihicle.map((vihicle, i) => (
        <div
          key={i}
          className="flex justify-center space-x-5 items-center mb-10"
        >
          <div className="bg-slate-500 w-20 h-16" />
          <div className="px-10 space-y-2">
            <div className="font-medium">{vihicle.name}</div>
            <div className="font-thin text-sm whitespace-pre-line">
              {vihicle.text}
            </div>
          </div>
        </div>
      ))}

      {/* 방명록 */}
      <div className="text-center py-20 bg-slate-100">
        <p className="pb-5">{message.title}</p>
        <p className="font-thin py-3">{message.subTitle}</p>

        <div className="px-5 py-5">
          <div className="space-y-5">
            {message.comments.map((message, key) => (
              <div key={key} className="bg-white rounded-lg py-5 px-5 pt-10">
                <div className="flex pl-5 space-x-10 justify-start items-center">
                  <div className="font-medium">{message.name}</div>
                  <div className="w-3/4 px-12 text-left text-sm font-thin whitespace-pre-line">
                    {message.comment}
                  </div>
                </div>
                <div className="flex justify-end font-thin">{message.date}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 페이징처리 */}
        <div className="px-10">
          <div className="flex justify-between items-center">
            <div className="font-thin">
              <span>&lt;</span>
              {[1, 2, 3].map((i, key) => (
                <span key={key} className="px-5">
                  <span className={cls(i === 1 ? "font-medium" : "")}>{i}</span>
                </span>
              ))}
              <span>&gt;</span>
            </div>
            <button className="float-right text-sm hover:bg-gray-400 bg-gray-300 py-1 px-4 rounded-lg shadow-sm">
              작성하기
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
