import DaumPostcode from "react-daum-postcode";

interface DaumPostCode {
  onCompletePost: any;
}

export default function AddressModal({ onCompletePost }: DaumPostCode) {
  return (
    <div>
      <DaumPostcode onComplete={onCompletePost} />
    </div>
  );
}
