import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FieldError, useForm } from "react-hook-form";
import AddressModal from "../components/addrModal";
import moment from "moment";

import client from "@libs/server/client";

interface PreviewImage {
  preview: string;
  name: string;
  size: number;
  lastModified: number;
}

interface FormType {
  photo: any;
  galleryPhoto: any;
  orderName: string;
  orderPhone: string;
  orderEmail: string;
  groomName: string;
  groomPhone: string;
  brideName: string;
  bridePhone: string;
  groomFather: string;
  groomFatherName: string;
  groomFatherPhone: string;
  brideFather: string;
  brideFatherName: string;
  brideFatherPhone: string;
  wedDate: string;
  wedDateType: string;
  wedDateHour: string;
  wedDateMin: string;
  wedHallName: string;
  wedHallDetail: string;
  wedPhone: string;
  wedAddress: string;
  wedAddressDetail: string;
}

const Form: NextPage<{ data: FormType }> = ({ data }) => {
  const date = moment(new Date());

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormType>({
    // mode: "onBlur",
  });
  const [isAddressClick, setIsAddressClick] = useState(false);
  const router = useRouter();

  // 주소검색콜백
  const onCompletePost = (post: any) => {
    setValue("wedAddress", post.address);
    setIsAddressClick(false);
  };

  // 주소검색
  const onClickFindPost = () => {
    setIsAddressClick(!isAddressClick);
  };

  // 저장
  const onValid = async (data: FormType) => {
    console.log("저장", data);

    // 메인사진
    if (photo && photo.length > 0) {
      const { uploadURL } = await (await fetch(`/api/files`)).json();
      const formData = new FormData();

      formData.append("file", photo[0]);

      const {
        result: { id },
      } = await (
        await fetch(uploadURL, {
          method: "POST",
          body: formData,
        })
      ).json();

      console.log("메인사진 이미지 id : ", id);
    }

    // 갤러리 사진
    if (galleryPhoto && galleryPhoto.length > 0) {
      for (let i = 0; i < galleryPhoto.length; i++) {
        const { uploadURL } = await (await fetch(`/api/files`)).json();
        const formData = new FormData();

        formData.append("file", galleryPhoto[i]);

        const {
          result: { id },
        } = await (
          await fetch(uploadURL, {
            method: "POST",
            body: formData,
          })
        ).json();

        console.log("갤러리사진 이미지 id : ", id);
      }
    }

    console.log("등록 끝 ");
  };

  // validate
  const onInvalid = () => {
    console.log("validate");
  };

  // 취소
  const onclickCancel = () => {
    if (confirm("작성을 멈추고 돌아가시겠습니까?")) {
      router.push("/");
    } else {
      return false;
    }
  };

  const photo = watch("photo");
  const galleryPhoto = watch("galleryPhoto");
  const [photoPreview, setPhotoPreview] = useState("");
  const [galleryPhotoPreview, setGalleryPhotoPreview] = useState<
    PreviewImage[]
  >([]);

  useEffect(() => {
    if (photo && photo.length > 0) {
      const file = photo[0];
      setPhotoPreview(URL.createObjectURL(file));
    }
    if (galleryPhoto && galleryPhoto.length > 0) {
      //
      for (let i = 0; i < galleryPhoto.length; i++) {
        let file = galleryPhoto[i];

        if (file.size > 2000000) {
          alert("이미지 용량은 최대 2MB 입니다.");
          return;
        }

        setGalleryPhotoPreview((previewImage) => [
          ...previewImage,
          {
            preview: URL.createObjectURL(file),
            name: file.name,
            size: file.size,
            lastModified: file.lastModified,
          },
        ]);
      }
    }
  }, [photo, galleryPhoto]);

  // 메인사진 삭제
  const deleteMainPhoto = () => {
    setPhotoPreview("");
    setValue("photo", "");
    URL.revokeObjectURL(photo[0]);
  };

  // 갤러리사진 삭제
  const deleteGalleryPhoto = (deleteImage: PreviewImage) => {
    //
    const priview = galleryPhotoPreview.filter(
      (image) => image.preview !== deleteImage.preview
    );

    // 미리보기 삭제 후 데이터
    setGalleryPhotoPreview(priview);

    let file = {};

    Object.keys(galleryPhoto).forEach((key) => {
      if (galleryPhoto[key].preview !== deleteImage.preview) {
        file = {
          ...file,
          [key]: galleryPhoto[key],
        };
      } else {
        URL.revokeObjectURL(galleryPhoto[key]);
      }
    });

    setValue("galleryPhoto", file);
  };

  console.log("return : ", data);

  return (
    <form
      className="justify-start space-y-10 px-5 py-5"
      onSubmit={handleSubmit(onValid, onInvalid)}
      encType={"multipart/formdata"}
    >
      {/* 주문자 정보 */}
      <div className="space-y-5 ">
        <div className="border-b-2 pb-2 text-xl font-medium">주문자 정보</div>
        <div className="grid grid-cols-1 gap-4">
          <div className="space-y-2">
            <div>*주문자명</div>
            <input
              {...register("orderName", {
                required: "주문자명은 필수입니다.",
              })}
              className="rounded-md w-full border border-slate-400"
              type="text"
              placeholder="이름"
            />
            {errors && errors.orderName ? (
              <div className="text-sm text-red-500 ml-1">
                {errors.orderName.message}
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="space-y-2">
            <div>*휴대폰 번호</div>
            <input
              {...register("orderPhone", {
                required: "휴대폰번호는 필수입니다.",
                maxLength: {
                  message: "자리수를 확인해주세요",
                  value: 11,
                },
              })}
              className="rounded-md w-full border border-slate-400"
              type="text"
              placeholder="'-'없이 숫자만 입력하세요"
            />
            {errors && errors.orderPhone ? (
              <div className="text-sm text-red-500 ml-1">
                {errors.orderPhone.message}
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="space-y-2">
            <div>이메일 주소</div>
            <input
              {...register("orderEmail")}
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
                {...register("groomName")}
                className="rounded-md border border-slate-400 w-1/3"
                type="text"
                placeholder="이름"
              />
              <div className="pointer-events-none rounded-l-md ml-3 w-1/7 border border-r-0 px-2.5 py-[11px] border-slate-400 text-slate-400">
                +82
              </div>
              <input
                {...register("groomPhone")}
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
                {...register("brideName")}
                className="rounded-md border border-slate-400 w-1/3"
                type="text"
                placeholder="이름"
              />
              <div className="pointer-events-none rounded-l-md ml-3 w-1/7 border border-r-0 px-2.5 py-[11px] border-slate-400 text-slate-400">
                +82
              </div>
              <input
                {...register("bridePhone")}
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
                {...register("groomFather")}
                className="rounded-md border border-slate-400 w-1/3"
                type="text"
                placeholder="아버지"
              />
              <input
                {...register("groomFatherName")}
                className="rounded-md border border-slate-400 w-1/3 ml-3"
                type="text"
                placeholder="이름"
              />
              <div className="pointer-events-none rounded-l-md ml-3 w-1/7 border border-r-0 px-2.5 py-[11px] border-slate-400 text-slate-400">
                +82
              </div>
              <input
                {...register("groomFatherPhone")}
                className="rounded-r-md border border-slate-400 w-2/3"
                type="text"
                placeholder="'-'없이 숫자만 입력하세요"
              />
            </div>
            <div className="flex justify-between">
              <input
                {...register("groomMother")}
                className="rounded-md border border-slate-400 w-1/3"
                type="text"
                placeholder="어머니"
              />
              <input
                {...register("groomMotherName")}
                className="rounded-md border border-slate-400 w-1/3 ml-3"
                type="text"
                placeholder="이름"
              />
              <div className="pointer-events-none rounded-l-md ml-3 w-1/7 border border-r-0 px-2.5 py-[11px] border-slate-400 text-slate-400">
                +82
              </div>
              <input
                {...register("groomMotherPhone")}
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
                {...register("brideFather")}
                className="rounded-md border border-slate-400 w-1/3"
                type="text"
                placeholder="아버지"
              />
              <input
                {...register("brideFatherName")}
                className="rounded-md border border-slate-400 w-1/3 ml-3"
                type="text"
                placeholder="이름"
              />
              <div className="pointer-events-none rounded-l-md ml-3 w-1/7 border border-r-0 px-2.5 py-[11px] border-slate-400 text-slate-400">
                +82
              </div>
              <input
                {...register("brideFatherPhone")}
                className="rounded-r-md border border-slate-400 w-2/3"
                type="text"
                placeholder="'-'없이 숫자만 입력하세요"
              />
            </div>
            <div className="flex justify-between">
              <input
                {...register("brideMother")}
                className="rounded-md border border-slate-400 w-1/3"
                type="text"
                placeholder="어머니"
              />
              <input
                {...register("brideMotherName")}
                className="rounded-md border border-slate-400 w-1/3 ml-3"
                type="text"
                placeholder="이름"
              />
              <div className="pointer-events-none rounded-l-md ml-3 w-1/7 border border-r-0 px-2.5 py-[11px] border-slate-400 text-slate-400">
                +82
              </div>
              <input
                {...register("brideMotherPhone")}
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
              {...register("wedDate")}
              type="date"
              defaultValue={date.format("YYYY-MM-DD")}
              className="rounded-md border border-slate-400 w-44"
            />
          </div>
          <div className="space-x-2">
            <select
              className="rounded-md border border-slate-400"
              {...register("wedDateType")}
            >
              <option value="am">오전</option>
              <option value="pm">오후</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <input
              {...register("wedDateHour")}
              className="w-16 rounded-md border border-slate-400"
              type="text"
            />
            <label className="block">시</label>
            <input
              {...register("wedDateMin")}
              className="w-16 rounded-md border border-slate-400"
              type="text"
            />
            <label className="block">분</label>
          </div>
        </div>
        <div className="space-y-2">
          <div>예식장명</div>
          <input
            {...register("wedHallName")}
            className="rounded-md w-full border border-slate-400"
            type="text"
            placeholder="ex) 와우컨벤션"
          />
        </div>
        <div className="space-y-2">
          <div>홀 상세정보</div>
          <input
            {...register("wedHallDetail")}
            className="rounded-md w-full border border-slate-400"
            type="text"
            placeholder="ex) 3층 크리스탈홀"
          />
        </div>
        <div className="space-y-2">
          <div>예식장 연락처</div>
          <input
            {...register("wedPhone")}
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
              {...register("wedAddress")}
            />
            <button
              type="button"
              className="rounded-md w-24 ml-2 border border-slate-300 bg-slate-300 hover:bg-slate-400"
              onClick={onClickFindPost}
            >
              주소검색
            </button>
          </div>
          <div>
            <input
              className="rounded-md w-full border border-slate-400"
              type="text"
              placeholder="상세주소"
              {...register("wedAddressDetail")}
            />
          </div>
          {isAddressClick ? (
            <AddressModal onCompletePost={onCompletePost} />
          ) : null}
        </div>
      </div>

      {/* 메인 사진 첨부 */}
      <div className="space-y-5">
        <div className="border-b-2 pb-2 text-xl font-medium">사진첨부</div>
        <div className="font-medium pb-5">메인사진</div>
        {photoPreview ? (
          <div className="">
            <Image
              src={photoPreview}
              className="w-full text-gray-600 aspect-video h-48 rounded-md"
              layout="responsive"
              width={200}
              height={200}
            />
          </div>
        ) : (
          ""
        )}
        <div className="flex justify-center items-center space-x-3">
          {photoPreview && photo?.length > 0 ? (
            <div
              className="cursor-pointer hover:ring-2 rounded-lg"
              onClick={deleteMainPhoto}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          ) : (
            ""
          )}

          {!photoPreview ? (
            <label className="w-16 cursor-pointer text-gray-600 hover:border-orange-500 hover:text-orange-500 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-md">
              <svg
                className="h-12 w-12"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <input
                {...register("photo")}
                accept="image/*"
                className="hidden"
                type="file"
              />
            </label>
          ) : (
            ""
          )}
        </div>
      </div>

      {/* 갤러리 사진 첨부 */}
      <div className="space-y-5">
        <div className="border-b-2 pb-2 text-xl font-medium" />
        <div className="font-medium pb-5">갤러리 사진</div>

        <div className="grid grid-cols-3 gap-3">
          {galleryPhotoPreview.map((image, key) => (
            <div className="" key={key}>
              {image.preview ? (
                <div className="w-40 h-40">
                  <Image
                    src={image.preview + ""}
                    className="w-40 text-gray-600 aspect-video h-48 rounded-md"
                    layout="responsive"
                    width={40}
                    height={40}
                  />
                </div>
              ) : (
                ""
              )}
              <div className="flex justify-center space-x-3">
                {galleryPhotoPreview ? (
                  <div
                    className="cursor-pointer hover:ring-2 rounded-lg mt-3"
                    onClick={() => deleteGalleryPhoto(image)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                ) : (
                  ""
                )}
                {!galleryPhotoPreview ? (
                  <label className="w-10 mt-2 first:cursor-pointer text-gray-600 hover:border-orange-500 hover:text-orange-500 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-md">
                    <svg
                      className="h-10 w-10"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <input
                      {...register("galleryPhoto")}
                      accept="image/*"
                      className="hidden"
                      type="file"
                    />
                  </label>
                ) : (
                  ""
                )}
              </div>
            </div>
          ))}
          <label className="w-40 h-40 first:cursor-pointer text-gray-600 hover:border-orange-500 hover:text-orange-500 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-md">
            <svg
              className="h-12 w-12"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input
              {...register("galleryPhoto")}
              accept="image/*"
              className="hidden"
              type="file"
              multiple={true}
            />
          </label>
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

export async function getServerSideProps() {
  const data = await client?.user.findMany({});

  return {
    props: {
      data: JSON.parse(JSON.stringify(data)),
    },
  };
}

export default Form;
