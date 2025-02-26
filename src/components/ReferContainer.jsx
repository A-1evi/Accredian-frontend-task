import { Refer_ai } from "../utils/constanst";
import { UserPlusIcon } from "@heroicons/react/20/solid";
import { WalletIcon } from "@heroicons/react/20/solid";
import {ClipboardDocumentCheckIcon } from "@heroicons/react/24/outline";
const ReferSteps = () => {
  return (
    <div className="relative flex flex-col items-center py-12  text-blue-600">
      <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
        How Do I <span className="text-blue-400">Refer?</span>
      </h2>

      <div className="flex gap-10 ">
        <div className="text-center w-[300px] shadow-2xl rounded-full h-[300px] text-center justify-center items-center flex flex-col">
          <UserPlusIcon className="w-20" />
          <p className="text-black p-6">
            Submit referrals easily via our website’s referral section.
          </p>
        </div>

        <div className="text-center w-[300px] shadow-2xl rounded-full h-[300px] text-center justify-center items-center flex flex-col">
          <WalletIcon className="w-20" />
          <p className="text-black p-6">
            Earn rewards when your referral joins.
          </p>
        </div>

        <div className="text-center w-[300px] shadow-2xl rounded-full h-[300px] text-center justify-center items-center flex flex-col">
          <ClipboardDocumentCheckIcon className="w-20" />
          <p className="text-black p-6">Receive your bonus after 30 days.</p>
        </div>
      </div>

      <button className="mt-8 bg-blue-600 text-white px-6 py-3  text-2xl rounded-md shadow-md hover:bg-blue-700 ">
        Refer Now
      </button>
    </div>
  );
};

export default ReferSteps;
