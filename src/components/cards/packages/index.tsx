import React from 'react';
import Image from "next/image";
import { IcnCheckCircleFill } from '@/components/icons';

interface CardPros {
    standOutBg?: string;
    marginMiddle?: string;
    Package?: string;
    Price?: string;
    image?: string;
    Feature1?: string;
    Feature2?: string;
    Feature3?: string;
    Feature4?: string;
    Feature5?: string;
    Feature6?: string;
    iconColor1?: string;
    iconColor2?: string;
    iconColor3?: string;
    iconColor4?: string;
    iconColor5?: string;
    iconColor6?: string;
    buttonBg?: string;
    buttonTextColor?: string;
    hoverBgButton?: string;

}
const Card:React.FC<CardPros> = ({ 
    standOutBg, 
    marginMiddle, 
    Package, 
    Price, 
    image,
    Feature1,
    Feature2,
    Feature3,
    Feature4,
    Feature5,
    Feature6, 
    iconColor1,
    iconColor2,
    iconColor3,
    iconColor4,
    iconColor5,
    iconColor6, 
    buttonBg,
    buttonTextColor,
    hoverBgButton  
}) => {
  return (
    <div
      className={`w-full shadow-xl flex flex-col p-4 my-4 ${standOutBg} ${marginMiddle} rounded-lg hover:scale-105 duration-300`}
    >
        <Image
            src={`${image}`}
            alt="image1"
            width={512}
            height={512}
            className="w-20 mx-auto mt-[-3rem] bg-white rounded-md"
        />
        <h2 className="text-2xl font-bold text-center">{Package}</h2>
        <p className="py-2 mx-8 mb-6 -mt-2 flex justify-center text-3xl font-bold">{Price}</p>
        <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 flex justify-between">
            {Feature1}
            <IcnCheckCircleFill className={`ml-2 my-auto ${iconColor1}`} />
            </p>
            <p className="py-2 border-b mx-8 flex justify-between">
            {Feature2}
            <IcnCheckCircleFill className={`ml-2 my-auto ${iconColor2}`} />
            </p>
            <p className="py-2 border-b mx-8 flex justify-between">
            {Feature3}
            <IcnCheckCircleFill className={`ml-2 my-auto ${iconColor3}`} />
            </p>
            <p className="py-2 border-b mx-8 flex justify-between">
            {Feature4}
            <IcnCheckCircleFill className={`ml-2 my-auto ${iconColor4}`} />
            </p>
            <p className="py-2 border-b mx-8 flex justify-between">
            {Feature5}
            <IcnCheckCircleFill className={`ml-2 my-auto ${iconColor5}`} />
            </p>
            <p className="py-2  mx-8 flex justify-between">
            {Feature6}
            <IcnCheckCircleFill className={`ml-2 my-auto ${iconColor6}`} />
            </p>
        </div>
        <button className={`justify-center flex mx-auto w-[200px] ${buttonBg} ${hoverBgButton} ${buttonTextColor} rounded-md font-medium my-6 py-3`}>
            Contact Suport
        </button>
    </div>
  );
};

export default Card